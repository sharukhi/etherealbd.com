import Image from "next/image"
import ProductCard from "@/components/product-card"
import InstagramGrid from "@/components/instagram-grid"
import Footer from "@/components/footer"
import VideoHero from "@/components/video-hero"
import Navbar from "@/components/navbar"


export default function Home() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/contact", label: "Contact" }
  ]

  const newArrivals = [
    {
      id: 1,
      name: "Khaki Pleated Trousers",
      price: "1,625.00",
      image: "/images/1.jpg",
      link: "/contact"
    },
    {
      id: 2,
      name: "Classic Stripe Shirt",
      price: "1,625.00",
      image: "/images/2.jpg",
      link: "/"
    },
    {
      id: 3,
      name: "Modern Stripe Shirt",
      price: "1,625.00",
      image: "/images/3.jpg",
      link: "/"
    },
    {
      id: 4,
      name: "Beige Pleated Trousers",
      price: "1,690.00",
      image: "/images/4.jpg",
      link: "/"
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <VideoHero />

      {/* New Arrivals Section */}
      <section className="py-8 md:py-12 px-4">
        <h2 className="text-xl md:text-2xl font-normal mb-6 md:mb-8">New arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="py-3 text-right"><a href="/shop" className="underline">View more </a></div>
      </section>

      {/* Title Event Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 mb-8 md:mb-16 m-4">
          <Image
            src="/images/event.jpg"
            alt="The Ethereal"
            width={600}
            height={800}
            className="w-full h-auto"
          />
        <div className="bg-white py-6 md:py-12  md:pl-12 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Designed to Stay With You</h2>
          <p className="text-sm leading-relaxed">
          Crafted for movement, designed with intention. These pieces flow with your body—never against it. Clean lines, subtle structure, and a second-skin feel come together to create clothing that moves with you, supports you, and stays in sync with your lifestyle. Whether you're running miles or running errands, this is style in motion.
          </p>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="mb-8 md:mb-16 px-4">
        <h2 className="text-lg font-normal mb-6 md:mb-8">Follow us on Instagram</h2>
        <InstagramGrid />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
