import Image from "@/components/image"
import { PageBreadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent } from "@/components/ui/card"
import { Factory, Award, Users } from "lucide-react"

const COMPANY_START_YEAR = 2024

function formatYearsCount(years: number) {
  const mod10 = years % 10
  const mod100 = years % 100
  if (mod10 === 1 && mod100 !== 11) return `${years} год`
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${years} года`
  return `${years} лет`
}

export default function AboutPage() {
  return (
    <main>
      <PageBreadcrumbs items={[{ label: "Главная", href: "/" }, { label: "О компании" }]} />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-light mb-6">О компании «RAKIZA»</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Мягкая мебель для дома и офисов. Производство в Ульяновске с {COMPANY_START_YEAR} года.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="text-3xl md:text-4xl font-serif font-light mb-2">
                  {formatYearsCount(Math.max(1, new Date().getFullYear() - COMPANY_START_YEAR))}
                </div>
                <div className="text-sm text-muted-foreground">опыт в производстве мебели</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="text-3xl md:text-4xl font-serif font-light mb-2">Полный цикл</div>
                <div className="text-sm text-muted-foreground">от проекта до упаковки</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="text-3xl md:text-4xl font-serif font-light mb-2">Подбор материалов</div>
                <div className="text-sm text-muted-foreground">ткань, цвет, отделка под задачу</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="text-3xl md:text-4xl font-serif font-light mb-2">Поставка</div>
                <div className="text-sm text-muted-foreground">организуем доставку по России</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-light mb-6">О компании</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  «RAKIZA» — быстрорастущее, амбициозное мебельное производство (г. Ульяновск). Мы на рынке более 2 лет и
                  за это время выстроили устойчивый спрос на нашу продукцию, работая с маркетплейсами.
                </p>
                <p>
                  Мы специализируемся на производстве мебели малых форм (ЛДСП, мягкая). Наши изделия получают высокие
                  оценки за качество и аккуратность исполнения.
                </p>
                <p>
                  Сегодня «RAKIZA» — это команда профессионалов. Мы развиваемся и последовательно выстраиваем систему
                  работы:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>внедряем технологические карты и стандарты качества;</li>
                  <li>настраиваем понятные процессы и управленческий ритм в цехе;</li>
                  <li>повышаем производительность и снижаем потери времени на операциях;</li>
                  <li>расширяем линейку моделей и усиливаем команду.</li>
                </ul>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
			  <Image src="/real/products/mini-sofa/neraskladnoy/render/01.jpg" alt="Производство" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-light mb-4">Почему выбирают нас</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <Factory className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-3">Своё производство</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Полный контроль качества на всех этапах производства
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-3">Премиум качество</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Используем только проверенные материалы от лучших поставщиков
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-3">Команда экспертов</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Дизайнеры, конструкторы и технологи с многолетним опытом
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
