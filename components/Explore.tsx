"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin } from "lucide-react";

function Explore() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden"
    >
      {/* Video Container with Parallax Effect */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/explore-poster.jpg"
        >
          <source src="/videos/udaipur-explore.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a2418]/80 to-[#7f6d54]/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.h2
            variants={{ hidden: { y: 30 }, visible: { y: 0 } }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium text-white font-playfair"
          >
            <span className="block text-lg font-cinzel font-semibold text-[#e6ded4] tracking-widest mb-4">
              Beyond Your Stay
            </span>
            Explore Nathdwara's Wonders
          </motion.h2>

          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="text-lg md:text-xl text-[#e6ded4] max-w-2xl mx-auto font-sans leading-relaxed"
          >
            From the sacred Shreenathji Temple to the majestic Kumbhalgarh Fort,
            discover unforgettable experiences curated by our local experts.
          </motion.p>

          <motion.div
            variants={{ hidden: { scale: 0.95 }, visible: { scale: 1 } }}
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <Button
              asChild
              className="bg-transparent hover:bg-[#7f6d54]/20 text-[#e6ded4] border-2 border-[#e6ded4] px-8 py-6 rounded-xl font-medium text-lg backdrop-blur-sm hover:shadow-lg transition-all"
            >
              <Link href="/explore" className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Discover Attractions
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce w-8 h-14 rounded-3xl border-2 border-[#e6ded4] flex justify-center">
          <div className="w-1 h-3 bg-[#e6ded4] rounded-full mt-2" />
        </div>
      </div>
    </motion.section>
  );
}

export default Explore;
