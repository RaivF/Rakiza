import { PageBreadcrumbs } from "@/components/breadcrumbs"
import Link from "@/components/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Palette, Truck } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function PartnersPage() {
  return (
    <main>
      <PageBreadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Партнёрам" }]} />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-light mb-6">Партнёрам</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы открыты к сотрудничеству с дилерами, дизайнерами интерьеров и поставщиками. Условия обсуждаем под формат
            работы и задачи проекта.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs defaultValue="dealers" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="dealers">Дилерам</TabsTrigger>
              <TabsTrigger value="designers">Дизайнерам</TabsTrigger>
              <TabsTrigger value="suppliers">Поставщикам</TabsTrigger>
            </TabsList>

            <TabsContent value="dealers">
              <div className="space-y-12">
                <div className="text-center">
                  <Users className="h-16 w-16 mx-auto mb-6 text-primary" />
                  <h2 className="font-serif text-3xl font-light mb-4">Дилерская программа</h2>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    Мы предлагаем выгодные условия для дилеров по всей России. Специальные цены, эксклюзивные
                    территории, маркетинговая поддержка.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold mb-2">Персональные условия</h3>
                      <p className="text-sm text-muted-foreground">Обсуждаем цены и логистику под регион</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold mb-2">Материалы для продаж</h3>
                      <p className="text-sm text-muted-foreground">Фото, описания, рекомендации по подбору</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold mb-2">Сопровождение</h3>
                      <p className="text-sm text-muted-foreground">Помогаем с подбором и комплектацией</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="font-semibold text-xl mb-6">Заявка на партнерство</h3>
                    <form
                      className="space-y-4"
                      onSubmit={(event) => {
                        event.preventDefault()
                        toast({
                          title: "Заявка отправлена",
                          description: "Спасибо! Мы свяжемся с вами в ближайшее рабочее время.",
                        })
                      }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company">Название компании</Label>
                          <Input id="company" placeholder="ООО 'Компания'" />
                        </div>
                        <div>
                          <Label htmlFor="city">Город</Label>
                          <Input id="city" placeholder="Москва" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="contact">Контактное лицо</Label>
                          <Input id="contact" placeholder="Иван Иванов" />
                        </div>
                        <div>
                          <Label htmlFor="phone">Телефон</Label>
                          <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="ivan@company.ru" />
                      </div>
                      <div>
                        <Label htmlFor="message">Расскажите о вашем бизнесе</Label>
                        <Textarea id="message" placeholder="Опыт работы, специализация..." rows={4} />
                      </div>
                      <Button type="submit" size="lg" className="w-full">
                        Отправить заявку
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
            </TabsContent>

            <TabsContent value="designers">
              <div className="space-y-12">
                <div className="text-center">
                  <Palette className="h-16 w-16 mx-auto mb-6 text-primary" />
                  <h2 className="font-serif text-3xl font-light mb-4">Для дизайнеров интерьеров</h2>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    Специальные условия для дизайнеров и архитекторов. Доступ к полному каталогу, 3D моделям, образцам
                    тканей и дизайнерская скидка.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold mb-2">Партнёрские условия</h3>
                      <p className="text-sm text-muted-foreground">Фиксируем условия под проект</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold mb-2">3D и материалы</h3>
                      <p className="text-sm text-muted-foreground">Модели и описание по запросу</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold mb-2">Подбор тканей</h3>
                      <p className="text-sm text-muted-foreground">Помогаем выбрать обивку под интерьер</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="font-semibold text-xl mb-6">Регистрация в программе</h3>
                    <form
                      className="space-y-4"
                      onSubmit={(event) => {
                        event.preventDefault()
                        toast({
                          title: "Регистрация отправлена",
                          description: "Спасибо! Мы свяжемся с вами в ближайшее рабочее время.",
                        })
                      }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name-d">Имя и фамилия</Label>
                          <Input id="name-d" placeholder="Иван Иванов" />
                        </div>
                        <div>
                          <Label htmlFor="studio">Студия / Бюро</Label>
                          <Input id="studio" placeholder="Название студии" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email-d">Email</Label>
                          <Input id="email-d" type="email" placeholder="ivan@studio.ru" />
                        </div>
                        <div>
                          <Label htmlFor="phone-d">Телефон</Label>
                          <Input id="phone-d" type="tel" placeholder="+7 (999) 123-45-67" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="portfolio">Ссылка на портфолио</Label>
                        <Input id="portfolio" type="url" placeholder="https://..." />
                      </div>
                      <Button type="submit" size="lg" className="w-full">
                        Зарегистрироваться
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
            </TabsContent>

            <TabsContent value="suppliers">
              <div className="space-y-12">
                <div className="text-center">
                  <Truck className="h-16 w-16 mx-auto mb-6 text-primary" />
                  <h2 className="font-serif text-3xl font-light mb-4">Для поставщиков</h2>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    Мы ищем надежных поставщиков тканей, кожи, фурнитуры и комплектующих для производства мебели
                    премиум-класса.
                  </p>
                </div>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="font-semibold text-xl mb-6">Предложение о сотрудничестве</h3>
                    <form
                      className="space-y-4"
                      onSubmit={(event) => {
                        event.preventDefault()
                        toast({
                          title: "Предложение отправлено",
                          description: "Спасибо! Мы свяжемся с вами в ближайшее рабочее время.",
                        })
                      }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company-s">Компания</Label>
                          <Input id="company-s" placeholder="ООО 'Поставщик'" />
                        </div>
                        <div>
                          <Label htmlFor="category">Категория товаров</Label>
                          <Input id="category" placeholder="Ткани / Фурнитура / и т.д." />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="contact-s">Контактное лицо</Label>
                          <Input id="contact-s" placeholder="Иван Иванов" />
                        </div>
                        <div>
                          <Label htmlFor="phone-s">Телефон</Label>
                          <Input id="phone-s" type="tel" placeholder="+7 (999) 123-45-67" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email-s">Email</Label>
                        <Input id="email-s" type="email" placeholder="ivan@supplier.ru" />
                      </div>
                      <div>
                        <Label htmlFor="details">Описание предложения</Label>
                        <Textarea id="details" placeholder="Опишите ваши товары и услуги..." rows={4} />
                      </div>
                      <Button type="submit" size="lg" className="w-full">
                        Отправить предложение
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
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
