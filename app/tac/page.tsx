import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-light text-center">
          TERMS AND CONDITIONS
          </h1>
        </div>
      </div>

      {/* Terms Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-sm max-w-none">
            <p className="text-sm text-gray-500 mb-8">
              Last updated: April 10, 2025
            </p>

            <section id="delivery-info">
              <h2 className="text-2xl py-5">1. Delivery Information</h2>

              <h3 className="text-lg py-2">1.1 Delivery Timeline</h3>
              <ul className="list-disc px-9">
                <li>
                  <strong>For Dhaka City:</strong> Delivery within 2 (two)
                  working days
                </li>
                <li>
                  <strong>Outside Dhaka:</strong> Delivery within 5 (five)
                  working days
                </li>
              </ul>

              <h3 className="text-lg py-2">1.2 Delivery Process</h3>
              <ul className="list-disc px-9">
                <li>Our delivery partner will contact you before delivery</li>
                <li>Customer must be available to receive the parcel</li>
              </ul>
            </section>

            <section id="return-policy">
              <h2 className="text-2xl py-5" >2. Return and Replacement Policy</h2>

              <h3 className="text-lg py-2">2.1 Parcel Inspection</h3>
              <ul className="list-disc px-9">
                <li>
                  All customers <strong>MUST</strong> check their parcel at the
                  time of delivery
                </li>
                <li>
                  Inspection should be done in front of the delivery person
                </li>
                <li>
                  Any issues must be reported immediately to the delivery person
                </li>
              </ul>

              <h3 className="text-lg py-2" >2.2 Refund Policy</h3>
              <ul className="list-disc px-9">
                <li>
                  <strong>No refunds</strong> will be provided after accepting
                  the delivery
                </li>
                <li>
                  Once the delivery person leaves, we cannot accept refund
                  requests
                </li>
                <li>All sales are final after parcel acceptance</li>
              </ul>

              <h3 className="text-lg py-2" >2.3 Replacement Terms</h3>
              <ul className="list-disc px-9">
                <li>Replacements are available for defective items</li>
                <li>To qualify for replacement:</li>
                <ul className="list-[circle] px-4">
                  <li>Product must be unused</li>
                  <li>Original tags must be attached</li>
                  <li>Must have proof of purchase</li>
                  <li>
                    Replacement requests must be made within 7 days of delivery
                  </li>
                </ul>
              </ul>
            </section>

            <section id="customer-responsibilities">
              <h2 className="text-2xl py-5" >3. Customer Responsibilities</h2>

              <h3 className="text-lg py-2" >3.1 During Delivery</h3>
              <ul className="list-disc px-9">
                <li>Be present at the delivery address</li>
                <li>Inspect all items thoroughly</li>
                <li>Report any issues immediately</li>
              </ul>
            </section>

            <section id="contact-info">
              <h2 className="text-2xl py-5" >4. Contact Information</h2>
              <p>For any queries or concerns:</p>
              <ul className="list-disc px-9">
                <li>
                  <strong>Phone:</strong> +8801747236093
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:ethereal.bd.info@gmail.com">
                    ethereal.bd.info@gmail.com
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
