"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Compass, MapPin } from "lucide-react";

export default function Explore() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 md:px-8 bg-sand border-t border-alabaster">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Story & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 space-y-6 lg:space-y-8 text-left"
        >
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-cinzel font-semibold text-gold tracking-widest block uppercase">
              Beyond Your Stay
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-charcoal font-playfair tracking-wide">
              Explore Nathdwara & Udaipur
            </h2>
          </div>

          <p className="text-base sm:text-lg text-charcoal/80 font-sans font-light leading-relaxed">
            From the sacred steps of the Shreenathji Temple to the majestic ramparts of Kumbhalgarh Fort and the tranquil waters of Udaipur, immerse yourself in Rajasthan's divine heritage. Let our local guides curate your spiritual journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              variant="custom"
              size="custom"
              className="border border-gold text-gold hover:bg-gold hover:text-white rounded-xl px-6 h-12 flex items-center justify-center font-cinzel text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer"
            >
              <Link href="/explore" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Discover Attractions
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Right Column: Framed Cinematic Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="bg-white/80 p-4 sm:p-5 rounded-[2rem] border border-alabaster shadow-md relative overflow-hidden group">
            {/* Aspect Ratio Video Container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-[1.5rem] overflow-hidden shadow-inner bg-charcoal">
              <video
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                autoPlay
                loop
                muted
                playsInline
                poster="/explore-poster.jpg"
              >
                <source src="/videos/udaipur-explore.mp4" type="video/mp4" />
              </video>

              {/* Elegant Overlay Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Curated Guide Badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-alabaster flex items-center gap-2 shadow-sm">
                <Compass className="h-4 w-4 text-gold" />
                <span className="text-xs font-cinzel font-semibold text-charcoal tracking-wide">
                  Curated local guide
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
