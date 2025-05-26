"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  // Initialize with false on server
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return

    // Create the media query
    const media = window.matchMedia(query)

    // Set the initial value
    setMatches(media.matches)

    // Callback for media query changes
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches)
    }

    // Add listener
    if (media.addEventListener) {
      media.addEventListener("change", listener)
    } else {
      // Fallback for older browsers
      media.addListener(listener)
    }

    // Clean up
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", listener)
      } else {
        // Fallback for older browsers
        media.removeListener(listener)
      }
    }
  }, [query])

  return matches
}
