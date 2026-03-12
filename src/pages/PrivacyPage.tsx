import { PageBreadcrumbs } from "@/components/breadcrumbs"
import { SITE } from "@/lib/site"

export default function PrivacyPage() {
  return (
    <main>
      <PageBreadcrumbs
        items={[{ label: "Главная", href: "/" }, { label: "Политика конфиденциальности" }]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-6">Политика конфиденциальности</h1>

          <div className="max-w-3xl space-y-6 leading-relaxed text-muted-foreground">
            <p>
              Мы уважаем конфиденциальность пользователей и обрабатываем персональные данные только в объёме,
              необходимом для ответа на обращение и обратной связи.
            </p>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Какие данные могут собираться</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Имя и контактные данные (телефон, email), которые вы указываете в формах</li>
                <li>Текст сообщения и сведения о компании (если вы их добавляете)</li>
                <li>Технические данные браузера (например, cookies) — если используются инструменты аналитики</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Для чего используются данные</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Чтобы связаться с вами и ответить на обращение</li>
                <li>Чтобы уточнить детали проекта и подготовить предложение (по запросу)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Хранение и защита</h2>
              <p>
                Мы храним данные столько, сколько нужно для обработки обращения и последующей коммуникации. Доступ
                к данным ограничен сотрудниками, которым он необходим для работы.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Ваши права</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Запросить информацию о ваших данных, которые мы обрабатываем</li>
                <li>Попросить исправить или удалить данные, если это допустимо по закону</li>
                <li>Отозвать согласие на обработку данных, если обработка основана на согласии</li>
              </ul>
            </div>

            <p>
              По вопросам обработки персональных данных можно написать на{' '}
              <a href={SITE.emailHref} className="underline underline-offset-4 hover:text-foreground">
                {SITE.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
