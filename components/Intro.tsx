"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Intro() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.3, ease: [0.19, 1, 0.22, 1] },
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative py-16 sm:py-20 px-4 sm:px-6 bg-[#faf6f0]"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-[4/3] sm:aspect-[16/9] rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-lg"
        >
          <img
            src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
            alt="Nath Bliss Hotels"
            className="w-full h-full object-cover transform scale-[1.01]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/25" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8"
        >
          <motion.h1
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-[#2a2418] font-playfair"
          >
            <span className="block mb-3 text-base sm:text-lg font-sans font-semibold text-[#7f6d54] tracking-widest">
              Nath Bliss Hotels
            </span>
            India’s First Hyper-Personalized Hotel Chain
          </motion.h1>

          <motion.div className="space-y-4 sm:space-y-6">
            <motion.p
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              className="text-base sm:text-lg text-[#4a453d] leading-relaxed font-light font-sans"
            >
              Starting at just{" "}
              <span className="inline-block bg-[#ede8e0] text-[#7f6d54] px-2 sm:px-3 py-1 rounded-lg font-medium border border-[#d4ccc0]">
                ₹849
              </span>
              , we offer world-class hospitality tailored to you. Whether you're
              visiting Shrinathji for devotion or seeking comfort, every stay is
              crafted for{" "}
              <span className="font-medium text-[#7f6d54]">you</span>.
            </motion.p>

            <motion.p
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              className="text-[#7f6d54] italic text-base sm:text-lg border-l-4 border-[#d4ccc0] pl-3 sm:pl-4 py-1 sm:py-2"
            >
              We don’t just give you a room — we give you{" "}
              <span className="font-medium">your</span> room.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              <Button
                asChild
                className="bg-transparent hover:bg-[#7f6d54]/10 text-[#7f6d54] border-2 border-[#7f6d54] px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-medium text-base sm:text-lg transition-all duration-300 hover:scale-[1.02] shadow-none"
              >
                <Link href="/hotels">
                  <span className="relative z-10">Book Now</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
