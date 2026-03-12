import { categories, products, type Category, type CategoryId, type Product } from "@/lib/data"

const PRODUCT_ID_ALIASES: Partial<Record<CategoryId, Record<string, string>>> = {
  sofas: {
    "mini-sofa": "mini-sofa-neraskladnoy",
  },
  chairs: {
    "chair": "soft-chair",
    "mini-chair": "soft-chair",
    "mini-armchair": "kids-armchair",
  },
}

export const categoriesById: Record<CategoryId, Category> = categories.reduce(
  (acc, category) => {
    acc[category.id] = category
    return acc
  },
  {} as Record<CategoryId, Category>,
)

export function isCategoryId(value: string): value is CategoryId {
  return value in categoriesById
}

export function getCategory(id: CategoryId): Category {
  return categoriesById[id]
}

export function getProducts(id: CategoryId): readonly Product[] {
  return products[id]
}

export function getProduct(id: CategoryId, productId: string): Product | undefined {
  const direct = products[id].find((p) => p.id === productId)
  if (direct) return direct

  const alias = PRODUCT_ID_ALIASES[id]?.[productId]
  if (!alias) return undefined

  return products[id].find((p) => p.id === alias)
}

export function getSimilarProducts(id: CategoryId, productId: string, limit = 3): readonly Product[] {
  return products[id].filter((p) => p.id !== productId).slice(0, limit)
}

function collectRenderImages(product: Product): string[] {
  const fromVariants = (product.variants ?? []).flatMap((variant) =>
    (variant.images ?? []).filter((src) => src.includes("/render/")),
  )

  const fromProduct = (product.images ?? []).filter((src) => src.includes("/render/"))
  const fallback = product.image.includes("/render/") ? [product.image] : []

  return Array.from(new Set([...fromVariants, ...fromProduct, ...fallback]))
}

export function getVariantDisplayName(name: string): string {
  return name.replace(/\s*\(\d+\)\s*$/u, "")
}

export function getRandomCategoryPreviewImage(categoryId: CategoryId): string {
  const pool = products[categoryId].flatMap(collectRenderImages)
  if (pool.length === 0) return categoriesById[categoryId]?.image || "/placeholder.svg"
  return pool[Math.floor(Math.random() * pool.length)] || categoriesById[categoryId]?.image || "/placeholder.svg"
}

function getPreviewImageFromVariant(product: Product, variantId?: string): string {
  const variants = product.variants ?? []
  const variant =
    (variantId ? variants.find((v) => v.id === variantId) : undefined) ||
    (product.defaultVariantId ? variants.find((v) => v.id === product.defaultVariantId) : undefined) ||
    variants[0]

  const images =
    (variant && variant.images && variant.images.length > 0 ? variant.images : undefined) ||
    (product.images && product.images.length > 0 ? product.images : undefined) ||
    [product.image]

  const renderFirst = images.find((src) => src.includes("/render/"))
  return renderFirst || images[0] || product.image || "/placeholder.svg"
}

export function getRandomProductPreviewImage(product: Product): string {
  const variants = product.variants ?? []

  if (variants.length > 0) {
    const variantsWithImages = variants.filter((variant) => variant.images && variant.images.length > 0)
    const pool = variantsWithImages.length > 0 ? variantsWithImages : variants
    const randomVariant = pool[Math.floor(Math.random() * pool.length)]
    if (randomVariant) return getPreviewImageFromVariant(product, randomVariant.id)
  }

  return getPreviewImageFromVariant(product)
}

export function getProductPreviewImage(product: Product, variantId?: string): string {
  return getPreviewImageFromVariant(product, variantId)
}
