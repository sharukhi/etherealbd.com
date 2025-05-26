import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Ethereal",
 
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-nude-bg">
      <main className="py-12">
        <div className="w-full px-4 max-w-[1200px] mx-auto">
          <Link href="/" className="inline-flex items-center text-sm mb-8 hover:underline text-nude-brown">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to home
          </Link>

          <div className="prose prose-lg max-w-none text-nude-brown/90 mb-16">
            <h1 className="text-3xl font-bold mb-8 text-nude-brown">About Us</h1>
            
            <p className="lead-paragraph mb-8">
              Welcome to Ethereal, where fashion meets individuality. Since our inception, we have been dedicated 
              to creating clothing that empowers self-expression and celebrates personal style. Based in Bangladesh, 
              we take pride in combining contemporary design with exceptional craftsmanship to deliver garments 
              that make a lasting impression.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-nude-brown">Mission Statement</h2>
            <p>
              At Ethereal, our mission is to craft premium, high-quality, and trend-driven clothing that speaks to 
              individuality and self-expression. From meticulously made denim to innovative knitwear and exclusive 
              statement pieces, we aim to offer the people of Bangladesh garments that not only elevate everyday 
              style but also reflect personal stories and inner thoughts. Each piece is designed to help wearers 
              stand out—subtly, yet powerfully.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-nude-brown">Vision Statement</h2>
            <p>
              Our vision is to become one of the most dynamic and fastest-growing clothing brands in Bangladesh. 
              We strive to set new benchmarks in quality and creativity through distinctive denim, expertly crafted 
              woven and knitwear, and unique, limited-edition collections. Ethereal aspires to lead the evolution 
              of modern Bangladeshi fashion by delivering products that are both trendsetting and timeless.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-nude-brown">Our Commitment</h2>
            <p>
              At the heart of Ethereal lies our unwavering commitment to quality and innovation. We carefully 
              select premium materials and work with skilled artisans to ensure each garment meets our exacting 
              standards. Our dedication to sustainability and ethical production practices reflects our 
              responsibility to both our customers and the environment.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-nude-brown">Join Our Journey</h2>
            <p>
              We invite you to be part of the Ethereal story. Whether you're seeking signature denim pieces, 
              sophisticated knitwear, or exclusive collections, discover clothing that resonates with your 
              personal style and empowers you to express your unique identity.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}