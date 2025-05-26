import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { getShopProducts } from "@/lib/data"

export default function ShopPage() {
  const products = getShopProducts()

  return (
    <div className="min-h-screen bg-et-bg">
      <main className="py-12">
        <div className="w-full px-4 max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Link href="/" className="inline-flex items-center text-sm mb-2 hover:underline text-et-brown">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to home
              </Link>
              <h1 className="text-2xl font-bold text-et-brown">All Products</h1>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
