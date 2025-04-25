import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="relative h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Image - THE ETHEREAL */}
      <div className="relative flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dwlaojqop/image/upload/home_1_afnmta.webp"
            alt="The Ethereal"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>
        <Link href="http://shop.etherealbd.com/">
          <h1 className="text-3xl md:text-4xl font-medium text-white z-10 cursor-pointer  relative">
            THE ETHEREAL
          </h1>
        </Link>
      </div>

      {/* Right Image - NEW ARRIVAL */}
      <div className="relative bg-[#8d6e65] flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dwlaojqop/image/upload/home_2_wfunda.webp"
            alt="New Arrival"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>
        <Link href="http://shop.etherealbd.com/">
          <h2 className="text-3xl md:text-4xl font-medium text-white z-10 cursor-pointer  relative">
            NEW ARRIVAL
          </h2>
        </Link>
      </div>
    </div>
  )
}