import Link from "next/link"
import { ChevronLeft, Phone, Mail, Clock } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Ethereal",
 
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-nude-bg">
      <main className="py-12">
        <div className="w-full px-4 max-w-[1200px] mx-auto">
          <Link href="/" className="inline-flex items-center text-sm mb-8 hover:underline text-nude-brown">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to home
          </Link>

          <div className="prose prose-lg max-w-none text-nude-brown/90 mb-16">
            <h1 className="text-3xl font-bold mb-8 text-nude-brown">Contact Us</h1>
            
            <p className="lead-paragraph mb-8">
              We're here to help you with any questions about our collections, sizing, or availability. 
              At Ethereal, we believe in building lasting relationships with our customers and providing 
              exceptional service that matches the quality of our garments.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-nude-brown flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Phone Numbers
                </h2>
                <p className="text-lg">+8801747-236093</p>
                <p className="text-sm text-nude-brown/70 mt-2">
                  Our dedicated customer service team is ready to assist you with any inquiries.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 text-nude-brown flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </h2>
                <a href="mailto:contact@etherealbd.com" className="text-lg hover:underline">
                  contact@etherealbd.com
                </a>
                <p className="text-sm text-nude-brown/70 mt-2">
                  For detailed inquiries, collaborations, or feedback, email us anytime.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 text-nude-brown flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Call Hours
                </h2>
                <p className="text-lg">Saturday - Thursday</p>
                <p className="text-lg">12:00 AM - 10:00 PM</p>
                <p className="text-sm text-nude-brown/70 mt-2">
                  We maintain extended hours to ensure we're available when you need us.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-nude-brown/5 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-nude-brown">
                Your Style Journey Matters
              </h2>
              <p className="text-nude-brown/80">
                Whether you're exploring our latest collections, need styling advice, or have questions 
                about an order, we're committed to providing you with the attention and expertise you 
                deserve. Connect with us through any of our channels, and let us be part of your style journey.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}