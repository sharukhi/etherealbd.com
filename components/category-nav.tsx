import Link from "next/link"
import { ChevronRight } from "lucide-react"

const categories = [
  { name: "Shop All", href: "/shop" },
  { name: "Tops", href: "/category/tops" },
  { name: "Bottoms", href: "/category/bottoms" },
  { name: "Denim", href: "/category/bottoms" },
  { name: "Formals", href: "/category/tops" },
]

export function CategoryNav() {
  return (
    <div className="sticky top-16 z-30 bg-[#FFF7EB] border-b-[1.1px] border-[#271300] md:hidden w-full">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex whitespace-nowrap py-3 px-4 min-w-full">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="text-sm px-3 first:pl-0 border-r border-nude-brown/20 last:border-r-0 last:pr-0 text-nude-brown"
            >
              {category.name}
            </Link>
          ))}
          <div className="pl-2 flex items-center">
            <ChevronRight className="h-4 w-4 text-nude-brown/60" />
          </div>
        </div>
      </div>
    </div>
  )
}
