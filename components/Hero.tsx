"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroImages = [
  "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
  "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
  "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full bg-[#2a2418]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#2a2418]/80 to-[#2a2418]/30" />
          <img
            src={heroImages[currentImage]}
            alt="NathBliss Hotels"
            className="w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.85) saturate(1.1)" }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4 max-w-6xl space-y-8"
        >
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl xl:text-7xl font-cinzel font-semibold text-[#f8f1e9]"
            >
              <span className="block text-lg md:text-xl font-sans font-normal text-[#7f6d54] tracking-widest mb-4">
                Experience True Hospitality
              </span>
              NathBliss Hotels
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl font-playfair text-[#e6ded4] max-w-2xl mx-auto"
            >
              Where Every Stay Becomes a Cherished Memory
            </motion.p>
          </div>

          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Button
              asChild
              className="bg-transparent hover:bg-[#7f6d54]/20 text-[#e6ded4] border-2 border-[#e6ded4] px-12 py-6 rounded-xl text-lg font-medium backdrop-blur-sm hover:scale-105 transition-all"
            >
              <Link href="/hotels">Explore Our Properties</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-[2px] h-8 bg-[#e6ded4]/50" />
            <div className="text-[#e6ded4] font-sans text-sm">Scroll</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
