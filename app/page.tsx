import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { HeroSlideshow } from "@/components/hero-slideshow"
import { ProductCard } from "@/components/product-card"
import {
  getNewArrivalsProducts,
  getMensProducts,
  getMoreProducts,
  getHomeHeroImages,
  getHomeMobileHeroImages,
} from "@/lib/data"

export default function Home() {
  // Limit to 4 products per section
  const newArrivalsProducts = getNewArrivalsProducts().slice(0, 4)
  const mensProducts = getMensProducts().slice(0, 4)
  const moreProducts = getMoreProducts().slice(0, 4)
  const heroImages = getHomeHeroImages()
  const mobileHeroImages = getHomeMobileHeroImages()

  return (
    <div className="min-h-screen bg-et-bg">
      <main className="pt-0">
        {/* Hero Section with Slideshow */}
        <section>
          <HeroSlideshow
            images={heroImages}
            mobileImages={mobileHeroImages}
            title="New Arrivals"
            ctaText="Shop Now"
            ctaLink="/new"
          />
        </section>

        {/* New Arrivals Section */}
        <section className="py-12">
          <div className="w-full px-4 max-w-[1200px] mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-et-brown">New Arrivals</h2>
              <Link href="/shop" className="text-sm flex items-center hover:underline text-et-brown">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {newArrivalsProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>



        {/* Men's Collection */}
        <section className="py-12">
          <div className="w-full px-4 max-w-[1200px] mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-et-brown">Best Selling</h2>
              <Link href="/shop" className="text-sm flex items-center hover:underline text-et-brown">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {mensProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Second Hero Banner */}
        <section>
          <HeroSlideshow
            images={heroImages.slice(0, 3)}
            mobileImages={mobileHeroImages.slice(0, 3)}
            title="Bottoms"
            ctaText="Shop Now"
            ctaLink="/mens"
          />
        </section>

        {/* More Products */}
        <section className="py-12">
          <div className="w-full px-4 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {moreProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>


        <section className="py-12 bg-et-bg/80">
          <div className="w-full px-4 max-w-[1200px] mx-auto">
            <div className="relative h-[60vh]">
              <Image
                src="https://res.cloudinary.com/dwlaojqop/image/upload/v1748291920/DSCF1630_1_qoeggz.jpg"
                alt="Store interior"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-8 left-8 bg-et-bg p-6 rounded-lg max-w-xs">
                <h3 className="text-xl font-bold mb-2 text-et-brown">Drift Into the Ethereal</h3>
                <p className="text-sm text-et-brown/80 mb-4">
                  Where soft silhouettes meet strong statements. Explore the look that defines your flow.
                </p>
                <Link href="/shop" className="text-sm font-medium flex items-center hover:underline text-et-brown">
                  Shop now<ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
