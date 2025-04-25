import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

interface Product {
  id: number
  name: string
  price: string
  image: string
  link: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, price, image } = product

  // Split the name to get the product line and model
  const nameParts = name.split(" - ")
  const productLine = nameParts[0]
  const model = nameParts[1] || ""

  return (
    <div className="group">
      <Link href={`http://shop.etherealbd.com/product/${product.link}`} className="block relative">
        <div className="mb-3 relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={400}
            height={500}
            className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="text-sm font-medium mb-1">{productLine}</h3>
        {model && <div className="text-xs mb-1">{model}</div>}
        <div className="text-sm">&#2547; {price}</div>
      </Link>
    </div>
  )
}
