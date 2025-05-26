"use client"

import { type ReactNode, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

interface GSAPProviderProps {
  children: ReactNode
}

export function GSAPProvider({ children }: GSAPProviderProps) {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, useGSAP)

    // Page transition animation
    const pageTransition = () => {
      const tl = gsap.timeline()

      tl.to("body", {
        opacity: 0,
        duration: 0.2,
        ease: "power1.out",
      })

      tl.to("body", {
        opacity: 1,
        duration: 0.3,
        ease: "power1.in",
      })

      return tl
    }

    // Run page transition on initial load
    pageTransition()

    // Smooth scroll setup
    gsap.config({
      nullTargetWarn: false,
    })

    // Clean up ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
      ScrollTrigger.clearMatchMedia()
    }
  }, [])

  return <>{children}</>
}
