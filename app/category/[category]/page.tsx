import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { getProductsByCategory } from "@/lib/data"
import { notFound } from "next/navigation"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params
  const products = getProductsByCategory(category)

  if (!products || products.length === 0) {
    notFound()
  }

  // Format category name for display (e.g., "t-shirts" -> "T-Shirts")
  const formattedCategory = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="min-h-screen bg-et-bg">
      <main className="py-12">
        <div className="w-full px-4 max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Link href="/shop" className="inline-flex items-center text-sm mb-2 hover:underline text-et-brown">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to shop
              </Link>
              <h1 className="text-2xl font-bold text-et-brown">{formattedCategory}</h1>
            </div>

            <div className="flex gap-2">
              <select className="px-3 py-2 border border-et-brown/20 rounded-md bg-white text-et-brown text-sm focus:outline-none focus:ring-1 focus:ring-et-brown">
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-et-brown/70">No products found in this category.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
