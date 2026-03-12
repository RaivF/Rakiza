import { useMemo, useState } from "react"

import Image from "@/components/image"
import { PageBreadcrumbs } from "@/components/breadcrumbs"
import { FilterChip } from "@/components/filter-chip"
import { Card } from "@/components/ui/card"
import { productionCards } from "@/lib/data"

type ProductionCard = (typeof productionCards)[number]
type FilterValue = "all" | ProductionCard["id"]

const FILTER_LABELS: Partial<Record<ProductionCard["id"], string>> = {
  cnc: "CNC",
  edgebanding: "Кромка",
  assembly: "Сборка",
  pack: "Упаковка",
}

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: "Все участки", value: "all" },
  ...productionCards.map((card) => ({
    label: FILTER_LABELS[card.id] ?? card.title,
    value: card.id,
  })),
]

export default function ManufacturingPage() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all")

  const visibleCards = useMemo(() => {
    if (activeFilter === "all") return productionCards
    return productionCards.filter((c) => c.id === activeFilter)
  }, [activeFilter])

  return (
    <main>
      <PageBreadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Производство" }]} />

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/production/cnc.png"
            alt="Производство"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
              Наше производство
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Современные производственные участки, понятные процессы и контроль качества на каждом этапе.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {FILTERS.map((filter) => (
                <FilterChip
                  key={filter.value}
                  selected={activeFilter === filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                >
                  {filter.label}
                </FilterChip>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleCards.map((card) => (
              <Card
                key={card.id}
                className="group overflow-hidden border-0 shadow-sm transition-all duration-500 hover:shadow-xl"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-xs font-medium uppercase tracking-wide text-white/75">{FILTER_LABELS[card.id] ?? card.name}</div>
                    <h3 className="mt-2 font-serif text-2xl font-medium leading-snug">{card.title}</h3>
                    <p className="mt-2 text-sm text-white/85">{card.subtitle}</p>
                    <p className="mt-2 text-xs text-white/65">{card.meta}</p>
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
