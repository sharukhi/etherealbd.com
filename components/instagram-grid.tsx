import Image from "next/image"
import Link from "next/link"

export default function InstagramGrid() {
  const instagramPosts = [
    { id: 1, image: "https://res.cloudinary.com/dwlaojqop/image/upload/1_vqwmle.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 2, image: "https://res.cloudinary.com/dwlaojqop/image/upload/2_bydoju.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 3, image: "https://res.cloudinary.com/dwlaojqop/image/upload/3_ev6wyf.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 4, image: "https://res.cloudinary.com/dwlaojqop/image/upload/4_rtdrxw.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 5, image: "https://res.cloudinary.com/dwlaojqop/image/upload/5_wpweyg.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 6, image: "https://res.cloudinary.com/dwlaojqop/image/upload/6_nwmlbb.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 7, image: "https://res.cloudinary.com/dwlaojqop/image/upload/7_hpxvjh.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 8, image: "https://res.cloudinary.com/dwlaojqop/image/upload/8_oyypzb.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 9, image: "https://res.cloudinary.com/dwlaojqop/image/upload/9_mdvify.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 10, image: "https://res.cloudinary.com/dwlaojqop/image/upload/10_fqjipi.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 11, image: "https://res.cloudinary.com/dwlaojqop/image/upload/11_fztpzn.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 12, image: "https://res.cloudinary.com/dwlaojqop/image/upload/12_blqqbp.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 13, image: "https://res.cloudinary.com/dwlaojqop/image/upload/13_lnluze.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 14, image: "https://res.cloudinary.com/dwlaojqop/image/upload/14_csiqmk.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 15, image: "https://res.cloudinary.com/dwlaojqop/image/upload/15_frhwc5.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 16, image: "https://res.cloudinary.com/dwlaojqop/image/upload/16_on16bq.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 17, image: "https://res.cloudinary.com/dwlaojqop/image/upload/17_eofjnj.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 18, image: "https://res.cloudinary.com/dwlaojqop/image/upload/18_oj3iff.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 19, image: "https://res.cloudinary.com/dwlaojqop/image/upload/19_lwxl95.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 20, image: "https://res.cloudinary.com/dwlaojqop/image/upload/20_dixqz6.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 21, image: "https://res.cloudinary.com/dwlaojqop/image/upload/21_rknsmu.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 22, image: "https://res.cloudinary.com/dwlaojqop/image/upload/22_twilfk.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 23, image: "https://res.cloudinary.com/dwlaojqop/image/upload/23_lcdb1r.webp", link: "https://www.instagram.com/ethereal.bd_official/" },
    { id: 24, image: "https://res.cloudinary.com/dwlaojqop/image/upload/24_mi0jq7.webp", link: "https://www.instagram.com/ethereal.bd_official/" }
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