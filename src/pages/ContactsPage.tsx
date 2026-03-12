import { PageBreadcrumbs } from "@/components/breadcrumbs"
import Link from "@/components/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { SITE } from "@/lib/site"

export default function ContactsPage() {
  const query = encodeURIComponent(SITE.address)
  const mapSrc = `https://yandex.ru/map-widget/v1/?mode=search&text=${query}&z=16`
  const mapLink = `https://yandex.ru/maps/?text=${query}`

  return (
    <main>
      <PageBreadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Контакты" }]} />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-light mb-6">Контакты</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы отвечаем в рабочее время.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Адрес</h3>
                  <p className="text-sm text-muted-foreground">{SITE.address}</p>
                  <a
                    href={mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Открыть в Яндекс.Картах
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Phone className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Телефон</h3>
                  <div className="text-sm space-y-1">
                    <a
                      href={SITE.phoneHref}
                      className="block text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Mail className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <div className="text-sm space-y-1">
                    <a
                      href={SITE.emailHref}
                      className="block text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Режим работы</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>{SITE.workingHours}</p>
                    
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-serif text-3xl font-light mb-6">Напишите нам</h2>
                  <form
                    className="space-y-6"
                    onSubmit={(event) => {
                      event.preventDefault()
                      toast({
                        title: "Сообщение отправлено",
                        description: "Спасибо! Мы свяжемся с вами в ближайшее рабочее время.",
                      })
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Имя *</Label>
                        <Input id="name" name="name" placeholder="Иван Иванов" autoComplete="name" required />
                      </div>
                      <div>
                        <Label htmlFor="company">Компания</Label>
                        <Input id="company" name="company" placeholder="ООО 'Компания'" autoComplete="organization" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="ivan@company.ru"
                          autoComplete="email"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+7 (999) 123-45-67"
                          autoComplete="tel"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Тема обращения</Label>
                      <Input id="subject" name="subject" placeholder="Вопрос по продукции или сотрудничеству" />
                    </div>

                    <div>
                      <Label htmlFor="message">Сообщение *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Расскажите о вашем проекте, задайте вопросы..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Отправить сообщение
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Отправляя форму, вы соглашаетесь с{' '}
                      <Link href="/privacy" className="underline underline-offset-4 hover:text-foreground">
                        политикой конфиденциальности
                      </Link>
                      .
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="overflow-hidden">
            <div className="relative h-[420px] w-full bg-muted">
              <iframe
                title="Карта"
                src={mapSrc}
                className="h-full w-full"
                frameBorder={0}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
