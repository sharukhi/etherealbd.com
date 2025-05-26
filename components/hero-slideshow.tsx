"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useMediaQuery } from "@/hooks/use-media-query"
import type { HeroImage } from "@/lib/data"

interface HeroSlideshowProps {
  images: HeroImage[]
  mobileImages?: HeroImage[]
  interval?: number
  title: string
  ctaText?: string
  ctaLink?: string
}

export function HeroSlideshow({
  images,
  mobileImages,
  interval = 5000,
  title,
  ctaText,
  ctaLink = "/new",
}: HeroSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Use mobile images if provided and on mobile, otherwise use desktop images
  const slideshowImages = isMobile && mobileImages ? mobileImages : images

  // Limit to 3 images
  const limitedImages = slideshowImages.slice(0, 3)

  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (!isAnimating) {
        const nextSlide = currentSlide === limitedImages.length - 1 ? 0 : currentSlide + 1
        animateToSlide(nextSlide)
      }
    }, interval)

    return () => clearInterval(slideInterval)
  }, [currentSlide, limitedImages.length, interval, isAnimating])

  // Handle slide transition
  const animateToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return

    setIsAnimating(true)
    setCurrentSlide(index)

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 500) // Match this with the CSS transition duration
  }

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh]">
      <div className="h-full overflow-hidden">
        {/* Slides container */}
        <div className="relative h-full">
          {limitedImages.map((image, index) => (
            <div
              key={`slide-${index}`}
              className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out ${
                index === currentSlide
                  ? "z-10 translate-x-0"
                  : index < currentSlide || (currentSlide === 0 && index === limitedImages.length - 1)
                    ? "z-0 -translate-x-full"
                    : "z-0 translate-x-full"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>



        {/* Slide indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
          {limitedImages.map((_, index) => (
            <button
              key={index}
              onClick={() => animateToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? "bg-white w-4" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
