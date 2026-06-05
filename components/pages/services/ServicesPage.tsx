"use client";

import { motion } from "framer-motion";
import {
  Car,
  Map,
  Compass,
  Camera,
  Coffee,
  Wifi,
  Bed,
  Utensils,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Explore from "@/components/Explore";

const amenities = [
  {
    icon: Car,
    name: "Taxi Service",
    description: "24/7 transportation services",
  },
  { icon: Map, name: "Temple Guide", description: "Expert spiritual guidance" },
  {
    icon: Compass,
    name: "Tour Planning",
    description: "Customized travel itineraries",
  },
  {
    icon: Camera,
    name: "Photography",
    description: "Professional photo services",
  },
  { icon: Coffee, name: "Room Service", description: "24-hour in-room dining" },
  { icon: Wifi, name: "Free Wi-Fi", description: "High-speed internet access" },
  { icon: Bed, name: "Housekeeping", description: "Daily cleaning service" },
  {
    icon: Utensils,
    name: "In Room Breakfast",
    description: "Multi-cuisine dining",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 md:px-8 bg-sand">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal font-playfair">
            <span className="block text-base sm:text-lg font-cinzel font-semibold text-gold tracking-widest mb-3">
              Beyond Accommodation
            </span>
            Our Services & Amenities
          </h1>
        </motion.div>

        {/* Room Types */}
        <section className="mb-16 sm:mb-20">
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Budget Bliss Rooms",
                price: "₹849+",
                description:
                  "Minimalist and peaceful, designed for personalization",
                image: "/images/s-d-bliss-room.jpeg",
              },
              {
                title: "Comfort Bliss Rooms",
                price: "₹1299+",
                description: "Enhanced comfort with tailored amenities",
                image: "/images/sudarshan-comfort-bliss.jpeg",
              },
              {
                title: "Premium Suites",
                price: "₹1799+",
                description: "Luxury suites with fully customized experiences",
                image: "/images/s-in-premium-bliss-room.jpeg",
              },
            ].map((room, index) => (
              <motion.div
                key={room.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white/70 group backdrop-blur-sm rounded-2xl border border-alabaster overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[4/3] sm:aspect-video relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="object-cover group-hover:scale-110 transition-all duration-300 w-full h-full transform origin-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/25" />
                </div>
                <div className="p-4 sm:p-6 space-y-4 flex flex-col flex-grow">
                  <div className="space-y-4">
                    <h2 className="text-lg sm:text-xl font-cinzel font-semibold text-charcoal">
                      {room.title}
                    </h2>
                    <p className="text-gold font-sans font-medium">
                      {room.price}
                    </p>
                    <p
                      className="text-charcoal/80 font-sans font-light text-sm sm:text-base leading-relaxed min-h-[4rem]"
                      style={{ flexGrow: 1 }}
                    >
                      {room.description}
                    </p>
                  </div>
                  <Button
                    asChild
                    variant="custom"
                    size="custom"
                    className="w-full btn-secondary mt-auto py-3 text-base"
                  >
                    <Link href="/hotels">Book Now</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Amenities */}
        <section className="mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl sm:text-2xl font-cinzel font-semibold text-gold text-center mb-8 sm:mb-12"
          >
            Hotel Amenities
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-alabaster text-center hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <amenity.icon className="w-6 sm:w-8 h-6 sm:h-8 text-gold" />
                </div>
                <h3 className="font-cinzel font-semibold text-charcoal text-base sm:text-lg mb-2">
                  {amenity.name}
                </h3>
                <p className="text-charcoal/80 font-sans font-light text-xs sm:text-sm">
                  {amenity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Explore CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Explore />
        </motion.div>
      </motion.div>
    </main>
  );
}
