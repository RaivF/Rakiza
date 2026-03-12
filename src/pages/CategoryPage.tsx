import { useMemo } from "react"
import { useParams } from "react-router-dom"

import Image from "@/components/image"
import Link from "@/components/link"
import { PageBreadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getCategory, getProducts, getRandomProductPreviewImage, getVariantDisplayName, isCategoryId } from "@/lib/catalog"
import NotFoundPage from "@/pages/NotFoundPage"

function getVariantSwatchHex(variant: { id: string; name: string; colorHex?: string | null }) {
  if (variant.colorHex) return variant.colorHex

  const key = `${variant.id} ${variant.name}`.toLowerCase()

  if (key.includes("бел") || key.includes("bely")) return "#f5f5f5"
  if (key.includes("черн") || key.includes("chern")) return "#111827"
  if (key.includes("сер") || key.includes("grey") || key.includes("gray")) return "#374151"
  if (key.includes("оранж") || key.includes("oranz")) return "#f97316"
  if (key.includes("роз") || key.includes("pink") || key.includes("rozov")) return "#d8a0aa"
  if (key.includes("зелен") || key.includes("green") || key.includes("zelen")) return "#0f766e"

  // столешницы / отделки
  if (key.includes("дуб") || key.includes("dub")) return "#c89b67"
  if (key.includes("саб") || key.includes("sabi")) return "#b49277"
  if (key.includes("креат") || key.includes("kreat")) return "#9f7a58"
  if (key.includes("кайл") || key.includes("kayl")) return "#334155"

  return "#e5e7eb"
}

export default function CategoryPage() {
  const { type } = useParams<{ type?: string }>()

  const rawType = type ?? ""
  if (!isCategoryId(rawType)) {
    return <NotFoundPage />
  }

  const category = getCategory(rawType)
  const categoryProducts = getProducts(rawType)
  const productPreviewImages = useMemo(
    () => Object.fromEntries(categoryProducts.map((product) => [product.id, getRandomProductPreviewImage(product)])),
    [categoryProducts],
  )

  return (
    <main>
      <PageBreadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Каталог", href: "/catalog" },
          { label: category.name },
        ]}
      />

      <section className="relative flex h-[40vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container z-10 mx-auto px-4 text-center text-white lg:px-8">
          <h1 className="mb-4 font-serif text-5xl font-light md:text-6xl">{category.name}</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl">{category.description}</p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-background to-muted/20 py-12 sm:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categoryProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-0 shadow-sm transition-all duration-500 hover:shadow-xl"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={productPreviewImages[product.id] || product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  {product.collection && (
                    <div className="mb-2 text-xs text-muted-foreground">{product.collection}</div>
                  )}

                  <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
                    {product.name}
                  </h3>

                  {product.variants && product.variants.length > 0 && (
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="flex items-center">
                        <div className="flex -space-x-1">
                          {(product.category === "tables" ? product.variants : product.variants.slice(0, 8)).map((v) => (
                            <span
                              key={v.id}
                              className="h-4 w-4 rounded-full border border-background shadow-sm"
                              style={{ backgroundColor: getVariantSwatchHex(v) }}
                              title={getVariantDisplayName(v.name)}
                            />
                          ))}
                          {product.category !== "tables" && product.variants.length > 8 && (
                            <span className="ml-2 text-xs text-muted-foreground">+{product.variants.length - 8}</span>
                          )}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">{product.variants.length} вариантов</div>
                    </div>
                  )}

                  <div className="mb-4 flex flex-wrap gap-2">
                    {product.specs.map((spec) => (
                      <Badge key={spec} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild className="w-full">
                    <Link href={`/catalog/${rawType}/${product.id}`}>Подробнее</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
