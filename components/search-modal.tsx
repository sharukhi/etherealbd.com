"use client"

import { useState, useEffect, useRef } from "react"
import { X, Search, Loader2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/lib/data"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  products: Product[]
}

export function SearchModal({ isOpen, onClose, products }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  // Handle search
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([])
      return
    }

    setIsSearching(true)

    // Simulate search delay
    const timer = setTimeout(() => {
      const results = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setSearchResults(results)
      setIsSearching(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchTerm, products])

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-et-brown/30 z-50 flex items-start justify-center pt-20 px-4">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[70vh] overflow-hidden flex flex-col"
      >
        <div className="p-4 border-b border-et-brown/10 flex items-center">
          <Search className="h-5 w-5 text-et-brown/50 mr-2" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for products..."
            className="flex-1 outline-none text-et-brown"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={onClose} className="ml-2 text-et-brown/50 hover:text-et-brown">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1">
          {isSearching ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 text-et-brown/50 animate-spin" />
            </div>
          ) : searchTerm && searchResults.length === 0 ? (
            <div className="p-6 text-center text-et-brown/70">No products found for "{searchTerm}"</div>
          ) : searchResults.length > 0 ? (
            <div className="p-2">
              {searchResults.map((product) => (
                <Link
                  key={product.id}
                  href={`https://shop.etherealbd.com/product/${product.slug}`}
                  onClick={onClose}
                  className="flex items-center p-2 hover:bg-et-bg rounded-md transition-colors"
                >
                  <div className="relative h-16 w-12 bg-white rounded overflow-hidden mr-3">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-et-brown">{product.name}</h3>
                    <p className="text-xs text-et-brown/70">{product.category}</p>
                    <p className="text-sm font-medium text-et-brown">৳{product.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
