import Link from "next/link"
import MobileMenu from "@/components/mobile-menu"
import { Search, ShoppingBag } from "lucide-react"

export default function Navbar() {
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "http://shop.etherealbd.com/", label: "Shop" },
        { href: "/contact", label: "Contact" }
      ]
    return(
            <nav className="flex items-center justify-between px-4 py-3 relative">
              <div className="flex items-center space-x-4">
                <MobileMenu links={navLinks} />
                <Link href="/" className="font-bold text-sm">
                  <img src="/assets/logo.svg" className="h-5 mb-2" alt=""/>
                </Link>
                <div className="hidden md:flex space-x-6">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-xs hover:underline">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-xs hidden sm:block hover:underline">BDT</button>
                <button className="text-xs hidden sm:block hover:underline">EN</button>
                <a href="http://shop.etherealbd.com/search"><Search className="w-4 h-4" /></a>
                <a href="http://shop.etherealbd.com/cart"><ShoppingBag className="w-4 h-4" /></a>
              </div>
            </nav>  
    )
}