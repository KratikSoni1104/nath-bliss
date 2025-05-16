"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Intro() {
  // Animation variants for staggered text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative py-20 sm:py-32 px-6 sm:px-10 md:px-16 bg-ivory-100"
      style={{ backgroundColor: "#f8f1e9" }}
    >
      {/* Subtle Gold Sheen */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f1e9] to-[#f8f1e9]/90 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.02, rotate: 0.3 }}
          className="md:w-2/5"
        >
          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Personalized guest room at Nath Bliss Hotels with Rajasthan-inspired decor"
              className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
        >
          <motion.h1
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold leading-tight text-gray-900"
          >
            Nath Bliss Hotels — India’s First Hyper-Personalized Hotel Chain
          </motion.h1>

          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl font-sans"
          >
            Starting at just{" "}
            <motion.span
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0 rgba(35, 214, 246, 0)",
                  "0 0 8px rgba(35, 214, 246, 0.3)",
                  "0 0 0 rgba(35, 214, 246, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block bg-[#23d6f6] text-white font-semibold px-3 py-1 rounded-md shadow-sm"
            >
              ₹849
            </motion.span>
            , we offer world-class hospitality tailored to you. Whether you’re
            visiting Shrinathji for devotion or seeking comfort, every stay is
            crafted for <span className="font-semibold">you</span>.
          </motion.p>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-base sm:text-lg md:text-xl italic text-gray-600 font-sans"
          >
            We don’t just give you a room — we give you{" "}
            <span className="underline decoration-[#32ffde] decoration-2">
              your
            </span>{" "}
            room.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-[#3a9bfc] font-sans text-white px-8 py-3 rounded-md shadow-md hover:shadow-lg hover:bg-[#2b8aec] transition-all duration-300"
              asChild
            >
              <Link href="/hotels">Book Now</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
 