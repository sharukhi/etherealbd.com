"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  // Handle animation and prevent scrolling when menu is open
  useEffect(() => {
    const menuElement = menuRef.current
    const overlayElement = overlayRef.current

    if (isOpen) {
      // Prevent scrolling
      document.body.style.overflow = "hidden"

      // Animate in
      if (menuElement) {
        // Force a reflow to ensure the initial state is applied before transitioning
        void menuElement.offsetWidth
        menuElement.classList.remove("translate-x-full")
        menuElement.classList.add("translate-x-0")
      }

      if (overlayElement) {
        overlayElement.classList.remove("opacity-0")
        overlayElement.classList.add("opacity-100")
      }
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleClose = () => {
    const menuElement = menuRef.current
    const overlayElement = overlayRef.current

    if (menuElement) {
      menuElement.classList.remove("translate-x-0")
      menuElement.classList.add("translate-x-full")
    }

    if (overlayElement) {
      overlayElement.classList.remove("opacity-100")
      overlayElement.classList.add("opacity-0")
    }

    // Wait for animation to complete before actually closing
    setTimeout(() => {
      onClose()
    }, 300)
  }

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-et-brown/30 z-50 opacity-0 transition-opacity duration-300 ease-in-out"
      onClick={handleClose}
    >
      <div
        ref={menuRef}
        className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-et-bg overflow-y-auto transform translate-x-full transition-transform duration-300 ease-in-out"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-8">
            <button onClick={handleClose} className="focus:outline-none text-et-brown" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="space-y-6">
            <Link
              href="/category/tops"
              className="block text-2xl font-medium py-2 border-b border-et-brown/10 text-et-brown"
              onClick={handleClose}
            >
             Tops
            </Link>
            <Link
              href="/category/bottoms"
              className="block text-2xl font-medium py-2 border-b border-et-brown/10 text-et-brown"
              onClick={handleClose}
            >
              Bottoms
            </Link>
            <Link
              href="/category/denim"
              className="block text-2xl font-medium py-2 border-b border-et-brown/10 text-et-brown"
              onClick={handleClose}
            >
              Denim
            </Link>
            <Link
              href="/category/formals"
              className="block text-2xl font-medium py-2 border-b border-et-brown/10 text-et-brown"
              onClick={handleClose}
            >
              Formals 
            </Link>
          </nav>

          <div className="mt-12 space-y-6">
            <Link href="http://shop.etherealbd.com/account" className="block text-lg py-2 text-et-brown" onClick={handleClose}>
              Account
            </Link>
            <Link href="http://shop.etherealbd.com/signup" className="block text-lg py-2 text-et-brown" onClick={handleClose}>
              Sign Up
            </Link>
            <Link href="/contact" className="block text-lg py-2 text-et-brown" onClick={handleClose}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
