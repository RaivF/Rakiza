import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"

import Image from "@/components/image"
import Magnifier from "@/components/magnifier"
import Link from "@/components/link"
import { PageBreadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

import {
  getCategory,
  getProduct,
  getProductPreviewImage,
  getSimilarProducts,
  getVariantDisplayName,
  isCategoryId,
} from "@/lib/catalog"
import NotFoundPage from "@/pages/NotFoundPage"

function getVariantLabel(categoryId: string) {
  // В проекте варианты используются по-разному:
  // - диваны/кресла: варианты = цвет обивки
  // - столы: варианты = отделка столешницы
  if (categoryId === "tables") return "Отделка"
  if (categoryId === "sofas" || categoryId === "chairs") return "Цвет"
  return "Вариант"
}

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState<string>("")

  const orderGalleryImages = (images: readonly string[]) => {
    // В карточке товара держим единый порядок:
    // 1) рендер
    // 2) фото с размерами
    // 3) фото в открытом состоянии
    // 4) остальные реальные фото
    // 5) всё прочее
    const rank = (src: string) => {
      const normalized = src.toLowerCase()
      if (normalized.includes("/render/")) return 0
      if (normalized.includes("/photo/") && normalized.includes("size")) return 1
      if (normalized.includes("/photo/") && normalized.includes("open")) return 2
      if (normalized.includes("/photo/")) return 3
      return 4
    }

    return images
      .map((src, index) => ({ src, index, rank: rank(src) }))
      .sort((a, b) => a.rank - b.rank || a.index - b.index)
      .map((item) => item.src)
  }

  const { type, slug } = useParams<{ type?: string; slug?: string }>()
  const rawType = type ?? ""
  const rawSlug = slug ?? ""

  useEffect(() => {
    setSelectedImage(0)
    setSelectedVariant("")
  }, [rawType, rawSlug])

  if (!isCategoryId(rawType)) {
    return <NotFoundPage />
  }

  const category = getCategory(rawType)
  const product = getProduct(rawType, rawSlug)

  if (!product) {
    return <NotFoundPage />
  }

  const variants = product.variants ?? []

  const variantDotColor = useMemo(() => {
    // Некоторые варианты могут иметь одинаковый базовый цвет, но отличаться материалом.
    // Здесь делаем небольшое смещение светлоты внутри группы одинаковых цветов,
    // чтобы кружки выглядели чуть по-разному (без цифр и подписей).

    const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

    const normalizeHex = (hex: string) => {
      const v = hex.trim().toLowerCase()
      if (!v) return ""
      if (!v.startsWith("#")) return v
      if (v.length === 4) {
        const r = v[1]
        const g = v[2]
        const b = v[3]
        return `#${r}${r}${g}${g}${b}${b}`
      }
      return v
    }

    const hexToRgb = (hex: string) => {
      const h = normalizeHex(hex)
      if (!h.startsWith("#") || h.length !== 7) return null
      const r = parseInt(h.slice(1, 3), 16)
      const g = parseInt(h.slice(3, 5), 16)
      const b = parseInt(h.slice(5, 7), 16)
      if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) return null
      return { r, g, b }
    }

    const rgbToHex = (r: number, g: number, b: number) => {
      const toHex = (n: number) => n.toString(16).padStart(2, "0")
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`
    }

    const rgbToHsl = (r0: number, g0: number, b0: number) => {
      const r = r0 / 255
      const g = g0 / 255
      const b = b0 / 255
      const max = Math.max(r, g, b)
      const min = Math.min(r, g, b)
      const d = max - min
      let h = 0
      let s = 0
      const l = (max + min) / 2
      if (d !== 0) {
        s = d / (1 - Math.abs(2 * l - 1))
        switch (max) {
          case r:
            h = ((g - b) / d) % 6
            break
          case g:
            h = (b - r) / d + 2
            break
          default:
            h = (r - g) / d + 4
            break
        }
        h *= 60
        if (h < 0) h += 360
      }
      return { h, s, l }
    }

    const hslToRgb = (h0: number, s0: number, l0: number) => {
      const h = ((h0 % 360) + 360) % 360
      const s = clamp01(s0)
      const l = clamp01(l0)
      const c = (1 - Math.abs(2 * l - 1)) * s
      const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
      const m = l - c / 2
      let r = 0,
        g = 0,
        b = 0
      if (h < 60) {
        r = c
        g = x
      } else if (h < 120) {
        r = x
        g = c
      } else if (h < 180) {
        g = c
        b = x
      } else if (h < 240) {
        g = x
        b = c
      } else if (h < 300) {
        r = x
        b = c
      } else {
        r = c
        b = x
      }
      return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255),
      }
    }

    const adjustLightness = (hex: string, delta: number) => {
      const rgb = hexToRgb(hex)
      if (!rgb) return hex
      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)
      const rgb2 = hslToRgb(hsl.h, hsl.s, clamp01(hsl.l + delta))
      return rgbToHex(rgb2.r, rgb2.g, rgb2.b)
    }

    const fallbackByName = (name?: string) => {
      const n = (name ?? "").toLowerCase()
      if (n.includes("бел")) return "#f3f4f6"
      if (n.includes("черн")) return "#111827"
      if (n.includes("сер")) return "#6b7280"
      if (n.includes("син")) return "#2563eb"
      if (n.includes("зел")) return "#0f766e"
      if (n.includes("жел")) return "#facc15"
      if (n.includes("роз")) return "#e879f9"
      if (n.includes("корич") || n.includes("дуб")) return "#8b5e34"
      return "#e5e7eb"
    }

    const baseKey = (v: { colorHex?: string; name?: string }) => normalizeHex(v.colorHex || "") || fallbackByName(v.name)

    const groups = new Map<string, string[]>()
    for (const v of variants) {
      const key = baseKey(v)
      const list = groups.get(key) ?? []
      list.push(v.id)
      groups.set(key, list)
    }

    const out = new Map<string, string>()
    for (const [key, ids] of groups.entries()) {
      const firstId = ids[0]
      if (!firstId) continue

      if (ids.length === 1) {
        out.set(firstId, key)
        continue
      }
      const mid = (ids.length - 1) / 2
      ids.forEach((id, i) => {
        const delta = (i - mid) * 0.03
        out.set(id, adjustLightness(key, delta))
      })
    }

    return out
  }, [variants])
  const resolvedVariantId =
    selectedVariant ||
    product.defaultVariantId ||
    variants.find((v) => (v.images?.length ?? 0) > 0)?.id ||
    variants[0]?.id ||
    ""

  const activeVariant = variants.find((v) => v.id === resolvedVariantId)
  const activeImages = activeVariant
    ? (activeVariant.images?.length ?? 0) > 0
      ? activeVariant.images
      : ["/placeholder.svg"]
    : (product.images?.length ?? 0) > 0
      ? product.images
      : [product.image]

  const safeImages = (activeImages.length > 0 ? orderGalleryImages(activeImages) : ["/placeholder.svg"]) as readonly string[]
  const thumbnailImages = safeImages
  const currentImage = safeImages[selectedImage] ?? safeImages[0] ?? product.image ?? "/placeholder.svg"

  const similarProducts = useMemo(() => getSimilarProducts(rawType, product.id, 3), [rawType, product.id])

  return (
    <main>
      <PageBreadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Каталог", href: "/catalog" },
          { label: category.name, href: `/catalog/${rawType}` },
          { label: product.name },
        ]}
      />

      <section className="bg-gradient-to-b from-background via-background to-muted/25 py-12 sm:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              {/*
                Важно: в карточке товара могут быть изображения разных форматов (рендеры, фото, схемы размеров).
                Показываем изображение целиком (без обрезки) и даём больше места основной картинке.
              */}
              <div className="relative mb-4 overflow-hidden rounded-xl border border-border/60 bg-gradient-to-b from-muted/30 to-background shadow-sm">
                <div className="flex items-center justify-center p-2 sm:p-3">
                  <Magnifier
                    src={currentImage}
                    alt={product.name}
                    zoom={2.6}
                    lensSize={170}
                    imgClassName="h-auto w-auto max-w-full max-h-[420px] sm:max-h-[520px] lg:max-h-[680px] xl:max-h-[740px] object-contain"
                  />
                </div>
              </div>

              <div className="max-h-[260px] overflow-y-auto pr-1 [scrollbar-gutter:stable]">
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4">
                  {thumbnailImages.map((image, index) => {
                    const isSelected = selectedImage === index

                    return (
                      <button
                        key={`${image}-${index}`}
                        type="button"
                        onClick={() => setSelectedImage(index)}
                        aria-label={`Показать изображение ${index + 1}`}
                        className={
                          "relative h-20 overflow-hidden rounded-lg border transition-all sm:h-24 " +
                          (isSelected
                            ? "border-primary/60 ring-2 ring-primary/20"
                            : "border-border/60 hover:border-border")
                        }
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${product.name} ${index + 1}`}
                          fill
                          className="object-contain"
                        />
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            <div>
              {product.collection && (
                <div className="mb-2 text-sm text-muted-foreground">Коллекция {product.collection}</div>
              )}
              <h1 className="mb-4 font-serif text-4xl font-light md:text-5xl">{product.name}</h1>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">{product.description}</p>

              {variants.length > 0 && (
                <div className="mb-6">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <div className="text-sm font-medium">{getVariantLabel(rawType)}</div>
                    <div className="text-sm text-muted-foreground">
                      {activeVariant ? getVariantDisplayName(activeVariant.name) : "—"}
                      {activeVariant && (activeVariant.images?.length ?? 0) === 0 ? " (без фото)" : ""}
                    </div>
                  </div>

                  <ToggleGroup
                      type="single"
                      value={resolvedVariantId}
                      onValueChange={(value) => {
                        if (!value) return
                        setSelectedVariant(value)
                        setSelectedImage(0)
                      }}
                      className="justify-start"
                      variant="outline"
                    >
                      {variants.map((variant) => {
                        const chipColor = variantDotColor.get(variant.id) || variant.colorHex || "#e5e7eb"
                        const showVariantName = rawType === "tables" || rawType === "chairs"

                        return (
                          <ToggleGroupItem
                            key={variant.id}
                            value={variant.id}
                            aria-label={getVariantDisplayName(variant.name)}
                            className={
                              showVariantName
                                ? "gap-2 rounded-full px-3 text-xs sm:text-sm bg-gradient-to-b from-background to-muted/20 data-[state=on]:from-accent/80 data-[state=on]:to-accent/30"
                                : "group h-11 w-11 rounded-full p-0 bg-gradient-to-b from-background to-muted/20 hover:shadow-sm data-[state=on]:from-accent/80 data-[state=on]:to-accent/30 data-[state=on]:shadow"
                            }
                          >
                            {showVariantName ? (
                              <>
                                <span
                                  className="h-3 w-3 rounded-full border border-border shadow-[inset_0_0_0_1px_rgba(0,0,0,0.03)]"
                                  style={{ backgroundColor: chipColor }}
                                />
                                <span className="max-w-[11rem] truncate">{getVariantDisplayName(variant.name)}</span>
                              </>
                            ) : (
                              <span className="relative flex h-11 w-11 items-center justify-center">
                                <span
                                  className="h-7 w-7 rounded-full border border-border shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)] transition-transform group-data-[state=on]:scale-[1.06]"
                                  style={{ backgroundColor: chipColor }}
                                />
                              </span>
                            )}
                          </ToggleGroupItem>
                        )
                      })}
                  </ToggleGroup>

                  {activeVariant && (activeVariant.images?.length ?? 0) === 0 && (
                    <div className="mt-3 text-sm text-muted-foreground">
                      Фото для этого варианта пока не добавлены. Показана заглушка.
                    </div>
                  )}
                </div>
              )}

              <div className="mb-8">
                <h2 className="mb-3 font-semibold">Характеристики</h2>
                <div className="flex flex-wrap gap-2">
                  {product.specs.map((spec) => (
                    <Badge key={spec} variant="secondary">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button size="lg" asChild className="sm:flex-none">
                  <Link href="/contacts">Связаться</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="sm:flex-none">
                  <Link href="/catalog">Смотреть каталог</Link>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="sm:flex-none bg-[#2d153f] text-white hover:bg-[#3b1d52]"
                >
                  <Link href="https://www.wildberries.ru/brands/310885471-rakiza">
                    Купить на Wildberries
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {similarProducts.length > 0 && (
        <section className="bg-gradient-to-b from-muted/20 to-background py-12 sm:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="mb-8 font-serif text-3xl font-light md:text-4xl">Похожие модели</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {similarProducts.map((similar) => (
                <Link key={similar.id} href={`/catalog/${rawType}/${similar.id}`}>
                  <Card className="group overflow-hidden border-0 shadow-sm transition-all duration-500 hover:shadow-xl">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={getProductPreviewImage(similar)}
                        alt={similar.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
                        {similar.name}
                      </h3>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
