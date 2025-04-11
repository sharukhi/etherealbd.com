import Image from "next/image"
import Link from "next/link"

export default function InstagramGrid() {
  const instagramPosts = [
    { id: 1, image: "/instagram/1.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 2, image: "/instagram/2.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 3, image: "/instagram/3.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 4, image: "/instagram/4.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 5, image: "/instagram/5.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 6, image: "/instagram/6.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 7, image: "/instagram/7.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 8, image: "/instagram/8.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 9, image: "/instagram/9.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 10, image: "/instagram/10.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 11, image: "/instagram/11.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 12, image: "/instagram/12.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 13, image: "/instagram/13.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 14, image: "/instagram/14.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 15, image: "/instagram/15.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 16, image: "/instagram/16.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 17, image: "/instagram/17.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 18, image: "/instagram/18.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 19, image: "/instagram/19.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 20, image: "/instagram/20.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 21, image: "/instagram/21.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 22, image: "/instagram/22.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 23, image: "/instagram/23.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 24, image: "/instagram/24.webp", link: "https://www.instagram.com/ethereal.bd_official/" }
  ]

  return (
    <div className="grid grid-cols-3 md:grid-cols-12 gap-1 relative">
      {instagramPosts.map((post) => (
        <Link
          key={post.id}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-square overflow-hidden group"
        >
          <Image
            src={post.image || "/placeholder.svg"}
            alt={`Instagram post ${post.id}`}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </Link>
      ))}
    </div>
  )
}