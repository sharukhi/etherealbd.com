import Link from "next/link"
import { ChevronLeft, Truck, Clock, MapPin } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shipping | Ethereal",
 
}

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-nude-bg">
      <main className="py-12">
        <div className="w-full px-4 max-w-[1200px] mx-auto">
          <Link href="/" className="inline-flex items-center text-sm mb-8 hover:underline text-nude-brown">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to home
          </Link>

          <h1 className="text-3xl font-bold mb-8 text-nude-brown">Shipping Information</h1>

          <div className="prose prose-lg max-w-none text-nude-brown/90">
            <p className="lead-paragraph mb-8">
              At Ethereal, we strive to deliver your carefully crafted garments promptly and safely. 
              Our shipping service is designed to ensure your items reach you in perfect condition, 
              right when you need them.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-nude-brown flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              1. Delivery Timeline
            </h2>
            <div className="bg-nude-brown/5 p-6 rounded-lg mb-8">
              <ul className="list-none p-0 m-0 space-y-4">
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-nude-brown/70" />
                  <span><strong>Dhaka City:</strong> Delivery within 2 (two) working days</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-nude-brown/70" />
                  <span><strong>Outside Dhaka:</strong> Delivery within 5 (five) working days</span>
                </li>
              </ul>
              <p className="text-sm text-nude-brown/70 mt-4">
                Note: Delivery times are estimates and may vary during peak seasons or unforeseen circumstances.
              </p>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-nude-brown flex items-center">
              <Truck className="h-5 w-5 mr-2" />
              2. Delivery Process
            </h2>
            <ul>
              <li>Our delivery partner will contact you before delivery</li>
              <li>Customer must be available to receive the parcel</li>
            </ul>



            <div className="mt-8">
              <p className="text-sm text-nude-brown/70">
                For any questions about your delivery, please contact our customer service team:
                <br />
                Phone: <a href="tel:+8801747236093" className="hover:underline">+8801747-236093</a>
                <br />
                Email: <a href="mailto:contact@etherealbd.com" className="hover:underline">contact@etherealbd.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}