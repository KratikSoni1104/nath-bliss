import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin } from "lucide-react";

function Explore() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto h-[600px] sm:h-[700px] pb-20 pt-[12rem] sm:pt-[30rem] px-4 text-center relative"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/nb-v.mp4" type="video/mp4" />
      </video>
      {/* <div className="absolute inset-0 bg-black/40 z-0" /> */}
      <motion.div className="relative z-10 space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
        >
          Explore Nathdwara's Wonders
        </motion.h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 text-white">
          From the sacred Shreenathji Temple to the majestic Kumbhalgarh Fort,
          discover unforgettable day trips and cultural experiences near Nath
          Bliss Hotels.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="lg"
            asChild
            // variant="outline"
            // className="text-white border-white hover:bg-white/20"
          >
            <Link href="/explore">
              <MapPin className="mr-2 h-4 w-4" />
              Discover Attractions
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Explore;
