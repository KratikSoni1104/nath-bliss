"use client";

import {
  Hotel,
  Phone,
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#e6ded4] bg-[#2a2418] text-[#e6ded4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 font-playfair text-xl">
              <Hotel className="h-6 w-6 text-[#7f6d54]" />
              <span>NathBliss Hotels</span>
            </div>
            <p className="font-sans font-light text-sm leading-relaxed">
              Experience Rajasthan's heritage with modern luxury. Your gateway
              to spiritual and cultural enlightenment.
            </p>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-cinzel font-semibold text-lg mb-2">Contact</h4>
            <div className="space-y-3 font-sans font-light">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#7f6d54]" />
                <span>
                  Hotel Sudarshan near Moti Mahal,
                  <br />
                  Chopati, Nathdwara, Rajasthan 313301, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#7f6d54]" />
                <span>+91 2942 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#7f6d54]" />
                <span>contact@nathbliss.com</span>
              </div>
            </div>
          </motion.div>

          {/* Legal Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-cinzel font-semibold text-lg mb-2">
              Information
            </h4>
            <nav className="flex flex-col gap-3 font-sans font-light">
              <Link
                href="/about"
                className="hover:text-[#7f6d54] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/careers"
                className="hover:text-[#7f6d54] transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/blog"
                className="hover:text-[#7f6d54] transition-colors"
              >
                Travel Blog
              </Link>
              <Link
                href="/faq"
                className="hover:text-[#7f6d54] transition-colors"
              >
                FAQ
              </Link>
            </nav>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="font-cinzel font-semibold text-lg mb-2">
              Stay Updated
            </h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-[#e6ded4]/10 border border-[#7f6d54]/30 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#7f6d54]"
              />
              <button
                type="submit"
                className="bg-[#7f6d54] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#6b5d48] transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="flex gap-4 mt-4">
              <Facebook className="h-6 w-6 cursor-pointer hover:text-[#7f6d54] transition-colors" />
              <Instagram className="h-6 w-6 cursor-pointer hover:text-[#7f6d54] transition-colors" />
              <Twitter className="h-6 w-6 cursor-pointer hover:text-[#7f6d54] transition-colors" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#e6ded4]/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="font-sans font-light">
            © 2024 NathBliss Hotels. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-[#7f6d54] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#7f6d54] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
