import Link from "@/components/link"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <main className="min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h1 className="font-serif text-5xl md:text-6xl font-light mb-4">404</h1>
        <p className="text-muted-foreground mb-8">Страница не найдена</p>
        <Button asChild>
          <Link href="/">На главную</Link>
        </Button>
      </div>
    </main>
  )
}
