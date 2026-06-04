"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import Link from "next/link";

const attractions = [
  {
    category: "Religious & Cultural Spots",
    places: [
      {
        name: "Shreenathji Temple",
        distance: "2 mins",
        description: "The main attraction, devoted to Lord Krishna.",
        image: "/images/explore/Shrinathji_Temple-Nathdwara_Rajsaman11.jpg",
      },
      {
        name: "Charbhuja Temple",
        distance: "28 km",
        description: "Ancient temple of Lord Vishnu.",
        image: "/images/explore/charbhuja-mewar.jpg",
      },
      {
        name: "Eklingji Temple",
        distance: "30 km",
        description: "A famous temple dedicated to Lord Shiva.",
        image: "/images/explore/eklingji-temple.jpg",
      },
      {
        name: "Ranakpur Jain Temple",
        distance: "90 km",
        description: "Renowned for intricate marble architecture.",
        image: "/images/explore/r-j-t.jpg",
      },
      {
        name: "Dwarkadhish Temple, Kankroli",
        distance: "18 km",
        description: "Located on the banks of Rajsamand Lake.",
        image: "/images/explore/kankroli-2.jpg",
      },
      {
        name: "Statue of Belief (Shiv Murti)",
        distance: "3 km",
        description: "World's tallest Shiva statue, a spiritual marvel.",
        image: "/images/explore/s-b.jpeg",
      },
      {
        name: "Shreenathji Gaushala",
        distance: "1.5 km",
        description: "Sacred cow shelter near Shreenathji Temple.",
        image: "/images/explore/gaushala.jpg",
      },
    ],
  },
  {
    category: "Lakes & Natural Spots",
    places: [
      {
        name: "Rajsamand Lake",
        distance: "17 km",
        description: "Serene lake with a marble dam and boating.",
        image: "/images/explore/raj-lake.jpg",
      },
      {
        name: "Pichola Lake, Udaipur",
        distance: "45 km",
        description: "Iconic lake with views of palaces.",
        image: "/images/explore/pichola.jpg",
      },
      {
        name: "Fateh Sagar Lake, Udaipur",
        distance: "50 km",
        description: "Surrounded by hills and gardens.",
        image: "/images/explore/fateh-sagar-lake.jpg",
      },
      {
        name: "Sajjangarh (Monsoon Palace)",
        distance: "55 km",
        description: "Offers stunning sunset views.",
        image: "/images/sajjan-garh.jpg",
      },
      {
        name: "BahuBali Hill",
        distance: "60 km",
        description: "Stunning sunset views.",
        image: "/images/explore/bahubali-hill.jpg",
      },
    ],
  },
  {
    category: "Forts & Heritage",
    places: [
      {
        name: "Kumbhalgarh Fort",
        distance: "65 km",
        description: "UNESCO World Heritage site with massive walls and scenic views.",
        image: "/images/explore/kumbhalgarh-fort.jpg",
      },
      {
        name: "Chittorgarh Fort",
        distance: "110 km",
        description: "Largest fort in India with historical significance.",
        image: "/images/explore/chittorgarh-fort.jpg",
      },
      {
        name: "Haldighati",
        distance: "40 km",
        description: "Famous battlefield of Maharana Pratap, with a museum.",
        image: "/images/explore/haldi-ghati.png",
      },
    ],
  },
  {
    category: "Offbeat or Nature Trails",
    places: [
      {
        name: "Iswal Mahadev Waterfall",
        distance: "35 km",
        description: "A hidden gem for a short trek or picnic.",
        image: "/images/explore/iswal-mahadev-waterfall.jpg",
      },
      {
        name: "Jaisamand Lake",
        distance: "90 km",
        description: "One of Asia's largest artificial lakes.",
        image: "/images/explore/jaisamand-lake.jpg",
      },
    ],
  },
];

export default function ExploreNathdwara() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredAttractions = selectedCategory
    ? attractions.filter((cat) => cat.category === selectedCategory)
    : attractions;

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 md:px-8 bg-sand">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs sm:text-sm font-cinzel font-semibold text-gold tracking-widest block">
            DISCOVER DIVINE RAJASTHAN
          </span>
          <h1 className="text-4xl md:text-5xl font-medium text-charcoal font-playfair tracking-wide">
            Explore Nathdwara & Beyond
          </h1>
          <p className="text-charcoal/80 font-sans font-light max-w-3xl mx-auto text-base sm:text-lg">
            Discover spiritual, cultural, and natural wonders near Nath Bliss Hotels
          </p>
          <div className="w-24 h-[1px] bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Custom Category Tabs */}
        <div className="flex justify-center border-b border-alabaster pb-2">
          <div className="flex gap-2 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth w-full md:w-auto py-2">
            {["All", ...attractions.map((cat) => cat.category)].map((categoryName) => {
              const isActive = (categoryName === "All" && selectedCategory === null) || selectedCategory === categoryName;
              return (
                <button
                  key={categoryName}
                  onClick={() => setSelectedCategory(categoryName === "All" ? null : categoryName)}
                  style={{ outline: "none", boxShadow: "none" }}
                  className={`relative py-3 px-4 font-cinzel text-xs tracking-wider whitespace-nowrap transition-all focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 select-none ${
                    isActive ? "text-gold font-semibold" : "text-charcoal/60 hover:text-charcoal"
                  }`}
                >
                  {categoryName === "All" ? "ALL SANCTUARIES" : categoryName.toUpperCase()}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Attractions Sections */}
        <div className="space-y-16 pt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory || "all"}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {filteredAttractions.map((category) => (
                <section key={category.category} className="space-y-8">
                  <div className="border-l-2 border-gold pl-4">
                    <h2 className="font-cinzel font-semibold text-xl md:text-2xl text-charcoal tracking-wider">
                      {category.category}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.places.map((place) => (
                      <div
                        key={place.name}
                        className="flex flex-col h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-alabaster overflow-hidden shadow-sm hover:shadow-md hover:border-gold/30 transition-all duration-300 group"
                      >
                        {/* Image Container */}
                        <div className="aspect-[16/10] relative overflow-hidden bg-alabaster">
                          <img
                            src={place.image}
                            alt={place.name}
                            className="object-cover w-full h-full transform group-hover:scale-105 transition-all duration-500"
                          />
                          {/* Distance overlay badge */}
                          <div className="absolute top-4 right-4 bg-charcoal/95 text-white px-3 py-1.5 rounded-full text-[10px] font-cinzel font-bold tracking-widest shadow-md">
                            {place.distance} AWAY
                          </div>
                        </div>

                        {/* Card Info */}
                        <div className="p-6 flex flex-col flex-grow space-y-4">
                          <div className="space-y-2">
                            <h3 className="font-playfair text-xl text-charcoal font-semibold leading-snug">
                              {place.name}
                            </h3>
                          </div>

                          <p className="text-charcoal/80 font-sans font-light text-sm sm:text-base leading-relaxed flex-grow">
                            {place.description}
                          </p>

                          {/* Directions trigger button */}
                          <div className="pt-2 mt-auto">
                            <Button
                              asChild
                              variant="custom"
                              size="custom"
                              className="w-full btn-primary py-3 font-cinzel tracking-widest text-[11px]"
                            >
                              <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                  place.name + " Nathdwara Rajasthan"
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Navigation className="h-3 w-3 mr-2" />
                                Get Directions
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Locate map section */}
        <div className="w-full h-[1px] bg-alabaster my-16" />

        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-cinzel font-semibold text-gold tracking-widest block">
              MAP INTERACTIVE
            </span>
            <h2 className="font-playfair text-3xl text-charcoal font-medium">
              Locate These Wonders
            </h2>
          </div>
          <div className="relative aspect-[16/10] sm:aspect-video rounded-2xl overflow-hidden border border-alabaster shadow-sm max-w-5xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d366.0429001482041!2d73.81710727038114!3d24.92824949165648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39680d15bd5e90af%3A0x83f460a09e37b91d!2sHotel%20Sudarshan!5e0!3m2!1sen!2sus!4v1746255087090!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </section>

        {/* Booking CTA Banner */}
        <div className="text-center pt-8">
          <Button
            asChild
            variant="custom"
            size="custom"
            className="btn-primary px-12 py-5 font-cinzel tracking-widest text-xs"
          >
            <Link href="/hotels">Book Your Spiritual Retreat</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
