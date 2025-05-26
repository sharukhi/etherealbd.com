import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Ethereal",
 
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-nude-bg">
      <main className="py-12">
        <div className="w-full px-4 max-w-[1200px] mx-auto">
          <Link href="/" className="inline-flex items-center text-sm mb-8 hover:underline text-nude-brown">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to home
          </Link>

          <h1 className="text-3xl font-bold mb-8 text-nude-brown">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none text-nude-brown/90">
            <p className="text-nude-brown/80">Last updated: May 25, 2025</p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-nude-brown">1. Introduction</h2>
            <p>
              At Ethereal, we respect your privacy and are committed to protecting your personal data. This privacy 
              policy explains how we collect, use, and safeguard your information when you visit our website and make 
              purchases through our WooCommerce-powered online store.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-nude-brown">2. Information We Collect</h2>
            <p>When you visit our website or make a purchase, we may collect:</p>
            <ul>
              <li>Name and contact information (email address, phone number, billing/shipping address)</li>
              <li>Order information and transaction history</li>
              <li>Payment information (processed securely through our payment processors)</li>
              <li>Account preferences and communication preferences</li>
              <li>Device information and browsing data</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-nude-brown">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Communicate about your purchases and provide customer support</li>
              <li>Send order updates and shipping notifications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-nude-brown">4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. Our WooCommerce 
              store uses SSL encryption for all transactions, and we regularly update our security protocols.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-nude-brown">5. Cookies and Tracking</h2>
            <p>
              Our website uses cookies to enhance your shopping experience. These cookies help us remember your 
              cart items, preferences, and provide a smoother checkout process.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-nude-brown">6. Third-Party Services</h2>
            <p>
              We use trusted third-party services for payment processing, shipping, and analytics. These 
              service providers have their own privacy policies and handle your data according to their terms.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-nude-brown">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Export your data</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-nude-brown">8. Contact Us</h2>
            <p>For privacy-related inquiries, please contact us at:</p>
            <p className="mt-4">
              Email: contact@etherealbd.com<br />
              Phone: +8801747-236093
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-nude-brown">9. Updates to Privacy Policy</h2>
            <p>
              We may update this privacy policy periodically. The latest version will always be posted on our 
              website with the effective date.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}