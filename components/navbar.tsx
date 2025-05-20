"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { phoneNumber } from "@/utils/data";

// Navigation routes
const routes = [
  { href: "/", label: "Home" },
  { href: "/hotels", label: "Hotels" },
  { href: "/services", label: "Services" },
  { href: "/explore", label: "Explore" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);


 const message = encodeURIComponent(
   "Jai Shree Krishna! I'd like to book a room at NathBliss. Please provide details on availability and pricing. Thank you!"
 );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60">
      <nav className="flex h-16 items-center justify-between pr-4 sm:pr-6 lg:pr-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={160}
            height={40}
            className="w-60 sm:w-64 sm:-ml-10 -ml-8"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 items-center justify-end space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "relative px-4 py-2 text-sm font-cinzel tracking-wide transition-colors hover:text-[#7f6d54]",
                pathname === route.href ? "text-[#2a2418]" : "text-[#4a453d]"
              )}
            >
              {pathname === route.href && (
                <motion.div
                  layoutId="navbar-active"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7f6d54]"
                  transition={{ duration: 0.3 }}
                />
              )}
              {route.label}
            </Link>
          ))}
          <Button
            asChild
            className="w-full font-cinzel text-base bg-transparent hover:bg-[#7f6d54]/10 text-[#6b5d48] border-2 border-[#6b5d48] py-4 rounded-lg hover:scale-105 transition-all"
            aria-label="Book a room via WhatsApp"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-max h-10"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-4 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-[#6b5d48] hover:bg-[#7f6d54]/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu (Static-Friendly) */}
        <div
          className={cn(
            "lg:hidden absolute top-16 left-0 w-full bg-white/95 border-t border-[#7f6d54]/20 transition-all",
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          )}
        >
          <div className="flex flex-col">
            {/* Mobile Menu Links */}
            <div className="flex flex-col gap-4 px-6 py-8">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "font-cinzel text-2xl tracking-wide py-3 transition-colors hover:bg-[#7f6d54]/10 rounded-md",
                    pathname === route.href
                      ? "text-[#7f6d48] border-l-4 border-[#7f6d54]"
                      : "text-[#4a453d]"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-6 border-t border-[#7f6d54]/20">
              <Button
                asChild
                className="w-full font-cinzel text-lg bg-transparent hover:bg-[#7f6d54]/10 text-[#6b5d48] border-2 border-[#6b5d48] py-6 rounded-lg transition-all"
                aria-label="Book a room via WhatsApp"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
