import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Download, ExternalLink } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Media kit | Ethereal",
 
}

export default function PressPage() {
  return (
    <div className="min-h-screen bg-nude-bg">
      <main className="py-12">
        <div className="w-full px-4 max-w-[1000px] mx-auto">
          <Link href="/" className="inline-flex items-center text-sm mb-8 hover:underline text-nude-brown">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to home
          </Link>

          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-4 text-nude-brown">Press Kit</h1>
            <p className="text-nude-brown/80 max-w-2xl">
              Welcome to the Etherealbd media kit page. Here you'll find all the resources you need for media coverage,
              including our logos, and contacts.
            </p>
          </div>

          {/* Brand Story Section
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-nude-brown">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-nude-brown/80 mb-4">
                  Nude Project was founded in 2018 with a vision to create contemporary fashion that balances minimalist
                  design with bold expression. Our name reflects our approach: stripping back to essentials while
                  remaining authentic.
                </p>
                <p className="text-nude-brown/80 mb-4">
                  Based in Madrid, Spain, we've grown from a small local brand to an international presence, with our
                  designs now worn across Europe, North America, and Asia.
                </p>
                <p className="text-nude-brown/80">
                  Our commitment to sustainability drives everything we do. We use organic and recycled materials
                  wherever possible, and we're working toward carbon neutrality by 2026.
                </p>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/logo.jpg"
                  alt="Nude Project founders"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </section>
 */}
          {/* Brand Assets Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-nude-brown">Brand Assets</h2>
            <p className="text-nude-brown/80 mb-6">
              Please use these official assets when featuring Etherealbd. Our brand elements should not be modified or
              distorted in any way.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Logos */}
              <div className="bg-white p-6 rounded-md">
                <h3 className="text-lg font-medium mb-4 text-nude-brown">Logo</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="relative h-32 bg-nude-bg rounded-md flex items-center justify-center">
                    <img src="/logo.jpg" alt="" className="rounded-2xl h-[110px]" />
                    
                  </div>
                </div>
                <a href="/downloads/ethereal_logo.zip" className="inline-flex items-center text-sm font-medium text-nude-brown hover:underline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Logo Pack (ZIP)
                </a>
              </div>

              {/* Color Palette */}
              <div className="bg-white p-6 rounded-md">
                <h3 className="text-lg font-medium mb-4 text-nude-brown">Color Palette</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="h-16 bg-[#271300] rounded-md mb-2"></div>
                    <p className="text-xs text-nude-brown/80">
                      <span className="font-medium">Etheral Brown</span>
                      <br />
                      HEX: #271300
                    </p>
                  </div>
                  <div>
                    <div className="h-16 bg-[#FFF7EB] rounded-md border border-nude-brown/10 mb-2"></div>
                    <p className="text-xs text-nude-brown/80">
                      <span className="font-medium">Ethereal Beige</span>
                      <br />
                      HEX: #FFF7EB
                    </p>
                  </div>
                </div>
                <a href="/downloads/ethereal_color_palette.zip" className="inline-flex items-center text-sm font-medium text-nude-brown hover:underline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Color Palette 
                </a>
              </div>
            </div>
          </section>

          {/* Product Images
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-nude-brown">Product Images</h2>
            <p className="text-nude-brown/80 mb-6">
              High-resolution product images from our latest collections are available for editorial use. Please credit
              "Courtesy of Nude Project" when using these images.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="relative aspect-[3/4] bg-white rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Product+1"
                  alt="Product image 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] bg-white rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Product+2"
                  alt="Product image 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] bg-white rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Product+3"
                  alt="Product image 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] bg-white rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Product+4"
                  alt="Product image 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-nude-brown text-white rounded-md hover:bg-nude-brown/90"
              >
                <Download className="h-4 w-4 mr-2" />
                Download SS25 Collection (ZIP)
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-nude-brown/20 text-nude-brown rounded-md hover:border-nude-brown"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Campaign Images (ZIP)
              </a>
            </div>
          </section>

          Press Releases 
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-nude-brown">Press Releases</h2>
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-md">
                <h3 className="text-lg font-medium mb-2 text-nude-brown">
                  Nude Project Announces Sustainable Capsule Collection
                </h3>
                <p className="text-sm text-nude-brown/60 mb-3">April 15, 2025</p>
                <p className="text-nude-brown/80 mb-4 line-clamp-2">
                  Nude Project is proud to announce our new capsule collection made entirely from recycled and organic
                  materials, launching May 2025.
                </p>
                <a href="#" className="inline-flex items-center text-sm font-medium text-nude-brown hover:underline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Press Release (PDF)
                </a>
              </div>

              <div className="p-6 bg-white rounded-md">
                <h3 className="text-lg font-medium mb-2 text-nude-brown">
                  Nude Project Opens New Flagship Store in Barcelona
                </h3>
                <p className="text-sm text-nude-brown/60 mb-3">February 28, 2025</p>
                <p className="text-nude-brown/80 mb-4 line-clamp-2">
                  We're excited to announce the opening of our new flagship store in Barcelona, featuring an innovative
                  retail concept that blends physical and digital experiences.
                </p>
                <a href="#" className="inline-flex items-center text-sm font-medium text-nude-brown hover:underline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Press Release (PDF)
                </a>
              </div>
            </div>
          </section>  */}

          {/* Press Contact */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-nude-brown">Contact</h2>
            <div className="bg-white p-6 rounded-md">
              <p className="text-nude-brown/80 mb-4">
                For press inquiries,  additional information, please contact us
              </p>
              <div className="mb-4">
                <p className="text-nude-brown/80">
                  <a href="mailto:contact@etherealbd.com" className="hover:underline">
                    contact@etherealbd.com
                  </a>
                </p>
                <p className="text-nude-brown/80">+8801747236093</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-nude-brown">Social Media</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.instagram.com/ethereal.bd_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-nude-brown hover:underline"
                  >
                    Instagram <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61558455878124"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-nude-brown hover:underline"
                  >
                    Facebook <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/etherealbd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-nude-brown hover:underline"
                  >
                    LinkedIn <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
