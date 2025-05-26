"use client";

import { useState, useEffect } from "react"
import Link from "next/link"
import { MobileFooter } from "@/components/mobile-footer"

export default function Footer() {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [subscribeStatus, setSubscribeStatus] = useState<null | "success" | "error">(null);

  useEffect(() => {
    setEmail("");
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setSubscribeStatus("error");
      return;
    }

    try {
      const response = await fetch(
        "https://app.loops.so/api/newsletter-form/cm9bnal110zj9wweqafl9y7ve",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `email=${encodeURIComponent(email)}`,
        }
      );

      if (response.ok) {
        setSubscribeStatus("success");
        setEmail("");
      } else {
        setSubscribeStatus("error");
      }
    } catch (error) {
      setSubscribeStatus("error");
    }

    setTimeout(() => {
      setSubscribeStatus(null);
    }, 3000);
  };

  return (
    <footer className="border-t border-et-brown/10 bg-et-bg">
      <MobileFooter />

      <div className="hidden md:block py-12">
        <div className="w-full px-4 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-et-brown">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/category/tops" className="text-sm hover:underline text-et-brown/80">
                    Tops
                  </Link>
                </li>
                <li>
                  <Link href="/category/bottoms" className="text-sm hover:underline text-et-brown/80">
                    Bottoms
                  </Link>
                </li>
                <li>
                  <Link href="/category/denim" className="text-sm hover:underline text-et-brown/80">
                    Denim 
                  </Link>
                </li>
                <li>
                  <Link href="/category/formal" className="text-sm hover:underline text-et-brown/80">
                    Formal
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-et-brown">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm hover:underline text-et-brown/80">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm hover:underline text-et-brown/80">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm hover:underline text-et-brown/80">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/media-kit" className="text-sm hover:underline text-et-brown/80">
                    Media Kit
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-et-brown">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-sm hover:underline text-et-brown/80">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-sm hover:underline text-et-brown/80">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="/size-guide" className="text-sm hover:underline text-et-brown/80">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="http://shop.etherealbd.com/track" className="text-sm hover:underline text-et-brown/80">
                    Track Order
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-et-brown">Join Our Newsletter</h3>
              <p className="text-sm mb-4 text-et-brown/80">
                Stay updated with our latest collections and exclusive offers.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
                <div className="flex">
                  {email !== undefined && (
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="flex-1 px-4 py-2 border border-et-brown/20 rounded-l-md focus:outline-none focus:ring-1 focus:ring-et-brown bg-white text-et-brown"
                      required
                    />
                  )}
                  <button
                    type="submit"
                    className="px-4 py-2 bg-et-brown text-white rounded-r-md hover:bg-et-brown/90"
                  >
                    Subscribe
                  </button>
                </div>
                {subscribeStatus === "success" && (
                  <p className="text-sm text-green-600">Thanks for subscribing!</p>
                )}
                {subscribeStatus === "error" && (
                  <p className="text-sm text-red-600">Please enter a valid email address.</p>
                )}
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-et-brown/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-et-brown/70">
              &copy; {new Date().getFullYear()} Etherealbd. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="https://www.instagram.com/ethereal.bd_official/" className="text-et-brown/70 hover:text-et-brown">
                Instagram
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61558455878124" className="text-et-brown/70 hover:text-et-brown">
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}