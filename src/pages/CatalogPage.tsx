import Link from "@/components/link"
import Image from "@/components/image"
import { PageBreadcrumbs } from "@/components/breadcrumbs"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { useMemo } from "react"
import { categories } from "@/lib/data"
import { getRandomCategoryPreviewImage } from "@/lib/catalog"

export default function CatalogPage() {
  const categoryPreviewImages = useMemo(
    () => Object.fromEntries(categories.map((category) => [category.id, getRandomCategoryPreviewImage(category.id)])),
    [],
  )

  return (
    <main>
      <PageBreadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Каталог" }]} />

      <section className="bg-gradient-to-b from-background to-muted/20 py-16 sm:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-light mb-6">Каталог продукции</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите категорию мебели для дома, офиса и общественных пространств
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-muted/10 to-background pb-16 sm:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/catalog/${category.id}`}>
                <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={categoryPreviewImages[category.id] || category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h2 className="text-2xl font-serif font-medium mb-2">{category.name}</h2>
                      <p className="text-sm text-white/80 mb-4">{category.description}</p>
                      <div className="flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform">
                        Смотреть
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
