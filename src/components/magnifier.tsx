import * as React from "react"

import Image from "@/components/image"
import { cn } from "@/lib/utils"

type Props = {
  /** Путь к изображению (как и в компоненте Image) */
  src: string
  alt: string
  /** Коэффициент увеличения (2.6 = 260%) */
  zoom?: number
  /** Ограничения зума для колеса мыши. */
  zoomMin?: number
  zoomMax?: number
  /** Шаг изменения зума колесом. */
  zoomStep?: number
  /** Диаметр «лупы» в пикселях */
  lensSize?: number
  /** Классы для контейнера */
  className?: string
  /** Классы для тега img */
  imgClassName?: string
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">

function resolvePublicSrc(src: string) {
  if (!src) return src

  // Полные URL и спец-схемы не трогаем.
  if (/^(https?:|data:|blob:|mailto:|tel:)/.test(src) || src.startsWith("//")) return src

  // Если сайт развёрнут в подпапке (Vite `base`), абсолютные пути из `/public`
  // нужно префиксовать `import.meta.env.BASE_URL`.
  if (src.startsWith("/")) {
    const base = import.meta.env.BASE_URL ?? "/"
    if (base === "/") return src
    return (base.endsWith("/") ? base : base + "/") + src.replace(/^\//, "")
  }

  return src
}

/**
 * Лупа-увеличение по наведению.
 *
 * Используем mouse-события (а не pointerType), чтобы работало стабильно
 * во всех браузерах и конфигурациях.
 */
export default function Magnifier({
  src,
  alt,
  zoom = 2.6,
  zoomMin = 1.8,
  zoomMax = 4.0,
  zoomStep = 0.2,
  lensSize = 160,
  className,
  imgClassName,
  onLoad,
  ...imgProps
}: Props) {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const [isActive, setIsActive] = React.useState(false)
  const [lens, setLens] = React.useState({ x: 0, y: 0, bgX: 0, bgY: 0 })
  const [natural, setNatural] = React.useState({ w: 0, h: 0 })
  const [zoomK, setZoomK] = React.useState(zoom)

  const zoomRef = React.useRef(zoom)
  React.useEffect(() => {
    setZoomK(zoom)
  }, [zoom])
  React.useEffect(() => {
    zoomRef.current = zoomK
  }, [zoomK])

  const lastMouseRef = React.useRef<{ x: number; y: number } | null>(null)

  const resolvedSrc = React.useMemo(() => resolvePublicSrc(src), [src])

  const handleImgLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const el = e.currentTarget
    setNatural({ w: el.naturalWidth || 0, h: el.naturalHeight || 0 })
    onLoad?.(e)
  }

  const computeFit = React.useCallback(() => {
    const box = containerRef.current?.getBoundingClientRect()
    const w = box?.width ?? 0
    const h = box?.height ?? 0
    const nw = natural.w
    const nh = natural.h

    if (!w || !h || !nw || !nh) {
      return { w, h, drawW: w, drawH: h, offX: 0, offY: 0 }
    }

    const imgRatio = nw / nh
    const boxRatio = w / h

    if (imgRatio > boxRatio) {
      // Вписываем по ширине
      const drawW = w
      const drawH = w / imgRatio
      return { w, h, drawW, drawH, offX: 0, offY: (h - drawH) / 2 }
    }

    // Вписываем по высоте
    const drawH = h
    const drawW = h * imgRatio
    return { w, h, drawW, drawH, offX: (w - drawW) / 2, offY: 0 }
  }, [natural.w, natural.h])

  const handleMouseMove = (e: React.MouseEvent) => {
    const fit = computeFit()
    const box = containerRef.current?.getBoundingClientRect()
    if (!box || !fit.w || !fit.h) return

    const x = e.clientX - box.left
    const y = e.clientY - box.top

    lastMouseRef.current = { x, y }

    // Если курсор вне фактической области картинки (object-contain), лупу не показываем.
    const inside =
      x >= fit.offX && x <= fit.offX + fit.drawW && y >= fit.offY && y <= fit.offY + fit.drawH

    if (!inside) {
      setIsActive(false)
      return
    }

    const relX = (x - fit.offX) / fit.drawW
    const relY = (y - fit.offY) / fit.drawH

    // Позиция линзы (чтобы не вылезала за пределы контейнера)
    const half = lensSize / 2
    const lx = Math.min(Math.max(x - half, 0), fit.w - lensSize)
    const ly = Math.min(Math.max(y - half, 0), fit.h - lensSize)

    // Фон в px: увеличенная картинка, смещаем так, чтобы центр линзы совпал с курсором
    const bgW = fit.drawW * zoomK
    const bgH = fit.drawH * zoomK
    const bgX = -(relX * bgW - half)
    const bgY = -(relY * bgH - half)

    setLens({ x: lx, y: ly, bgX, bgY })
    setIsActive(true)
  }

  const handleLeave = () => setIsActive(false)

  // Колесо мыши: меняем зум «в разумных пределах».
  React.useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const clamp = (v: number) => Math.min(Math.max(v, zoomMin), zoomMax)

    const onWheel = (ev: WheelEvent) => {
      if (!isActive) return
      ev.preventDefault()

      const dir = ev.deltaY < 0 ? 1 : -1
      const next = clamp(Number((zoomRef.current + dir * zoomStep).toFixed(2)))
      if (next === zoomRef.current) return
      setZoomK(next)

      // Пересчитываем фон линзы для последней позиции курсора,
      // чтобы изменение зума было видно сразу, без «дёрганья» мышью.
      const pos = lastMouseRef.current
      if (!pos) return
      const fit = computeFit()
      const box = containerRef.current?.getBoundingClientRect()
      if (!box || !fit.w || !fit.h) return

      const x = pos.x
      const y = pos.y

      const inside =
        x >= fit.offX && x <= fit.offX + fit.drawW && y >= fit.offY && y <= fit.offY + fit.drawH

      if (!inside) return

      const relX = (x - fit.offX) / fit.drawW
      const relY = (y - fit.offY) / fit.drawH
      const half = lensSize / 2
      const lx = Math.min(Math.max(x - half, 0), fit.w - lensSize)
      const ly = Math.min(Math.max(y - half, 0), fit.h - lensSize)
      const bgW = fit.drawW * next
      const bgH = fit.drawH * next
      const bgX = -(relX * bgW - half)
      const bgY = -(relY * bgH - half)
      setLens({ x: lx, y: ly, bgX, bgY })
    }

    el.addEventListener("wheel", onWheel, { passive: false })
    return () => el.removeEventListener("wheel", onWheel)
  }, [computeFit, isActive, lensSize, zoomMax, zoomMin, zoomStep])

  return (
    <div
      ref={containerRef}
      className={cn("relative inline-block select-none", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{ cursor: "zoom-in" }}
    >
      <Image src={src} alt={alt} className={cn("block", imgClassName)} onLoad={handleImgLoad} {...imgProps} />

      {isActive && natural.w > 0 && natural.h > 0 ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-10 rounded-full border border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          style={{
            left: lens.x,
            top: lens.y,
            width: lensSize,
            height: lensSize,
            backgroundImage: `url(\"${resolvedSrc}\")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${computeFit().drawW * zoomK}px ${computeFit().drawH * zoomK}px`,
            backgroundPosition: `${lens.bgX}px ${lens.bgY}px`,
          }}
        />
      ) : null}
    </div>
  )
}
