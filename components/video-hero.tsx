"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function VideoHero() {
  const [isMobile, setIsMobile] = useState(false)
  const leftVideoRef = useRef<HTMLVideoElement>(null)
  const rightVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Video - THE ETHEREAL */}

      <div className="relative flex flex-col justify-center items-center overflow-hidden">
        <video
          ref={leftVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/ethereal-poster.jpg"
        >
          <source src="/videos/1.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <h1 className="text-3xl md:text-4xl font-medium text-white z-10">THE ETHEREAL</h1>
      </div>


      {/* Right Video - NEW ARRIVAL */}
  
      <div className="relative bg-[#8d6e65] flex flex-col justify-center items-center overflow-hidden">
        <video
          ref={rightVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/2.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <h2 className="text-3xl md:text-4xl font-medium text-white z-10">NEW ARRIVAL</h2>
        
      </div>

    </div>
  )
}
