"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/data"

export function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`https://shop.etherealbd.com/product/${product.slug}`} className="group block">
      <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="relative aspect-[3/4] mb-2  overflow-hidden">
          {/* Primary Image */}
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            fill
            className={`object-cover transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
          />

          {/* Hover Image */}
          {product.images[1] && (
            <Image
              src={product.images[1] || "/placeholder.svg"}
              alt={`${product.name} alternate view`}
              fill
              className={`object-cover transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
            />
          )}
        </div>

        <h3 className="text-sm font-medium text-et-brown">{product.name}</h3>
        <p className="text-sm text-et-brown/70 mb-1">{product.category}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-et-brown">৳{product.price.toFixed(2)}</span>
        </div>
      </div>
    </Link>
  )
}
