import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions | Ethereal",
 
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-nude-bg">
      <main className="py-12">
        <div className="w-full px-4 max-w-[1200px] mx-auto">
          <Link href="/" className="inline-flex items-center text-sm mb-8 hover:underline text-nude-brown">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to home
          </Link>

          <h1 className="text-3xl font-bold mb-8 text-nude-brown">Terms and Conditions</h1>

          <div className="prose prose-lg max-w-none text-nude-brown/90">
            <p className="text-nude-brown/80">Last updated: May 25, 2025</p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-nude-brown">1. Delivery Information</h2>
            <h3 className="text-lg font-semibold mt-6 mb-3 text-nude-brown">1.1 Delivery Timeline</h3>
            <ul>
              <li>For Dhaka City: Delivery within 2 (two) working days</li>
              <li>Outside Dhaka: Delivery within 5 (five) working days</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-nude-brown">1.2 Delivery Process</h3>
            <ul>
              <li>Our delivery partner will contact you before delivery</li>
              <li>Customer must be available to receive the parcel</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-nude-brown">2. Return and Replacement Policy</h2>
            <h3 className="text-lg font-semibold mt-6 mb-3 text-nude-brown">2.1 Parcel Inspection</h3>
            <ul>
              <li>All customers MUST check their parcel at the time of delivery</li>
              <li>Inspection should be done in front of the delivery person</li>
              <li>Any issues must be reported immediately to the delivery person</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-nude-brown">2.2 Refund Policy</h3>
            <ul>
              <li>No refunds will be provided after accepting the delivery</li>
              <li>Once the delivery person leaves, we cannot accept refund requests</li>
              <li>All sales are final after parcel acceptance</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-nude-brown">2.3 Replacement Terms</h3>
            <p>Replacements are available for defective items</p>
            <p>To qualify for replacement:</p>
            <ul>
              <li>Product must be unused</li>
              <li>Original tags must be attached</li>
              <li>Must have proof of purchase</li>
              <li>Replacement requests must be made within 7 days of delivery</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-nude-brown">3. Customer Responsibilities</h2>
            <h3 className="text-lg font-semibold mt-6 mb-3 text-nude-brown">3.1 During Delivery</h3>
            <ul>
              <li>Be present at the delivery address</li>
              <li>Inspect all items thoroughly</li>
              <li>Report any issues immediately</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-nude-brown">4. Contact Information</h2>
            <p>For any queries or concerns:</p>
            <p className="mt-4">
              Phone: <a href="tel:+8801747236093" className="hover:underline">+8801747236093</a><br />
              Email: <a href="mailto:ethereal.bd.info@gmail.com" className="hover:underline">ethereal.bd.info@gmail.com</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}