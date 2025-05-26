"use client"

import { useState } from "react"
import Image from "next/image"

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/5] bg-white overflow-hidden transition-opacity duration-300">
        <Image src={mainImage || "/placeholder.svg"} alt={productName} fill className="object-cover" priority />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className={`relative aspect-square bg-white transition-all duration-200 ${
              mainImage === image ? "ring-2 ring-et-brown" : "hover:opacity-80"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${productName} view ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
