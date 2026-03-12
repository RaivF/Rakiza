export const categories = [
	{
		id: 'sofas',
		name: 'Диваны',
		description: 'Мини-диваны для дома и общественных пространств',
		image: '/real/products/mini-sofa/neraskladnoy/render/01.jpg',
	},
	{
		id: 'chairs',
		name: 'Кресла и стулья',
		description: 'Мягкие стулья, кресла и компактные модели для кухни, офиса и кафе',
		image: '/real/products/chairs/soft-chair/render/temno-zelenyy-1.jpg',
	},
	{
		id: 'tables',
		name: 'Столы',
		description: 'Кухонные и универсальные столы',
		image: '/real/products/tables/razdvizhnoy-oval/belyy/render/01.jpg',
	},
] as const

export type Category = (typeof categories)[number]
export type CategoryId = Category['id']

export const collections = [
	{
		id: 'conference',
		name: 'Conference',
		description: 'Столы и решения для встреч: компактно, аккуратно, практично.',
		image: '/real/products/tables/razdvizhnoy-oval/belyy/render/01.jpg',
		tags: ['столы'],
	},
	{
		id: 'lounge',
		name: 'Lounge',
		description: 'Мягкие решения для зоны отдыха и ожидания.',
		image: '/real/products/chairs/kids-armchair/render/molochnyy-1.jpg',
		tags: ['мягкая мебель'],
	},
	{
		id: 'metropolitan',
		name: 'Metropolitan',
		description: 'Сдержанная эстетика: чистые линии и спокойные цвета.',
		image: '/real/products/mini-sofa/neraskladnoy/render/01.jpg',
		tags: ['диваны'],
	},
	{
		id: 'workspace',
		name: 'Workspace',
		description: 'Компактные стулья для рабочих пространств и кухни.',
		image: '/real/products/chairs/soft-chair/render/temno-zelenyy-1.jpg',
		tags: ['стулья'],
	},
] as const

export type Collection = (typeof collections)[number]
export type CollectionId = Collection['id']

export const productionCards = [
	{
		id: 'cnc',
		name: 'cnc',
		title: 'CNC-раскрой и подготовка деталей',
		subtitle: 'Точная геометрия, стабильные размеры',
		meta: 'Листовые материалы • Маркировка • Карты раскроя',
		image: '/images/production/cnc.png',
	},
	{
		id: 'edgebanding',
		name: 'edgebanding',
		title: 'Кромкооблицовка и присадка',
		subtitle: 'Чистая кромка и аккуратные узлы',
		meta: 'Кромление • Сверловка • Фурнитура',
		image: '/images/production/edgebanding.png',
	},
	{
		id: 'assembly',
		name: 'assembly',
		title: 'Сборка и контроль качества',
		subtitle: 'Проверка каждой позиции перед отгрузкой',
		meta: 'Сборочный участок • ОТК • Тестирование',
		image: '/images/production/assembly.png',
	},
	{
		id: 'pack',
		name: 'pack',
		title: 'Упаковка и внутренняя логистика',
		subtitle: 'Безопасная доставка и комплектация',
		meta: 'Упаковка • Маркировка • Склад',
		image: '/images/production/packaging.png',
	},
]

export type Project = (typeof productionCards)[number]

export type Dimensions = {
	width: number
	height: number
	depth: number
}

export type ProductVariant = {
	id: string
	name: string
	colorHex?: string
	images: readonly string[]
}

export type Product = {
	id: string
	name: string
	category: CategoryId
	collection?: string
	image: string
	images: readonly string[]
	price: string
	specs: readonly string[]
	description: string
	materials?: readonly string[]
	dimensions?: Dimensions
	defaultVariantId?: string
	variants?: readonly ProductVariant[]
}

export const products = {
	sofas: [
			{
				id: 'mini-sofa-neraskladnoy',
				name: 'Мини-диван-банкетка',
				category: 'sofas',
				collection: 'RAKIZA',
				image: '/real/products/mini-sofa/neraskladnoy/render/01.jpg',
				images: [
					'/real/products/mini-sofa/neraskladnoy/render/01.jpg',
					'/real/products/mini-sofa/neraskladnoy/render/02.jpg',
					'/real/products/mini-sofa/neraskladnoy/render/03.jpg',
					'/real/products/mini-sofa/neraskladnoy/render/04.jpg',
					'/real/products/mini-sofa/neraskladnoy/render/05.jpg',
					'/real/products/mini-sofa/neraskladnoy/render/06.jpg',
					'/real/products/mini-sofa/neraskladnoy/render/07.jpg',
					'/real/products/mini-sofa/neraskladnoy/render/08.jpg',
					'/real/products/mini-sofa/neraskladnoy/photo/size.jpg',
				],
				price: 'по запросу',
				specs: ['Нераскладной', 'Вариантов обивки: 8', 'Мягкая обивка', 'Компактный формат'],
				description: 'Банкетка для дома, офиса и зон ожидания. Выберите вариант обивки.',
				defaultVariantId: 'zelenyy-1',
				variants: [
					{
						id: 'zelenyy-1',
						name: 'Зелёный',
						colorHex: '#1f6f68',
						images: ['/real/products/mini-sofa/neraskladnoy/render/01.jpg', '/real/products/mini-sofa/neraskladnoy/photo/size.jpg'],
					},
					{
						id: 'rozovyy-1',
						name: 'Розовый',
						colorHex: '#c58a94',
						images: ['/real/products/mini-sofa/neraskladnoy/render/02.jpg', '/real/products/mini-sofa/neraskladnoy/photo/size.jpg'],
					},
					{
						id: 'korichnevyy-1',
						name: 'Коричневый',
						colorHex: '#8b6b5a',
						images: ['/real/products/mini-sofa/neraskladnoy/render/03.jpg', '/real/products/mini-sofa/neraskladnoy/photo/size.jpg'],
					},
					{
						id: 'svetlo-seryy-1',
						name: 'Светло-серый',
						colorHex: '#d1d5db',
						images: ['/real/products/mini-sofa/neraskladnoy/render/04.jpg', '/real/products/mini-sofa/neraskladnoy/photo/size.jpg'],
					},
					{
						id: 'korichnevyy-2',
						name: 'Коричневый (2)',
						colorHex: '#8b6b5a',
						images: ['/real/products/mini-sofa/neraskladnoy/render/05.jpg', '/real/products/mini-sofa/neraskladnoy/photo/size.jpg'],
					},
					{
						id: 'svetlo-seryy-2',
						name: 'Светло-серый (2)',
						colorHex: '#d1d5db',
						images: ['/real/products/mini-sofa/neraskladnoy/render/06.jpg', '/real/products/mini-sofa/neraskladnoy/photo/size.jpg'],
					},
					{
						id: 'temno-korichnevyy-1',
						name: 'Тёмно-коричневый',
						colorHex: '#3d2f29',
						images: ['/real/products/mini-sofa/neraskladnoy/render/07.jpg', '/real/products/mini-sofa/neraskladnoy/photo/size.jpg'],
					},
					{
						id: 'temno-zelenyy-1',
						name: 'Тёмно-зелёный',
						colorHex: '#0f3d3a',
						images: ['/real/products/mini-sofa/neraskladnoy/render/08.jpg', '/real/products/mini-sofa/neraskladnoy/photo/size.jpg'],
					},
				],
			},
			{
				id: 'mini-sofa-raskladnoy',
				name: 'Мини-диван-банкетка с ящиком',
				category: 'sofas',
				collection: 'RAKIZA',
				image: '/real/products/mini-sofa/raskladnoy/render/zelenyy-1.jpg',
				images: [
					'/real/products/mini-sofa/raskladnoy/render/zelenyy-1.jpg',
					'/real/products/mini-sofa/raskladnoy/render/zelenyy-2.jpg',
					'/real/products/mini-sofa/raskladnoy/render/rozovyy-1.jpg',
					'/real/products/mini-sofa/raskladnoy/render/rozovyy-2.jpg',
					'/real/products/mini-sofa/raskladnoy/render/rozovyy-3.jpg',
					'/real/products/mini-sofa/raskladnoy/render/bezhevyy-1.jpg',
					'/real/products/mini-sofa/raskladnoy/render/bezhevyy-2.jpg',
					'/real/products/mini-sofa/raskladnoy/render/belyy-1.jpg',
					'/real/products/mini-sofa/raskladnoy/render/belyy-2.jpg',
					'/real/products/mini-sofa/raskladnoy/render/seryy-1.jpg',
					'/real/products/mini-sofa/raskladnoy/render/seryy-2.jpg',
					'/real/products/mini-sofa/raskladnoy/render/siniy-1.jpg',
					'/real/products/mini-sofa/raskladnoy/render/siniy-2.jpg',
					'/real/products/mini-sofa/raskladnoy/render/zheltyy-1.jpg',
					'/real/products/mini-sofa/raskladnoy/render/zheltyy-2.jpg',
					'/real/products/mini-sofa/raskladnoy/render/zheltyy-3.jpg',
					'/real/products/mini-sofa/raskladnoy/render/chernyy-1.jpg',
					'/real/products/mini-sofa/raskladnoy/render/chernyy-2.jpg',
					'/real/products/mini-sofa/raskladnoy/render/korichnevyy-1.jpg',
					'/real/products/mini-sofa/raskladnoy/photo/open-50cm.png', '/real/products/mini-sofa/raskladnoy/photo/size.jpg',
				],
				price: 'по запросу',
				specs: ['С ящиком для хранения', 'Вариантов обивки: 19', 'Компактный формат', 'Подходит для дома/офиса'],
				description: 'Банкетка с ящиком для хранения — для дома, офиса и зон ожидания. Выберите вариант обивки.',
				defaultVariantId: 'zelenyy-1',
				variants: [
					{ id: 'zelenyy-1', name: 'Зелёный', colorHex: '#1f6f68', images: ['/real/products/mini-sofa/raskladnoy/render/zelenyy-1.jpg', '/real/products/mini-sofa/raskladnoy/photo/open-50cm.png', '/real/products/mini-sofa/raskladnoy/photo/size.jpg'] },
					{ id: 'zelenyy-2', name: 'Зелёный (2)', colorHex: '#1f6f68', images: ['/real/products/mini-sofa/raskladnoy/render/zelenyy-2.jpg', '/real/products/mini-sofa/raskladnoy/photo/open-50cm.png', '/real/products/mini-sofa/raskladnoy/photo/size.jpg'] },
					{ id: 'rozovyy-1', name: 'Розовый', colorHex: '#c58a94', images: ['/real/products/mini-sofa/raskladnoy/render/rozovyy-1.jpg', '/real/products/mini-sofa/raskladnoy/photo/open-50cm.png', '/real/products/mini-sofa/raskladnoy/photo/size.jpg'] },
					{ id: 'rozovyy-2', name: 'Розовый (2)', colorHex: '#c58a94', images: ['/real/products/mini-sofa/raskladnoy/render/rozovyy-2.jpg', '/real/products/mini-sofa/raskladnoy/photo/open-50cm.png', '/real/products/mini-sofa/raskladnoy/photo/size.jpg'] },
					{ id: 'rozovyy-3', name: 'Розовый (3)', colorHex: '#c58a94', images: ['/real/products/mini-sofa/raskladnoy/render/rozovyy-3.jpg', '/real/products/mini-sofa/raskladnoy/photo/open-50cm.png', '/real/products/mini-sofa/raskladnoy/photo/size.jpg'] },
					{ id: 'bezhevyy-1', name: 'Бежевый', colorHex: '#c7ad9b', images: ['/real/products/mini-sofa/raskladnoy/render/bezhevyy-1.jpg', '/real/products/mini-sofa/raskladnoy/photo/open-50cm.png', '/real/products/mini-sofa/raskladnoy/photo/size.jpg'] },
					{ id: 'bezhevyy-2', name: 'Бежевый (2)', colorHex: '#c7ad9b', images: ['/real/products/mini-sofa/raskladnoy/render/bezhevyy-2.jpg', '/real/products/mini-sofa/raskladnoy/photo/open-50cm.png', '/real/products/mini-sofa/raskladnoy/photo/size.jpg'] },
					{ id: 'belyy-1', name: 'Белый', colorHex: '#f5f5f5', images: ['/real/products/mini-sofa/raskladnoy/render/belyy-1.jpg', '/real/products/mini-sofa/raskladnoy/photo/open-50cm.png', '/real/products/mini-sofa/raskladnoy/photo/size.jpg'] },
					{ id: 'belyy-2', name: 'Белый (2)', colorHex: '#f5f5f5', images: ['/real/products/mini-sofa/raskladnoy/render/belyy-2.jpg', '/real/products/mini-sofa/raskladnoy/photo/open-50cm.png', '/real/products/mini-sofa/raskladnoy/photo/size.jpg'] },
					{ id: 'seryy-1', name: 'Серый', colorHex: '#9aa1a9', images: ['/real/products/mini-sofa/raskladnoy/render/seryy-1.jpg', '/real/products/mini-sofa/raskladnoy/photo/open-50cm.png', '/real/products/mini-sofa/raskladnoy/photo/size.jpg'] },
					{ id: 'seryy-2', name: 'Серый (2)', colorHex: '#9aa1a9', images: ['/real/products/mini-sofa/raskladnoy/render/seryy-2.jpg', '/real/products/mini-sofa/raskladnoy/photo/open-50cm.png', '/real/products/mini-sofa/raskladnoy/photo/size.jpg'] },
					{ id: 'siniy-1', name: 'Синий', colorHex: '#2f6fa3', images: ['/real/products/mini-sofa/raskladnoy/render/siniy-1.jpg', '/real/products/mini-sofa/raskladnoy/photo/open-50cm.png', '/real/products/mini-sofa/raskladnoy/photo/size.jpg'] },
					{ id: 'siniy-2', name: 'Синий (2)', colorHex: '#2f6fa3', images: ['/real/products/mini-sofa/raskladnoy/render/siniy-2.jpg', '/real/products/mini-sofa/raskladnoy/photo/open-50cm.png', '/real/products/mini-sofa/raskladnoy/photo/size.jpg'] },
					{ id: 'zheltyy-1', name: 'Жёлтый', colorHex: '#f5c400', images: ['/real/products/mini-sofa/raskladnoy/render/zheltyy-1.jpg', '/real/products/mini-sofa/raskladnoy/photo/open-50cm.png', '/real/products/mini-sofa/raskladnoy/photo/size.jpg'] },
					{ id: 'zheltyy-2', name: 'Жёлтый (2)', colorHex: '#f5c400', images: ['/real/products/mini-sofa/raskladnoy/render/zheltyy-2.jpg', '/real/products/mini-sofa/raskladnoy/photo/open-50cm.png', '/real/products/mini-sofa/raskladnoy/photo/size.jpg'] },
					{ id: 'zheltyy-3', name: 'Жёлтый (3)', colorHex: '#f5c400', images: ['/real/products/mini-sofa/raskladnoy/render/zheltyy-3.jpg', '/real/products/mini-sofa/raskladnoy/photo/open-50cm.png', '/real/products/mini-sofa/raskladnoy/photo/size.jpg'] },
					{ id: 'chernyy-velvet', name: 'Чёрный (бархат)', colorHex: '#111827', images: ['/real/products/mini-sofa/raskladnoy/render/chernyy-1.jpg', '/real/products/mini-sofa/raskladnoy/photo/open-50cm.png', '/real/products/mini-sofa/raskladnoy/photo/size.jpg'] },
					{ id: 'chernyy-kozhzam', name: 'Чёрный (кожзам)', colorHex: '#111827', images: ['/real/products/mini-sofa/raskladnoy/render/chernyy-2.jpg', '/real/products/mini-sofa/raskladnoy/photo/open-50cm.png', '/real/products/mini-sofa/raskladnoy/photo/size.jpg'] },
					{ id: 'korichnevyy-1', name: 'Коричневый', colorHex: '#6b4a3a', images: ['/real/products/mini-sofa/raskladnoy/render/korichnevyy-1.jpg', '/real/products/mini-sofa/raskladnoy/photo/open-50cm.png', '/real/products/mini-sofa/raskladnoy/photo/size.jpg'] },
				],
			},
		],
	chairs: [
			{
				id: 'soft-chair',
				name: 'Кресло-банкетка',
				category: 'chairs',
				collection: 'Workspace',
				image: '/real/products/chairs/soft-chair/render/temno-zelenyy-1.jpg',
				images: [
					'/real/products/chairs/soft-chair/render/rozovyy-1.jpg',
					'/real/products/chairs/soft-chair/render/chernyy-1.jpg',
					'/real/products/chairs/soft-chair/render/svetlo-seryy-1.jpg',
					'/real/products/chairs/soft-chair/render/grafit-1.jpg',
					'/real/products/chairs/soft-chair/render/oranzhevyy-1.jpg',
					'/real/products/chairs/soft-chair/render/grafit-2.jpg',
					'/real/products/chairs/soft-chair/render/molochnyy-1.jpg',
					'/real/products/chairs/soft-chair/render/seryy-1.jpg',
					'/real/products/chairs/soft-chair/render/oranzhevyy-2.jpg',
					'/real/products/chairs/soft-chair/render/grafit-3.jpg',
					'/real/products/chairs/soft-chair/render/molochnyy-2.jpg',
					'/real/products/chairs/soft-chair/render/svetlo-seryy-2.jpg',
					'/real/products/chairs/soft-chair/render/pudrovyy-1.jpg',
					'/real/products/chairs/soft-chair/render/temno-zelenyy-1.jpg',
					'/real/products/chairs/soft-chair/render/lilovo-seryy-1.jpg',
					'/real/products/chairs/soft-chair/render/chernyy-2.jpg',
					'/real/products/chairs/soft-chair/render/bezhevyy-1.jpg',
					'/real/products/chairs/soft-chair/render/siniy-1.jpg',
					'/real/products/chairs/soft-chair/render/svetlo-seryy-3.jpg',
					'/real/products/chairs/soft-chair/render/rozovyy-2.jpg',
					'/real/products/chairs/soft-chair/render/svetlo-seryy-4.jpg',
					'/real/products/chairs/soft-chair/render/korichnevyy-1.jpg',
					'/real/products/chairs/soft-chair/render/pudrovo-bezhevyy-1.jpg',
					'/real/products/chairs/soft-chair/render/sero-zelenyy-1.jpg',
					'/real/products/chairs/soft-chair/render/zheltyy-1.jpg',
					'/real/products/chairs/soft-chair/render/siniy-grafit-1.jpg',
					'/real/products/chairs/soft-chair/photo/size.jpg',
				],
				price: 'по запросу',
				specs: [
					'Компактный формат',
					'Мягкая обивка',
					'Подходит для кухни, кафе и зон ожидания',
					'Цветов: 26',
				],
				description:
					'Компактное мягкое кресло-банкетка для кухни, кафе, переговорных и зон ожидания. Доступно в широкой палитре спокойных и акцентных оттенков.',
				defaultVariantId: 'temno-zelenyy-1',
				variants: [
					{ id: 'rozovyy-1', name: 'Розовый', colorHex: '#c58a94', images: ['/real/products/chairs/soft-chair/render/rozovyy-1.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'chernyy-1', name: 'Чёрный', colorHex: '#111827', images: ['/real/products/chairs/soft-chair/render/chernyy-1.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'svetlo-seryy-1', name: 'Светло-серый', colorHex: '#c9ced6', images: ['/real/products/chairs/soft-chair/render/svetlo-seryy-1.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'grafit-1', name: 'Графит', colorHex: '#6b7280', images: ['/real/products/chairs/soft-chair/render/grafit-1.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'oranzhevyy-1', name: 'Оранжевый', colorHex: '#f97316', images: ['/real/products/chairs/soft-chair/render/oranzhevyy-1.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'grafit-2', name: 'Тёмный графит', colorHex: '#4b5563', images: ['/real/products/chairs/soft-chair/render/grafit-2.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'molochnyy-1', name: 'Молочный', colorHex: '#f3f0ea', images: ['/real/products/chairs/soft-chair/render/molochnyy-1.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'seryy-1', name: 'Серый', colorHex: '#8b8f97', images: ['/real/products/chairs/soft-chair/render/seryy-1.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'oranzhevyy-2', name: 'Терракотовый', colorHex: '#ea580c', images: ['/real/products/chairs/soft-chair/render/oranzhevyy-2.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'grafit-3', name: 'Антрацит', colorHex: '#374151', images: ['/real/products/chairs/soft-chair/render/grafit-3.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'molochnyy-2', name: 'Кремовый', colorHex: '#f5f1ec', images: ['/real/products/chairs/soft-chair/render/molochnyy-2.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'svetlo-seryy-2', name: 'Серебристо-серый', colorHex: '#d8d6dc', images: ['/real/products/chairs/soft-chair/render/svetlo-seryy-2.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'pudrovyy-1', name: 'Пудровый', colorHex: '#d7b1ba', images: ['/real/products/chairs/soft-chair/render/pudrovyy-1.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'temno-zelenyy-1', name: 'Тёмно-зелёный', colorHex: '#0f3d3a', images: ['/real/products/chairs/soft-chair/render/temno-zelenyy-1.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'lilovo-seryy-1', name: 'Лилово-серый', colorHex: '#b5aab4', images: ['/real/products/chairs/soft-chair/render/lilovo-seryy-1.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'chernyy-2', name: 'Угольный', colorHex: '#0f172a', images: ['/real/products/chairs/soft-chair/render/chernyy-2.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'bezhevyy-1', name: 'Бежевый', colorHex: '#d7c2b0', images: ['/real/products/chairs/soft-chair/render/bezhevyy-1.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'siniy-1', name: 'Синий', colorHex: '#6b8bbd', images: ['/real/products/chairs/soft-chair/render/siniy-1.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'svetlo-seryy-3', name: 'Жемчужно-серый', colorHex: '#d7dbe2', images: ['/real/products/chairs/soft-chair/render/svetlo-seryy-3.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'rozovyy-2', name: 'Пудрово-розовый', colorHex: '#d9a8b3', images: ['/real/products/chairs/soft-chair/render/rozovyy-2.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'svetlo-seryy-4', name: 'Пепельно-серый', colorHex: '#dde1e7', images: ['/real/products/chairs/soft-chair/render/svetlo-seryy-4.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'korichnevyy-1', name: 'Коричневый', colorHex: '#7c5a4d', images: ['/real/products/chairs/soft-chair/render/korichnevyy-1.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'pudrovo-bezhevyy-1', name: 'Пудрово-бежевый', colorHex: '#d9c0bc', images: ['/real/products/chairs/soft-chair/render/pudrovo-bezhevyy-1.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'sero-zelenyy-1', name: 'Серо-зелёный', colorHex: '#8ea49b', images: ['/real/products/chairs/soft-chair/render/sero-zelenyy-1.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'zheltyy-1', name: 'Жёлтый', colorHex: '#f3c623', images: ['/real/products/chairs/soft-chair/render/zheltyy-1.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
					{ id: 'siniy-grafit-1', name: 'Сине-графитовый', colorHex: '#5d6478', images: ['/real/products/chairs/soft-chair/render/siniy-grafit-1.jpg', '/real/products/chairs/soft-chair/photo/size.jpg'] },
				],
			},
			{
				id: 'chair-with-storage',
				name: 'Кресло с ящиком',
				category: 'chairs',
				collection: 'Workspace',
				image: '/real/products/chairs/chair-with-storage/render/temno-zelenyy-1.jpg',
				images: [
					'/real/products/chairs/chair-with-storage/render/molochnyy-1.jpg',
					'/real/products/chairs/chair-with-storage/render/svetlo-seryy-1.jpg',
					'/real/products/chairs/chair-with-storage/render/zheltyy-1.jpg',
					'/real/products/chairs/chair-with-storage/render/seryy-1.jpg',
					'/real/products/chairs/chair-with-storage/render/korichnevyy-1.jpg',
					'/real/products/chairs/chair-with-storage/render/bezhevyy-1.jpg',
					'/real/products/chairs/chair-with-storage/render/temno-zelenyy-1.jpg',
					'/real/products/chairs/chair-with-storage/render/seryy-melanzh-1.jpg',
					'/real/products/chairs/chair-with-storage/render/seryy-melanzh-2.jpg',
					'/real/products/chairs/chair-with-storage/render/svetlo-seryy-2.jpg',
					'/real/products/chairs/chair-with-storage/render/rozovyy-1.jpg',
					'/real/products/chairs/chair-with-storage/render/zelenyy-1.jpg',
					'/real/products/chairs/chair-with-storage/render/temno-siniy-1.jpg',
					'/real/products/chairs/chair-with-storage/render/chernyy-1.jpg',
					'/real/products/chairs/chair-with-storage/photo/size.jpg',
					'/real/products/chairs/chair-with-storage/photo/open.jpg',
				],
				price: 'по запросу',
				specs: [
					'С ящиком для хранения',
					'Мягкая обивка',
					'Компактный формат',
					'Цветов: 14',
				],
				description:
					'Компактное мягкое кресло с ящиком для хранения. Подходит для прихожей, кухни, небольших зон ожидания и интерьеров, где важно сохранить полезное пространство.',
				defaultVariantId: 'temno-zelenyy-1',
				variants: [
					{ id: 'molochnyy-1', name: 'Молочный', colorHex: '#f3f0ea', images: ['/real/products/chairs/chair-with-storage/render/molochnyy-1.jpg', '/real/products/chairs/chair-with-storage/photo/size.jpg', '/real/products/chairs/chair-with-storage/photo/open.jpg'] },
					{ id: 'svetlo-seryy-1', name: 'Светло-серый', colorHex: '#d4d7dd', images: ['/real/products/chairs/chair-with-storage/render/svetlo-seryy-1.jpg', '/real/products/chairs/chair-with-storage/photo/size.jpg', '/real/products/chairs/chair-with-storage/photo/open.jpg'] },
					{ id: 'zheltyy-1', name: 'Жёлтый', colorHex: '#f3c623', images: ['/real/products/chairs/chair-with-storage/render/zheltyy-1.jpg', '/real/products/chairs/chair-with-storage/photo/size.jpg', '/real/products/chairs/chair-with-storage/photo/open.jpg'] },
					{ id: 'seryy-1', name: 'Серый', colorHex: '#8b8f97', images: ['/real/products/chairs/chair-with-storage/render/seryy-1.jpg', '/real/products/chairs/chair-with-storage/photo/size.jpg', '/real/products/chairs/chair-with-storage/photo/open.jpg'] },
					{ id: 'korichnevyy-1', name: 'Коричневый', colorHex: '#7c5a4d', images: ['/real/products/chairs/chair-with-storage/render/korichnevyy-1.jpg', '/real/products/chairs/chair-with-storage/photo/size.jpg', '/real/products/chairs/chair-with-storage/photo/open.jpg'] },
					{ id: 'bezhevyy-1', name: 'Бежевый', colorHex: '#d3b9a6', images: ['/real/products/chairs/chair-with-storage/render/bezhevyy-1.jpg', '/real/products/chairs/chair-with-storage/photo/size.jpg', '/real/products/chairs/chair-with-storage/photo/open.jpg'] },
					{ id: 'temno-zelenyy-1', name: 'Тёмно-зелёный', colorHex: '#0f3d3a', images: ['/real/products/chairs/chair-with-storage/render/temno-zelenyy-1.jpg', '/real/products/chairs/chair-with-storage/photo/size.jpg', '/real/products/chairs/chair-with-storage/photo/open.jpg'] },
					{ id: 'seryy-melanzh-1', name: 'Серый меланж', colorHex: '#8b8f97', images: ['/real/products/chairs/chair-with-storage/render/seryy-melanzh-1.jpg', '/real/products/chairs/chair-with-storage/photo/size.jpg', '/real/products/chairs/chair-with-storage/photo/open.jpg'] },
					{ id: 'seryy-melanzh-2', name: 'Тёмный меланж', colorHex: '#7d8189', images: ['/real/products/chairs/chair-with-storage/render/seryy-melanzh-2.jpg', '/real/products/chairs/chair-with-storage/photo/size.jpg', '/real/products/chairs/chair-with-storage/photo/open.jpg'] },
					{ id: 'svetlo-seryy-2', name: 'Серебристый серый', colorHex: '#d9dbe2', images: ['/real/products/chairs/chair-with-storage/render/svetlo-seryy-2.jpg', '/real/products/chairs/chair-with-storage/photo/size.jpg', '/real/products/chairs/chair-with-storage/photo/open.jpg'] },
					{ id: 'rozovyy-1', name: 'Розовый', colorHex: '#d5a3ae', images: ['/real/products/chairs/chair-with-storage/render/rozovyy-1.jpg', '/real/products/chairs/chair-with-storage/photo/size.jpg', '/real/products/chairs/chair-with-storage/photo/open.jpg'] },
					{ id: 'zelenyy-1', name: 'Зелёный', colorHex: '#5f7f74', images: ['/real/products/chairs/chair-with-storage/render/zelenyy-1.jpg', '/real/products/chairs/chair-with-storage/photo/size.jpg', '/real/products/chairs/chair-with-storage/photo/open.jpg'] },
					{ id: 'temno-siniy-1', name: 'Тёмно-синий', colorHex: '#232b45', images: ['/real/products/chairs/chair-with-storage/render/temno-siniy-1.jpg', '/real/products/chairs/chair-with-storage/photo/size.jpg', '/real/products/chairs/chair-with-storage/photo/open.jpg'] },
					{ id: 'chernyy-1', name: 'Чёрный', colorHex: '#111827', images: ['/real/products/chairs/chair-with-storage/render/chernyy-1.jpg', '/real/products/chairs/chair-with-storage/photo/size.jpg', '/real/products/chairs/chair-with-storage/photo/open.jpg'] },
				],
			},
			{
				id: 'kids-armchair',
				name: 'Детское кресло с подлокотниками',
				category: 'chairs',
				collection: 'Lounge',
				image: '/real/products/chairs/kids-armchair/render/molochnyy-1.jpg',
				images: [
					'/real/products/chairs/kids-armchair/render/temno-seryy-1.jpg',
					'/real/products/chairs/kids-armchair/render/rozovyy-1.jpg',
					'/real/products/chairs/kids-armchair/render/pylno-rozovyy-1.jpg',
					'/real/products/chairs/kids-armchair/render/oranzhevyy-1.jpg',
					'/real/products/chairs/kids-armchair/render/svetlo-goluboy-1.jpg',
					'/real/products/chairs/kids-armchair/render/molochnyy-1.jpg',
					'/real/products/chairs/kids-armchair/render/chernyy-1.jpg',
					'/real/products/chairs/kids-armchair/photo/size.jpg',
				],
				price: 'по запросу',
				specs: [
					'С подлокотниками',
					'Компактный детский формат',
					'Мягкая обивка',
					'Цветов: 7',
				],
				description:
					'Уютное детское кресло с подлокотниками для дома, игровых зон и детских пространств. Мягкая посадка и спокойные пропорции делают модель удобной для повседневного использования.',
				defaultVariantId: 'molochnyy-1',
				variants: [
					{ id: 'temno-seryy-1', name: 'Тёмно-серый', colorHex: '#4b5563', images: ['/real/products/chairs/kids-armchair/render/temno-seryy-1.jpg', '/real/products/chairs/kids-armchair/photo/size.jpg'] },
					{ id: 'rozovyy-1', name: 'Розовый', colorHex: '#d4a8b2', images: ['/real/products/chairs/kids-armchair/render/rozovyy-1.jpg', '/real/products/chairs/kids-armchair/photo/size.jpg'] },
					{ id: 'pylno-rozovyy-1', name: 'Пыльно-розовый', colorHex: '#b08a97', images: ['/real/products/chairs/kids-armchair/render/pylno-rozovyy-1.jpg', '/real/products/chairs/kids-armchair/photo/size.jpg'] },
					{ id: 'oranzhevyy-1', name: 'Оранжевый', colorHex: '#f28c28', images: ['/real/products/chairs/kids-armchair/render/oranzhevyy-1.jpg', '/real/products/chairs/kids-armchair/photo/size.jpg'] },
					{ id: 'svetlo-goluboy-1', name: 'Светло-голубой', colorHex: '#b7d1d6', images: ['/real/products/chairs/kids-armchair/render/svetlo-goluboy-1.jpg', '/real/products/chairs/kids-armchair/photo/size.jpg'] },
					{ id: 'molochnyy-1', name: 'Молочный', colorHex: '#f3f0ea', images: ['/real/products/chairs/kids-armchair/render/molochnyy-1.jpg', '/real/products/chairs/kids-armchair/photo/size.jpg'] },
					{ id: 'chernyy-1', name: 'Чёрный', colorHex: '#111827', images: ['/real/products/chairs/kids-armchair/render/chernyy-1.jpg', '/real/products/chairs/kids-armchair/photo/size.jpg'] },
				],
			}
	],
	tables: [
		{
			id: 'table-razdvizhnoy-oval',
			name: 'Стол раздвижной (овал)',
			category: 'tables',
			collection: 'Conference',
			image: '/real/products/tables/razdvizhnoy-oval/belyy/render/01.jpg',
			images: [
				'/real/products/tables/razdvizhnoy-oval/belyy/render/01.jpg',
				'/real/products/tables/razdvizhnoy-oval/dub/render/01.jpg',
				'/real/products/tables/razdvizhnoy-oval/kaylos/render/01.jpg',
				'/real/products/tables/razdvizhnoy-oval/kreatel/render/01.jpg',
				'/real/products/tables/razdvizhnoy-oval/sabiya/render/01.jpg',
			],
			price: 'по запросу',
			specs: ['Раздвижной', 'Форма: овал', 'Отделок: 5'],
			description: 'Раздвижной стол овальной формы. Выберите отделку на странице товара.',
			defaultVariantId: 'belyy',
			variants: [
				{ id: 'belyy', name: 'Белый', colorHex: '#ffffff', images: ['/real/products/tables/razdvizhnoy-oval/belyy/render/01.jpg', '/real/products/tables/razdvizhnoy-oval/belyy/photo/size.png'] },
				{ id: 'dub', name: 'Дуб', colorHex: '#b08968', images: ['/real/products/tables/razdvizhnoy-oval/dub/render/01.jpg', '/real/products/tables/razdvizhnoy-oval/belyy/photo/size.png'] },
				{ id: 'kaylos', name: 'Кайлос', colorHex: '#334155', images: ['/real/products/tables/razdvizhnoy-oval/kaylos/render/01.jpg', '/real/products/tables/razdvizhnoy-oval/belyy/photo/size.png'] },
				{ id: 'kreatel', name: 'Креатель', colorHex: '#9f7a58', images: ['/real/products/tables/razdvizhnoy-oval/kreatel/render/01.jpg', '/real/products/tables/razdvizhnoy-oval/belyy/photo/size.png'] },
				{ id: 'sabiya', name: 'Сабия', colorHex: '#b49277', images: ['/real/products/tables/razdvizhnoy-oval/sabiya/render/01.jpg', '/real/products/tables/razdvizhnoy-oval/belyy/photo/size.png'] },
			],
		},
		{
			id: 'table-razdvizhnoy-pryamougolnik',
			name: 'Стол раздвижной (прямоугольник)',
			category: 'tables',
			collection: 'Conference',
			image: '/real/products/tables/razdvizhnoy-pryamougolnik/belyy/render/01.jpg',
			images: [
				'/real/products/tables/razdvizhnoy-pryamougolnik/belyy/render/01.jpg',
				'/real/products/tables/razdvizhnoy-pryamougolnik/dub/render/01.jpg',
				'/real/products/tables/razdvizhnoy-pryamougolnik/kaylos/render/01.jpg',
				'/real/products/tables/razdvizhnoy-pryamougolnik/kreatel/render/01.jpg',
				'/real/products/tables/razdvizhnoy-pryamougolnik/sabiya/render/01.jpg',
			],
			price: 'по запросу',
			specs: ['Раздвижной', 'Форма: прямоугольник', 'Отделок: 5'],
			description: 'Раздвижной стол прямоугольной формы. Выберите отделку на странице товара.',
			defaultVariantId: 'belyy',
			variants: [
				{ id: 'belyy', name: 'Белый', colorHex: '#ffffff', images: ['/real/products/tables/razdvizhnoy-pryamougolnik/belyy/render/01.jpg', '/real/products/tables/razdvizhnoy-pryamougolnik/belyy/photo/size.png'] },
				{ id: 'dub', name: 'Дуб', colorHex: '#b08968', images: ['/real/products/tables/razdvizhnoy-pryamougolnik/dub/render/01.jpg', '/real/products/tables/razdvizhnoy-pryamougolnik/belyy/photo/size.png'] },
				{ id: 'kaylos', name: 'Кайлос', colorHex: '#334155', images: ['/real/products/tables/razdvizhnoy-pryamougolnik/kaylos/render/01.jpg', '/real/products/tables/razdvizhnoy-pryamougolnik/belyy/photo/size.png'] },
				{ id: 'kreatel', name: 'Креатель', colorHex: '#9f7a58', images: ['/real/products/tables/razdvizhnoy-pryamougolnik/kreatel/render/01.jpg', '/real/products/tables/razdvizhnoy-pryamougolnik/belyy/photo/size.png'] },
				{ id: 'sabiya', name: 'Сабия', colorHex: '#b49277', images: ['/real/products/tables/razdvizhnoy-pryamougolnik/sabiya/render/01.jpg', '/real/products/tables/razdvizhnoy-pryamougolnik/belyy/photo/size.png'] },
			],
		},
		{
			id: 'table-nerazdvizhnoy-oval',
			name: 'Стол нераздвижной (овал)',
			category: 'tables',
			collection: 'Conference',
			image: '/real/products/tables/nerazdvizhnoy-oval/belyy/render/01.jpg',
			images: [
				'/real/products/tables/nerazdvizhnoy-oval/belyy/render/01.jpg',
				'/real/products/tables/nerazdvizhnoy-oval/dub/render/01.jpg',
				'/real/products/tables/nerazdvizhnoy-oval/kaylos/render/01.jpg',
				'/real/products/tables/nerazdvizhnoy-oval/kreatel/render/01.jpg',
				'/real/products/tables/nerazdvizhnoy-oval/sabiya/render/01.jpg',
			],
			price: 'по запросу',
			specs: ['Нераздвижной', 'Форма: овал', 'Отделок: 5'],
			description: 'Нераздвижной стол овальной формы. Выберите отделку на странице товара.',
			defaultVariantId: 'belyy',
			variants: [
				{ id: 'belyy', name: 'Белый', colorHex: '#ffffff', images: ['/real/products/tables/nerazdvizhnoy-oval/belyy/render/01.jpg', '/real/products/tables/nerazdvizhnoy-oval/belyy/photo/size.png'] },
				{ id: 'dub', name: 'Дуб', colorHex: '#b08968', images: ['/real/products/tables/nerazdvizhnoy-oval/dub/render/01.jpg', '/real/products/tables/nerazdvizhnoy-oval/belyy/photo/size.png'] },
				{ id: 'kaylos', name: 'Кайлос', colorHex: '#334155', images: ['/real/products/tables/nerazdvizhnoy-oval/kaylos/render/01.jpg', '/real/products/tables/nerazdvizhnoy-oval/belyy/photo/size.png'] },
				{ id: 'kreatel', name: 'Креатель', colorHex: '#9f7a58', images: ['/real/products/tables/nerazdvizhnoy-oval/kreatel/render/01.jpg', '/real/products/tables/nerazdvizhnoy-oval/belyy/photo/size.png'] },
				{ id: 'sabiya', name: 'Сабия', colorHex: '#b49277', images: ['/real/products/tables/nerazdvizhnoy-oval/sabiya/render/01.jpg', '/real/products/tables/nerazdvizhnoy-oval/belyy/photo/size.png'] },
			],
		},
		{
			id: 'table-nerazdvizhnoy-pryamougolnik',
			name: 'Стол нераздвижной (прямоугольник)',
			category: 'tables',
			collection: 'Conference',
			image: '/real/products/tables/nerazdvizhnoy-pryamougolnik/belyy/render/01.jpg',
			images: [
				'/real/products/tables/nerazdvizhnoy-pryamougolnik/belyy/render/01.jpg',
				'/real/products/tables/nerazdvizhnoy-pryamougolnik/dub/render/01.jpg',
				'/real/products/tables/nerazdvizhnoy-pryamougolnik/kaylos/render/01.jpg',
				'/real/products/tables/nerazdvizhnoy-pryamougolnik/kreatel/render/01.jpg',
				'/real/products/tables/nerazdvizhnoy-pryamougolnik/sabiya/render/01.jpg',
			],
			price: 'по запросу',
			specs: ['Нераздвижной', 'Форма: прямоугольник', 'Отделок: 5'],
			description: 'Нераздвижной стол прямоугольной формы. Выберите отделку на странице товара.',
			defaultVariantId: 'belyy',
			variants: [
				{ id: 'belyy', name: 'Белый', colorHex: '#ffffff', images: ['/real/products/tables/nerazdvizhnoy-pryamougolnik/belyy/render/01.jpg', '/real/products/tables/nerazdvizhnoy-pryamougolnik/belyy/photo/size.png'] },
				{ id: 'dub', name: 'Дуб', colorHex: '#b08968', images: ['/real/products/tables/nerazdvizhnoy-pryamougolnik/dub/render/01.jpg', '/real/products/tables/nerazdvizhnoy-pryamougolnik/belyy/photo/size.png'] },
				{ id: 'kaylos', name: 'Кайлос', colorHex: '#334155', images: ['/real/products/tables/nerazdvizhnoy-pryamougolnik/kaylos/render/01.jpg', '/real/products/tables/nerazdvizhnoy-pryamougolnik/belyy/photo/size.png'] },
				{ id: 'kreatel', name: 'Креатель', colorHex: '#9f7a58', images: ['/real/products/tables/nerazdvizhnoy-pryamougolnik/kreatel/render/01.jpg', '/real/products/tables/nerazdvizhnoy-pryamougolnik/belyy/photo/size.png'] },
				{ id: 'sabiya', name: 'Сабия', colorHex: '#b49277', images: ['/real/products/tables/nerazdvizhnoy-pryamougolnik/sabiya/render/01.jpg', '/real/products/tables/nerazdvizhnoy-pryamougolnik/belyy/photo/size.png'] },
			],
		},
	],
} as const

export const materialCategories = [
	{
		title: '3D модели',
		description: 'Файлы для визуализации в форматах .max, .skp, .obj',
		icon: '3D',
	},
	{
		title: 'Сертификаты',
		description: 'Документация и сертификаты соответствия',
		icon: '📄',
	},
	{
		title: 'Образцы тканей',
		description: 'Каталоги обивочных материалов',
		icon: '🎨',
	},
	{
		title: 'Фотоархив',
		description: 'Высококачественные фотографии продукции',
		icon: '📸',
	},
	{
		title: 'Тех. описания',
		description: 'Чертежи и технические характеристики',
		icon: '📐',
	},
] as const

export type MaterialCategory = (typeof materialCategories)[number]

// Блоки для главной страницы
export const advantages = [
  {
    title: 'Собственное производство',
    description: 'Полный цикл и контроль качества на всех этапах.',
  },
  {
    title: 'Компактный формат',
    description: 'Мини-мебель для дома, офисов, кафе и зон ожидания.',
  },
  {
    title: 'Варианты обивки',
    description: 'Подбор ткани и цвета под интерьер и задачу.',
  },
] as const

export type Advantage = (typeof advantages)[number]
