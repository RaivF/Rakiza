import { PageBreadcrumbs } from "@/components/breadcrumbs"
import { SITE } from "@/lib/site"

export default function TermsPage() {
  return (
    <main>
      <PageBreadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Условия использования" }]} />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-6">Условия использования</h1>

          <div className="max-w-3xl space-y-6 leading-relaxed text-muted-foreground">
            <p>
              Сайт носит информационный характер и предназначен для ознакомления с продукцией и возможностями
              производства.
            </p>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Общие положения</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Информация в каталоге может обновляться без предварительного уведомления</li>
                <li>Наличие, сроки и условия поставки уточняются при обращении</li>
                <li>Отправка формы на сайте не является заключением договора</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Материалы и авторские права</h2>
              <p>
                Тексты, фотографии и графические материалы на сайте принадлежат правообладателю. Копирование и
                использование материалов допускается только с согласия правообладателя.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Контакты</h2>
              <p>
                По вопросам работы сайта и обработки обращений можно связаться с нами по телефону {SITE.phone} или
                написать на{' '}
                <a href={SITE.emailHref} className="underline underline-offset-4 hover:text-foreground">
                  {SITE.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
