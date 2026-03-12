import Image from "@/components/image"
import { PageBreadcrumbs } from "@/components/breadcrumbs"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { collections } from "@/lib/data"

export default function CollectionsPage() {
  return (
    <main>
      <PageBreadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Коллекции" }]} />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-light mb-6">Наши коллекции</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Каждая коллекция — это завершённое дизайнерское решение для определённых задач и пространств
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {collections.map((collection) => (
              <Card
                key={collection.id}
                id={collection.id}
                className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-[500px]">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute top-6 right-6 flex gap-2">
                    {collection.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-white/90 text-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h2 className="font-serif text-4xl font-medium mb-4">{collection.name}</h2>
                    <p className="text-lg text-white/90 mb-6 leading-relaxed">{collection.description}</p>
                    <div className="flex items-center font-medium group-hover:translate-x-2 transition-transform">
                      Смотреть коллекцию
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
