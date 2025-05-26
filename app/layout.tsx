import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const ClashGrotesk = localFont({
  src: [
    {
      path: "./fonts/ClashGrotesk-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: "Etherealbd",
  description: "Discover the latest collections from Ethereal Project"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ClashGrotesk.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
