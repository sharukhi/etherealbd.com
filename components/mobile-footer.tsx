"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus } from "lucide-react"

interface FooterSection {
  title: string
  links: { label: string; href: string }[]
}

export function MobileFooter() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const footerSections: FooterSection[] = [
    {
      title: "Brand",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "https://www.linkedin.com/company/etherealbd/" },
        { label: "Media Kit", href: "/media-kit" }
      ],
    },
    {
      title: "Boring Stuff",
      links: [
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Shipping & Returns", href: "/shipping" },
        { label: "Contact Us", href: "/contact" },
        { label: "Size Guide", href: "/size-guide" },
      ],
    },
  ]

  const toggleSection = (title: string) => {
    if (expandedSection === title) {
      setExpandedSection(null)
    } else {
      setExpandedSection(title)
    }
  }

  return (
    <div className="md:hidden text-et-brown">
      {/* Collapsible Sections */}
      {footerSections.map((section) => (
        <div key={section.title} className="border-t border-et-brown/10">
          <button
            className="w-full py-4 px-4 flex justify-between items-center text-left"
            onClick={() => toggleSection(section.title)}
          >
            <span className="font-medium text-et-brown">{section.title}</span>
            <Plus
              className={`h-5 w-5 transition-transform text-et-brown ${expandedSection === section.title ? "rotate-45" : ""}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedSection === section.title ? "max-h-60" : "max-h-0"
            }`}
          >
            <div className="px-4 pb-4 space-y-2">
              {section.links.map((link) => (
                <Link key={link.label} href={link.href} className="block text-sm py-1 text-et-brown/80">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Language & Currency */}
      <div className="border-t border-et-brown/10 py-4 px-4">
        <div className="flex items-center space-x-2 text-et-brown">
          <span>BD</span>
          <span>|</span>
          <span>BDT ৳</span>
          <span>|</span>
          <span>English</span>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-et-brown/10 py-6 px-4">
        <h3 className="font-medium text-lg mb-2 text-et-brown">Never Miss a Drop</h3>
        <p className="text-sm mb-4 text-et-brown/80">Sign up for our newsletter to get early access to new drops and exclusive deals.</p>
        <div className="flex">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 border border-et-brown/20 px-3 py-2 text-sm focus:outline-none bg-white text-et-brown"
          />
          <button className="bg-et-brown text-white px-4 py-2 text-sm">Join</button>
        </div>
      </div>

      {/* Brand Footer */}
      <div className="border-t border-et-brown/20 py-6 px-4 text-center text-sm">
        <Link href="/" className="inline-block text-et-brown">
          &copy; {new Date().getFullYear()} Etherealbd. All rights reserved.
        </Link>
      </div>
    </div>
  )
}
