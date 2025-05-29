import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Ruler, Shirt, PenIcon as Pants } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Size Guide | Ethereal",
 
}

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-nude-bg">
      <main className="py-12">
        <div className="w-full px-4 max-w-[1000px] mx-auto">
          <Link href="/" className="inline-flex items-center text-sm mb-8 hover:underline text-nude-brown">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to home
          </Link>

          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-4 text-nude-brown">Size Guide</h1>
            <p className="text-nude-brown/80 max-w-2xl">
              Find your perfect fit with our detailed size charts. We recommend measuring yourself before ordering to
              ensure the best fit.
            </p>
          </div>



          {/* Size Charts Tabs */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-nude-brown">Size Charts</h2>



            {/* T-Shirts & Tops Size Chart */}
            <div className="bg-white p-6 rounded-md mb-8">
              <div className="flex items-center mb-4">
                <Shirt className="h-5 w-5 mr-2 text-nude-brown" />
                <h3 className="text-lg font-medium text-nude-brown">Tops</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse">
                  <thead>
                    <tr className="border-b border-nude-brown/10">
                      <th className="py-3 px-4 text-left text-sm font-medium text-nude-brown">Size</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-nude-brown">Chest (Inch)</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-nude-brown">Length (Inch)</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-nude-brown">Shoulder (Inch)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-nude-brown/10">
                      <td className="py-3 px-4 text-sm text-nude-brown">XS</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">40</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">24</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">7</td>
                    </tr>
                    <tr className="border-b border-nude-brown/10">
                      <td className="py-3 px-4 text-sm text-nude-brown">S</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">42</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">25</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">7.4</td>
                    </tr>
                    <tr className="border-b border-nude-brown/10">
                      <td className="py-3 px-4 text-sm text-nude-brown">M</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">44</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">26</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">7.7</td>
                    </tr>
                    <tr className="border-b border-nude-brown/10">
                      <td className="py-3 px-4 text-sm text-nude-brown">L</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">46</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">27</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Shorts & Pants Size Chart */}
            <div className="bg-white p-6 rounded-md">
              <div className="flex items-center mb-4">
                <Pants className="h-5 w-5 mr-2 text-nude-brown" />
                <h3 className="text-lg font-medium text-nude-brown">Bottoms</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse">
                  <thead>
                    <tr className="border-b border-nude-brown/10">
                      <th className="py-3 px-4 text-left text-sm font-medium text-nude-brown">Size</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-nude-brown">Length</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-nude-brown">Inseam</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-nude-brown">Waist</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-nude-brown">Hips</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-nude-brown">Thighs</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-nude-brown">Legs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-nude-brown/10">
                      <td className="py-3 px-4 text-sm text-nude-brown">S</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">41</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">30</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">28</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">38</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">23</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">17</td>
                    </tr>
                    <tr className="border-b border-nude-brown/10">
                      <td className="py-3 px-4 text-sm text-nude-brown">M</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">41</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">30</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">30</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">40</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">24</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">17</td>
                    </tr>
                    <tr className="border-b border-nude-brown/10">
                      <td className="py-3 px-4 text-sm text-nude-brown">L</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">42</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">31</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">32</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">40</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">24</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">18</td>
                    </tr>
                    <tr className="border-b border-nude-brown/10">
                      <td className="py-3 px-4 text-sm text-nude-brown">XL</td>
                            <td className="py-3 px-4 text-sm text-nude-brown/80">42</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">32</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">34</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">42</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">26</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">18</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-nude-brown">XXL</td>
                               <td className="py-3 px-4 text-sm text-nude-brown/80">43.5</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">33</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">36</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">44</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">26</td>
                      <td className="py-3 px-4 text-sm text-nude-brown/80">18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

       
        </div>
      </main>
    </div>
  )
}
