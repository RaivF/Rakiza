import * as React from "react"

import { cn } from "@/lib/utils"

type Props = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string
  /** Режим «на всю область»: делает изображение `absolute inset-0 h-full w-full`. */
  fill?: boolean
  /** Приоритетная загрузка: выставляет `loading="eager"`. */
  priority?: boolean
}

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

/** Упрощённый аналог `next/image` для этого проекта (Vite + public + base path). */
const Image = React.forwardRef<HTMLImageElement, Props>(function Image(
  { fill, priority, className, loading, style, src, onLoad, onError, ...imgProps },
  ref,
) {
  const resolved = React.useMemo(() => resolvePublicSrc(src), [src])
  const [status, setStatus] = React.useState<"loading" | "loaded" | "error">("loading")

  React.useEffect(() => {
    // При смене src показываем индикатор заново.
    setStatus("loading")
  }, [resolved])

  return (
    <span
      className={cn(
        "relative block overflow-hidden",
        fill ? "absolute inset-0 h-full w-full" : "",
        className,
      )}
    >
      {status !== "loaded" ? (
        <span aria-hidden="true" className="absolute inset-0 z-[1] grid place-items-center bg-background/20">
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-foreground/20 border-t-foreground/70" />
        </span>
      ) : null}

      <img
        ref={ref}
        {...imgProps}
        src={resolved}
        loading={priority ? "eager" : loading ?? "lazy"}
        className={cn(fill ? "absolute inset-0 h-full w-full" : "block h-full w-full", className)}
        style={style}
        onLoad={(e) => {
          setStatus("loaded")
          onLoad?.(e)
        }}
        onError={(e) => {
          setStatus("error")
          onError?.(e)
        }}
      />
    </span>
  )
})

export default Image
