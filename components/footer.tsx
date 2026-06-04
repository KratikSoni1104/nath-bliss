"use client";

import { Hotel, Phone, MapPin, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#e2ddd5] bg-[#f5f2eb] text-[#3d362a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 font-playfair text-xl text-[#2a2418]">
              <Hotel className="h-6 w-6 text-[#8a6f43]" />
              <span className="tracking-wide font-medium">NathBliss Hotels</span>
            </div>
            <p className="font-sans font-light text-sm leading-relaxed text-[#5c5243]">
              Experience Rajasthan's sacred heritage with tailored hospitality. Connecting pilgrims with tranquility across our premium Nathdwara destinations.
            </p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-cinzel font-semibold text-xs tracking-widest text-[#8a6f43]">
              EXPLORE
            </h4>
            <nav className="flex flex-col gap-2.5 font-sans font-light text-sm text-[#5c5243]">
              <Link href="/" className="hover:text-[#2a2418] transition-colors">
                Home
              </Link>
              <Link href="/hotels" className="hover:text-[#2a2418] transition-colors">
                Our Stays
              </Link>
              <Link href="/explore" className="hover:text-[#2a2418] transition-colors">
                Local Guide
              </Link>
              <Link href="/about" className="hover:text-[#2a2418] transition-colors">
                Our Story
              </Link>
              <Link href="/contact" className="hover:text-[#2a2418] transition-colors">
                Contact & Support
              </Link>
            </nav>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-cinzel font-semibold text-xs tracking-widest text-[#8a6f43]">
              DESK INFO
            </h4>
            <div className="space-y-3 font-sans font-light text-sm text-[#5c5243]">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#8a6f43] mt-1 flex-shrink-0" />
                <span>
                  Hotel Sudarshan near Moti Mahal,
                  <br />
                  Chopati, Nathdwara, Rajasthan 313301
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#8a6f43] flex-shrink-0" />
                <span>+91 93523 85552</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#8a6f43] flex-shrink-0" />
                <span>shreenathbliss@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Reservations Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="font-cinzel font-semibold text-xs tracking-widest text-[#8a6f43]">
              RESERVATIONS
            </h4>
            <p className="font-sans font-light text-xs leading-relaxed text-[#5c5243]">
              Planning your visit to Nathdwara? Book directly with us for custom requests and the best rates.
            </p>
            
            <div className="pt-1">
              <Link
                href="/#booking-assistant"
                className="inline-flex w-full justify-center items-center bg-[#2a2418] hover:bg-[#8a6f43] text-[#fbfaf7] font-cinzel font-semibold text-xs tracking-widest py-3 rounded-xl transition-all shadow-sm"
              >
                Book Your Stay
              </Link>
            </div>

            <div className="space-y-2 pt-2">
              <p className="text-[10px] font-cinzel text-[#8a6f43] tracking-widest font-semibold">CONNECT DIRECTLY</p>
              <div className="flex gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/nathblisshotels?igsh=bGcxcm11djljMzR1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2.5 bg-[#2a2418]/5 hover:bg-[#2a2418]/10 hover:text-[#8a6f43] rounded-xl transition-all text-[#2a2418]"
                >
                  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" width="18" height="18">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>

                {/* WhatsApp Support */}
                <a
                  href="https://wa.me/919352385552"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Support"
                  className="p-2.5 bg-[#2a2418]/5 hover:bg-[#2a2418]/10 hover:text-emerald-600 rounded-xl transition-all text-[#2a2418]"
                >
                  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" width="18" height="18">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.794.002-2.599-1.01-5.048-2.853-6.892-1.842-1.843-4.287-2.857-6.887-2.859-5.404 0-9.802 4.393-9.806 9.797-.001 1.77.462 3.498 1.345 5.021l-.98 3.585 3.67-.962zm11.365-7.114c-.3-.15-1.772-.875-2.046-.975-.276-.1-.476-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-3.037-1.514-4.72-3.896-5.507-5.25-.195-.336-.02-.518.147-.686.15-.15.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-1.072-2.587-.384-.926-.78-.8-1.072-.816-.275-.015-.59-.015-.903-.015-.313 0-.823.117-1.254.585-.43.467-1.64 1.6-1.64 3.9s1.67 4.514 1.895 4.814c.225.3 3.3 5.037 8.01 7.07 1.12.483 1.996.772 2.68 1.002 1.122.357 2.14.3 2.95.18.9-.133 2.772-1.132 3.17-2.229.4-.1.4-.824.274-1.025-.124-.2-.475-.35-.775-.5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#e2ddd5] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#5c5243]">
          <div className="font-sans font-light">
            © {new Date().getFullYear()} NathBliss Hotels. All rights reserved.
          </div>
          <div className="flex gap-6 font-sans font-light">
            <Link
              href="/privacy"
              className="hover:text-[#2a2418] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#2a2418] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
