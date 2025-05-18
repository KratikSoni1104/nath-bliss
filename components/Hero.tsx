"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const heroSlides = [
  {
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    alt: "NathBliss Luxury Suite",
    subheading: "Experience True Hospitality",
    heading: "NathBliss Hotels",
    description: "Where Every Stay Becomes a Cherished Memory",
  },
  {
    image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
    alt: "NathBliss Spiritual Retreat",
    subheading: "Embrace Serenity",
    heading: "Spiritual Escapes",
    description: "Find peace in Nathdwara’s sacred ambiance",
  },
  {
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    alt: "NathBliss Cultural Experience",
    subheading: "Discover Culture",
    heading: "Rajasthani Heritage",
    description: "Immerse in the vibrant traditions of Rajasthan",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const handlePrev = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  const handleDotClick = (index: number) => setCurrentSlide(index);

  return (
    <section className="relative h-screen w-full bg-[#2a2418] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#2a2418]/80 to-[#2a2418]/20 z-10" />
          <Image
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].alt}
            fill
            className="object-cover object-center"
            style={{ filter: "brightness(0.85) saturate(1.1)" }}
            priority={currentSlide === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            quality={85}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4 sm:px-6 max-w-6xl space-y-6 sm:space-y-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 sm:space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-cinzel font-semibold text-[#f8f1e9]">
                <span className="block text-base sm:text-lg lg:text-xl font-inter font-normal text-[#7f6d54] tracking-widest mb-2 sm:mb-4">
                  {heroSlides[currentSlide].subheading}
                </span>
                {heroSlides[currentSlide].heading}
              </h1>
              <p className="text-base sm:text-xl lg:text-2xl font-playfair text-[#e6ded4] max-w-xl sm:max-w-2xl mx-auto">
                {heroSlides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Button
              asChild
              className="bg-transparent hover:bg-[#7f6d54]/20 text-[#e6ded4] border-2 border-[#e6ded4] px-8 sm:px-12 py-5 sm:py-6 rounded-xl text-base sm:text-lg font-inter font-medium backdrop-blur-sm hover:scale-105 transition-all focus:ring-2 focus:ring-[#7f6d54]"
              aria-label="Explore NathBliss Hotels"
            >
              <Link href="/hotels">Explore Our Properties</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Navigation Controls */}
        <div className="absolute inset-x-4 sm:inset-x-8 top-1/2 -translate-y-1/2 flex justify-between z-30">
          <Button
            variant="ghost"
            size="icon"
            className="bg-[#2a2418]/50 text-[#e6ded4] hover:bg-[#7f6d54]/50"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-[#2a2418]/50 text-[#e6ded4] hover:bg-[#7f6d54]/50"
            onClick={handleNext}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Dots and Pause/Play */}
        <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
          {/* <div className="flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all",
                  currentSlide === index
                    ? "bg-[#e6ded4] scale-125"
                    : "bg-[#e6ded4]/50"
                )}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
          {/* <Button
            variant="ghost"
            size="icon"
            className="bg-[#2a2418]/50 text-[#e6ded4] hover:bg-[#7f6d54]/50"
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {isPaused ? (
              <Play className="h-5 w-5" />
            ) : (
              <Pause className="h-5 w-5" />
            )}
          </Button> */}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-[2px] h-6 bg-[#e6ded4]/70" />
            <div className="text-[#e6ded4] font-inter text-xs sm:text-sm">
              Scroll
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
