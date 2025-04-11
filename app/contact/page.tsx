import { Mail, Phone, MapPin } from "lucide-react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function ContactPage() {

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl pb-10 md:text-4xl font-light text-center">CONTACT US</h1>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-medium mb-6">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 mt-1 text-gray-600" />
                <div>
                  <h3 className="font-medium mb-1">Phone Numbers</h3>
                  <p className="text-sm text-gray-600">
                  +8801747-236093
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 mt-1 text-gray-600" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-sm text-gray-600">contact@etherealbd.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-xl font-medium mb-6">Call Hours</h2>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Saturday - Thursday</td>
                    <td className="py-2 text-right">12:00 AM - 10:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
