import { PageBreadcrumbs } from "@/components/breadcrumbs"
import Link from "@/components/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { materialCategories } from "@/lib/data"

export default function MaterialsPage() {
  return (
    <main>
      <PageBreadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Материалы" }]} />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-light mb-6">Материалы для дизайнеров</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный комплект документации для работы с нашей продукцией. 3D модели, сертификаты, образцы материалов,
            технические описания.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {materialCategories.map((material) => (
              <Card key={material.title} className="group hover:shadow-xl transition-all duration-500">
                <CardContent className="p-10 text-center">
                  <div className="text-6xl mb-6">{material.icon}</div>
                  <h3 className="text-2xl font-serif font-medium mb-3 group-hover:text-primary transition-colors">
                    {material.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{material.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Нужны 3D‑модели, сертификаты или материалы для проекта — напишите нам.
            </p>
            <Button asChild size="lg">
              <Link href="/contacts">Запросить материалы</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
