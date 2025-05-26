import productsData from "@/data/products.json"
import heroImagesData from "@/data/hero-images.json"

export interface Product {
  id: string
  name: string
  category: string
  price: number
  images: string[]
  colors?: string[]
  slug: string
}

export interface HeroImage {
  src: string
  alt: string
}

export function getNewArrivalsProducts(): Product[] {
  return productsData.newArrivals
}

export function getMensProducts(): Product[] {
  return productsData.bestSelling
}

export function getMoreProducts(): Product[] {
  return productsData.moreProducts
}

export function getShopProducts(): Product[] {
  return productsData.allProducts
}

export function getAllProducts(): Product[] {
  // Combine all product arrays into one for search functionality
  return [
    ...productsData.newArrivals,
    ...productsData.bestSelling,
    ...productsData.moreProducts,
    ...productsData.allProducts,
  ]
}

export function getProductById(id: string): Product | undefined {
  return getAllProducts().find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  // Normalize the category for comparison (lowercase and handle hyphens)
  const normalizedCategory = category.toLowerCase().replace(/-/g, " ")

  return getAllProducts().filter((product) => product.category.toLowerCase() === normalizedCategory)
}

export function getHomeHeroImages(): HeroImage[] {
  return heroImagesData.homeHero
}

export function getHomeMobileHeroImages(): HeroImage[] {
  return heroImagesData.homeMobileHero
}
