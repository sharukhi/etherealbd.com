import type React from "react"
import type { Metadata } from "next"
import localFont from 'next/font/local'
import "./globals.css"
import AudioPlayer from "@/components/audio-player"

const ClashGrotesk = localFont({
  src: [
    {
      path: '../public/fonts/ClashGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashGrotesk-Extralight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashGrotesk-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashGrotesk-Semibold.woff2',
      weight: '600',
      style: 'normal',
    }
  ],
})

export const metadata: Metadata = {
  title: "Etherealbd - It's not just a piece of clothig",
  description: "Discover meticulously designed apparel that combines exceptional craftsmanship and unmatched quality."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={ClashGrotesk.className}>
        {children}
        <AudioPlayer />
      </body>
    </html>
  )
}
