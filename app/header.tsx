"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingBag, Search, Menu } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"
import { CategoryNav } from "@/components/category-nav"
import { SearchModal } from "@/components/search-modal"
import { getAllProducts } from "@/lib/data"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const products = getAllProducts()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 border-b-[1.1px] bg-[#FFF7EB] border-[#271300] duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="w-full px-4 max-w-[1200px] mx-auto flex items-center justify-between h-16">
          {/* Mobile menu button - only visible on mobile */}
          <button
            className="md:hidden focus:outline-none text-nude-brown"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Center logo on mobile, left-aligned on desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:left-auto md:transform-none">
            <Link href="/" className="font-semibold text-lg text-nude-brown">
              <img src="/logo.svg" alt="" className="w-[90px]" />
            </Link>
          </div>

          {/* Navigation - hidden on mobile */}
          <nav className="hidden md:flex items-center gap-3 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/shop" className="text-sm hover:underline px-2 text-nude-brown">
              Shop
            </Link>
            <Link href="/category/tops" className="text-sm hover:underline px-2 text-nude-brown">
              Tops
            </Link>
            <Link href="/category/bottoms" className="text-sm hover:underline px-2 text-nude-brown">
              Bottoms
            </Link>
            <Link href="/category/denim" className="text-sm hover:underline px-2 text-nude-brown">
              Denim
            </Link>
            <Link href="/category/formal" className="text-sm hover:underline px-2 text-nude-brown">
              Formals
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center gap-3">
            <button aria-label="Search" className="text-nude-brown" onClick={() => setSearchModalOpen(true)}>
              <Search className="h-5 w-5" />
            </button>
            <button aria-label="Shopping bag" className="text-nude-brown">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      <div className="h-16"></div> {/* Spacer to account for fixed header */}
      {/* Category Navigation - only visible on mobile */}
      <CategoryNav />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} products={products} />
    </>
  )
}
