import { useCallback, useEffect, useMemo } from 'react'
import Link from '@/components/link'
import Image from '@/components/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { categories, productionCards, products, advantages } from '@/lib/data'
import { getRandomCategoryPreviewImage } from '@/lib/catalog'

function formatModelsCount(count: number) {
	const mod10 = count % 10
	const mod100 = count % 100

	let word = 'моделей'
	if (mod10 === 1 && mod100 !== 11) {
		word = 'модель'
	} else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
		word = 'модели'
	}

	return `${count} ${word}`
}

function CollectionsInfiniteGallery() {
	const slides = useMemo(
		() => [
			{ key: 'sofa-green', src: '/real/products/mini-sofa/raskladnoy/render/zelenyy-1.jpg', alt: 'Мини-диван зелёный' },
			{ key: 'sofa-pink', src: '/real/products/mini-sofa/raskladnoy/render/rozovyy-1.jpg', alt: 'Мини-диван розовый' },
			{ key: 'sofa-yellow', src: '/real/products/mini-sofa/raskladnoy/render/zheltyy-1.jpg', alt: 'Мини-диван жёлтый' },
			{ key: 'sofa-blue', src: '/real/products/mini-sofa/raskladnoy/render/siniy-1.jpg', alt: 'Мини-диван синий' },
			{ key: 'sofa-cream', src: '/real/products/mini-sofa/neraskladnoy/render/01.jpg', alt: 'Мини-диван молочный' },
			{ key: 'chair-green', src: '/real/products/chairs/soft-chair/render/temno-zelenyy-1.jpg', alt: 'Кресло-банкетка тёмно-зелёное' },
			{ key: 'chair-orange', src: '/real/products/chairs/soft-chair/render/oranzhevyy-1.jpg', alt: 'Кресло-банкетка оранжевое' },
			{ key: 'chair-beige', src: '/real/products/chairs/soft-chair/render/pudrovo-bezhevyy-1.jpg', alt: 'Кресло-банкетка бежевое' },
			{ key: 'storage-pink', src: '/real/products/chairs/chair-with-storage/render/rozovyy-1.jpg', alt: 'Кресло с ящиком розовое' },
			{ key: 'storage-blue', src: '/real/products/chairs/chair-with-storage/render/temno-siniy-1.jpg', alt: 'Кресло с ящиком тёмно-синее' },
			{ key: 'storage-cream', src: '/real/products/chairs/chair-with-storage/render/molochnyy-1.jpg', alt: 'Кресло с ящиком молочное' },
			{ key: 'kids-orange', src: '/real/products/chairs/kids-armchair/render/oranzhevyy-1.jpg', alt: 'Детское кресло оранжевое' },
			{ key: 'kids-blue', src: '/real/products/chairs/kids-armchair/render/svetlo-goluboy-1.jpg', alt: 'Детское кресло голубое' },
			{ key: 'table-kaylos', src: '/real/products/tables/razdvizhnoy-oval/kaylos/render/01.jpg', alt: 'Стол с отделкой Кайлос' },
			{ key: 'table-sabiya', src: '/real/products/tables/razdvizhnoy-oval/sabiya/render/01.jpg', alt: 'Стол с отделкой Сабия' },
		],
		[],
	)

	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			align: 'start',
			dragFree: true,
		},
		[
			AutoScroll({
				// Автопрокрутка должна работать стабильно: даже после взаимодействия пользователя.
				speed: 1.2,
				stopOnInteraction: false,
				stopOnMouseEnter: false,
			}) as never,
		]
	)

	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

	useEffect(() => {
		if (!emblaApi) return
		// На всякий случай принудительно запускаем автопрокрутку после инициализации.
		const plugin = emblaApi.plugins()?.autoScroll as
			| { play?: () => void }
			| undefined
		plugin?.play?.()
	}, [emblaApi])

	return (
		<div className='relative'>
			<div className='pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/30 to-transparent z-10' />
			<div className='pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/30 to-transparent z-10' />

			<div className='absolute inset-y-0 left-0 z-20 flex items-center pl-2 pointer-events-none'>
				<Button
					size='icon'
					variant='secondary'
					className='pointer-events-auto rounded-full bg-background/70 backdrop-blur hover:bg-background/90'
					onClick={scrollPrev}
					aria-label='Прокрутить галерею влево'
				>
					<ChevronLeft className='h-5 w-5' />
				</Button>
			</div>
			<div className='absolute inset-y-0 right-0 z-20 flex items-center pr-2 pointer-events-none'>
				<Button
					size='icon'
					variant='secondary'
					className='pointer-events-auto rounded-full bg-background/70 backdrop-blur hover:bg-background/90'
					onClick={scrollNext}
					aria-label='Прокрутить галерею вправо'
				>
					<ChevronRight className='h-5 w-5' />
				</Button>
			</div>

			<div
				ref={emblaRef}
				className='overflow-hidden touch-pan-y'
				aria-label='Галерея коллекций'
			>
				{/*
				  Важно: Embla не умеет корректно учитывать CSS `gap` при расчёте позиций.
				  Поэтому расстояние между слайдами делаем через padding у слайда.
				  Так исчезает «шов/склейка» в месте зацикливания.
				*/}
				<div className='flex py-4 -ml-8'>
					{slides.map(s => (
						<div key={s.key} className='pl-8 flex-[0_0_auto]'>
							<div className='relative h-96 w-[680px] max-w-[90vw] overflow-hidden rounded-2xl shadow-sm bg-transparent ring-1 ring-white/15'>
								<Image src={s.src} alt={s.alt} fill className='object-cover' />
								<div className='absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent' />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default function HomePage() {
	const categoryPreviewImages = useMemo(
		() =>
			Object.fromEntries(
				categories.map(category => [category.id, getRandomCategoryPreviewImage(category.id)]),
			) as Record<(typeof categories)[number]['id'], string>,
		[],
	)

	return (
		<main className='relative overflow-x-hidden'>
			<div className='fixed inset-0 z-0'>
				<Image
					src='/real/backgrounds/home.jpg'
					alt='Офисная мебель'
					fill
					className='object-cover'
					priority
				/>
				<div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/25' />
			</div>

			<div className='relative z-10'>
				<section className='relative h-[85vh] overflow-hidden'>
					<div className='absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent' />

					<div className='relative h-full flex items-center justify-center'>
					<div className='container mx-auto px-4 lg:px-8'>
						<div className='max-w-3xl text-white'>
							<h1 className='font-serif text-5xl md:text-7xl font-light mb-6 text-balance leading-tight'>
								Мягкая мебель для дома, офисов и общественных пространств
							</h1>
							<p className='text-lg md:text-xl mb-8 text-white/90 leading-relaxed'>
								Производим мебель с 2024 года. Собственное производство, индивидуальный
								подбор материалов и гарантия качества.
							</p>
							<div className='flex flex-col sm:flex-row gap-4'>
								<Button size='lg' asChild className='text-base'>
									<Link href='/catalog'>
										Перейти в каталог
										<ArrowRight className='ml-2 h-5 w-5' />
									</Link>
								</Button>

							</div>
						</div>
					</div>
					</div>
				</section>

<section className='relative py-20 bg-background/85 backdrop-blur-md border-y border-border/30'>
				<div className='container mx-auto px-4 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='font-serif text-4xl md:text-5xl font-light mb-4'>
							Каталог продукции
						</h2>
						<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
							Мягкая мебель для дома, офиса и общественных пространств
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
						{categories.map(category => {
							const count = products[category.id].length

							return (
								<Link
									key={category.id}
									href={`/catalog/${category.id}`}
									className='group block overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-500'
								>
									<div className='relative h-80 overflow-hidden'>
										<Image
											src={categoryPreviewImages[category.id] || category.image}
											alt={category.name}
											fill
											className='object-cover transition-transform duration-700 group-hover:scale-110'
										/>
										<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />
										<div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
											<h3 className='text-2xl font-serif font-medium mb-2'>
												{category.name}
											</h3>
											<p className='text-sm text-white/80'>
												{category.description}
											</p>
											<div className='mt-3 inline-flex items-center gap-2 text-sm font-medium text-white/90'>
												{formatModelsCount(count)}
												<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
											</div>
										</div>
									</div>
								</Link>
							)
						})}
					</div>

					<div className='text-center'>
						<Button size='lg' asChild className='text-base'>
							<Link href='/catalog'>
								Перейти в каталог
								<ArrowRight className='ml-2 h-5 w-5' />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			<section className='relative py-20 bg-transparent'>
				<div className='pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/65 via-black/25 to-transparent' />
				<div className='container mx-auto px-4 lg:px-8'>
					<div className='text-center mb-10'>
						<h2 className='font-serif text-4xl md:text-5xl font-light mb-4 text-white'>
							Наша Галерея
						</h2>
					</div>

					<CollectionsInfiniteGallery />
				</div>
			</section>

				<section className='py-20 bg-background/80 backdrop-blur-md border-y border-border/40'>
				<div className='container mx-auto px-4 lg:px-8'>
					<div className='flex justify-between items-end mb-16'>
						<div>
							<h2 className='font-serif text-4xl md:text-5xl font-light mb-4'>
								О нашем производстве
							</h2>
							<p className='text-lg text-muted-foreground'>
								Более 40 сотрудников
							</p>
						</div>

						<Button
							variant='outline'
							asChild
							className='hidden md:flex bg-transparent'
						>
							<Link href='/manufacturing'>
								Подробнее
								<ArrowRight className='ml-2 h-4 w-4' />
							</Link>
						</Button>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{productionCards.map(card => (
							<Card
								key={card.id}
								className='group overflow-hidden p-0 gap-0 border-0 shadow-sm hover:shadow-xl transition-all duration-500'
							>
								<div className='relative h-72 overflow-hidden'>
									<Image
										src={card.image}
										alt={card.title}
										fill
										className='object-cover transition-transform duration-700 group-hover:scale-110 z-0'
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
										priority={false}
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10' />
									<div className='absolute bottom-0 left-0 right-0 p-6 text-white z-20'>
										<h3 className='text-xl font-medium mb-2'>{card.title}</h3>
										<p className='text-sm text-white/80 mb-1'>
											{card.subtitle}
										</p>
										<p className='text-xs text-white/60'>{card.meta}</p>
									</div>
								</div>
							</Card>
						))}
					</div>
				</div>
				</section>

				<section className='py-20 bg-background/80 backdrop-blur-md border-y border-border/40'>
				<div className='container mx-auto px-4 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='font-serif text-4xl md:text-5xl font-light mb-4'>
							Наши преимущества
						</h2>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto'>
						{advantages.map((advantage, index) => (
							<div key={index} className='text-center'>
								<CheckCircle className='h-12 w-12 mx-auto mb-4 opacity-80' />
								<h3 className='text-xl font-semibold mb-3'>
									{advantage.title}
								</h3>
								<p className='text-muted-foreground leading-relaxed'>
									{advantage.description}
								</p>
							</div>
						))}
					</div>
				</div>
				</section>
			</div>
		</main>
	)
}
