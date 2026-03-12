import Link from '@/components/link'
import { SITE } from '@/lib/site'

const CATALOG_LINKS = [
	{ label: 'Диваны', href: '/catalog/sofas' },
	{ label: 'Кресла и стулья', href: '/catalog/chairs' },
	{ label: 'Столы', href: '/catalog/tables' },
] as const

const INFO_LINKS = [
	{ label: 'О компании', href: '/about' },
	{ label: 'Производство', href: '/manufacturing' },
	{ label: 'Материалы', href: '/materials' },
	{ label: 'Партнёрам', href: '/partners' },
	{ label: 'Контакты', href: '/contacts' },
] as const

export function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className='relative z-10 bg-primary text-primary-foreground'>
			<div className='container mx-auto px-4 py-16 lg:px-8'>
				<div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4'>
					<div>
						<div className='mb-4 text-2xl font-serif font-semibold'>
							{SITE.name}
						</div>
						<p className='text-sm leading-relaxed text-primary-foreground/80'>
							Каталог мебели для дома, офиса и общественных пространств.
						</p>
					</div>

					<nav aria-label='Каталог'>
						<h3 className='mb-4 font-semibold'>Каталог</h3>
						<ul className='space-y-2 text-sm text-primary-foreground/80'>
							{CATALOG_LINKS.map(link => (
								<li key={link.href}>
									<Link
										href={link.href}
										className='transition-colors hover:text-primary-foreground'
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<nav aria-label='Информация'>
						<h3 className='mb-4 font-semibold'>Информация</h3>
						<ul className='space-y-2 text-sm text-primary-foreground/80'>
							{INFO_LINKS.map(link => (
								<li key={link.href}>
									<Link
										href={link.href}
										className='transition-colors hover:text-primary-foreground'
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<div>
						<h3 className='mb-4 font-semibold'>Контакты</h3>
						<ul className='space-y-2 text-sm text-primary-foreground/80'>
							<li>{SITE.city}</li>
							<li>{SITE.address}</li>
							<li className='pt-2'>
								<a
									href={SITE.phoneHref}
									className='transition-colors hover:text-primary-foreground'
								>
									{SITE.phone}
								</a>
							</li>
							<li>
								<a
									href={SITE.emailHref}
									className='transition-colors hover:text-primary-foreground'
								>
									{SITE.email}
								</a>
							</li>
							<li className='pt-4 text-xs'>{SITE.workingHours}</li>
						</ul>
					</div>
				</div>

				<div className='mt-12 flex flex-col items-center justify-between border-t border-primary-foreground/20 pt-8 text-sm text-primary-foreground/60 md:flex-row'>
					<p>
						© {year} {SITE.name}. Все права защищены.
					</p>
					<div className='mt-4 flex gap-6 md:mt-0'>
						<Link
							href='/privacy'
							className='transition-colors hover:text-primary-foreground'
						>
							Политика конфиденциальности
						</Link>
						<Link
							href='/terms'
							className='transition-colors hover:text-primary-foreground'
						>
							Условия использования
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
