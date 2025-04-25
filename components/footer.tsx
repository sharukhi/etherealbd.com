"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Facebook, Instagram, Send } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState<string | undefined>(undefined); // Initialize as undefined to avoid SSR mismatch
  const [subscribeStatus, setSubscribeStatus] = useState<null | "success" | "error">(null);

  useEffect(() => {
    // Initialize email state on the client side
    setEmail("");
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
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

    // Reset status after 3 seconds
    setTimeout(() => {
      setSubscribeStatus(null);
    }, 3000);
  };

  return (
    <footer className="bg-black text-white">
      {/* Links and Newsletter Section */}
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Explore Section */}
          <div>
            <h3 className="text-sm font-medium uppercase mb-4">EXPLORE</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-xs text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="http://shop.etherealbd.com/" className="text-xs text-gray-400 hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="text-sm font-medium uppercase mb-4">SUBSCRIBE</h3>
            <p className="text-xs text-gray-400 mb-4">
              Subscribe to our newsletter for exclusive updates, new releases, and special offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
              <div className="flex">
                {email !== undefined && ( // Render input only after email is initialized
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="bg-gray-900 text-white text-xs px-4 py-2 flex-grow border border-gray-800 focus:outline-none focus:border-gray-600"
                    required
                  />
                )}
                <button
                  type="submit"
                  className="bg-gray-700 text-white px-3 py-2 hover:bg-gray-600 transition-colors flex items-center justify-center"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {subscribeStatus === "success" && (
                <p className="text-xs text-green-500 mt-2">Thanks for subscribing!</p>
              )}
              {subscribeStatus === "error" && (
                <p className="text-xs text-red-500 mt-2">Please enter a valid email address.</p>
              )}
            </form>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-sm font-medium mb-4">Stay in Touch</h3>
            <p className="text-xs text-gray-400 mb-4">
              Want the latest updates, new gear, and tips? <br />
              Follow us and be part of the Ethereal community.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=61558455878124" target="_blank" aria-label="Facebook">
                <Facebook className="w-4 h-4 text-gray-400 hover:text-white" />
              </Link>
              <Link href="https://www.instagram.com/ethereal.bd_official" target="_blank" aria-label="Instagram">
                <Instagram className="w-4 h-4 text-gray-400 hover:text-white" />
              </Link>
              <Link href="https://wa.me/+8801747236093" target="_blank" aria-label="Whatsapp">
                <svg className="w-4 h-4 text-gray-400 hover:text-white" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 py-6 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-[10px] text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear}, ETHEREALBD
          </div>
          <div className="flex space-x-6">
            <Link href="/tac" className="text-[10px] text-gray-500 hover:text-gray-400">
              Terms and conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}