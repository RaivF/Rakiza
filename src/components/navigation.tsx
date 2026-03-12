import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Link from '@/components/link'
import { Button } from '@/components/ui/button'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { categories } from '@/lib/data'
import { SITE } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
	{ label: 'Производство', href: '/manufacturing' },
	{ label: 'Материалы', href: '/materials' },
	{ label: 'Партнёрам', href: '/partners' },
	{ label: 'О компании', href: '/about' },
	{ label: 'Контакты', href: '/contacts' },
] as const

function isActivePath(pathname: string, href: string) {
	if (href === '/catalog') return pathname.startsWith('/catalog')
	return pathname === href
}

export function Navigation() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const { pathname } = useLocation()

	// Закрываем мобильное меню при смене страницы.
	useEffect(() => {
		setMobileMenuOpen(false)
	}, [pathname])

	const catalogActive = useMemo(
		() => pathname.startsWith('/catalog'),
		[pathname],
	)

	return (
		<header className='sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80'>
			<nav aria-label='Основная навигация'>
				<div className='container mx-auto px-4 lg:px-8'>
					<div className='flex h-16 items-center justify-between'>
						<Link
							href='/'
							aria-label='На главную'
							className='flex items-center gap-2'
						>
							<span className='text-xl font-serif font-semibold tracking-tight'>
								{SITE.name}
							</span>
						</Link>

						<div className='hidden items-center gap-8 lg:flex'>
							<NavigationMenu>
								<NavigationMenuList>
									<NavigationMenuItem>
										<NavigationMenuTrigger
											className={cn(
												'text-sm font-medium',
												catalogActive && 'text-foreground',
											)}
										>
											Каталог
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<div className='w-[620px] p-4'>
												<ul className='grid gap-3 md:grid-cols-2'>
													{categories.map(category => (
														<li key={category.id}>
															<NavigationMenuLink asChild>
																<Link
																	href={`/catalog/${category.id}`}
																	className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground'
																>
																	<div className='text-sm font-medium leading-none'>
																		{category.name}
																	</div>
																	<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
																		{category.description}
																	</p>
																</Link>
															</NavigationMenuLink>
														</li>
													))}
												</ul>

												<div className='mt-4 border-t border-border pt-4'>
													<NavigationMenuLink asChild>
														<Link
															href='/catalog'
															className={cn(
																'inline-flex text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
																catalogActive && 'text-foreground',
															)}
														>
															Все категории
														</Link>
													</NavigationMenuLink>
												</div>
											</div>
										</NavigationMenuContent>
									</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu>

							{NAV_ITEMS.map(item => (
								<Link
									key={item.href}
									href={item.href}
									className={cn(
										'text-sm font-medium transition-colors',
										isActivePath(pathname, item.href)
											? 'text-foreground'
											: 'text-muted-foreground hover:text-foreground',
									)}
								>
									{item.label}
								</Link>
							))}
						</div>

						<div className='flex items-center gap-4'>
							<Button
								variant='ghost'
								size='icon'
								className='lg:hidden'
								aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
								aria-expanded={mobileMenuOpen}
								aria-controls='mobile-menu'
								onClick={() => setMobileMenuOpen(v => !v)}
							>
								{mobileMenuOpen ? (
									<X className='h-6 w-6' />
								) : (
									<Menu className='h-6 w-6' />
								)}
							</Button>
						</div>
					</div>

					{mobileMenuOpen && (
						<div
							id='mobile-menu'
							className='lg:hidden border-t border-border py-4'
						>
							<div className='flex flex-col gap-3'>
								<Link
									href='/catalog'
									className={cn(
										'py-2 text-sm font-medium',
										pathname.startsWith('/catalog') && 'text-foreground',
									)}
								>
									Каталог
								</Link>

								{NAV_ITEMS.map(item => (
									<Link
										key={item.href}
										href={item.href}
										className={cn(
											'py-2 text-sm font-medium',
											isActivePath(pathname, item.href) && 'text-foreground',
										)}
									>
										{item.label}
									</Link>
								))}
							</div>
						</div>
					)}
				</div>
			</nav>
		</header>
	)
}
