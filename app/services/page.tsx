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
  MapPin,
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
  { icon: Utensils, name: "Restaurant", description: "Multi-cuisine dining" },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-16 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Services</h1>

        {/* Room Types */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Room Types</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Budget Bliss Rooms</CardTitle>
                <CardDescription>Starting at ₹849+</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Minimalist and peaceful, designed for personalization.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Comfort Bliss Rooms</CardTitle>
                <CardDescription>Starting at ₹1299+</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Enhanced comfort with tailored amenities.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Premium Personalized Suites</CardTitle>
                <CardDescription>Starting at ₹1799+</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Luxury suites with fully customized experiences.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hotel Amenities */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Hotel Amenities</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-card rounded-lg"
              >
                <amenity.icon className="w-8 h-8 mb-4" />
                <h3 className="font-semibold mb-2">{amenity.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {amenity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Explore Nathdwara CTA */}
        <Explore />
      </motion.div>
    </main>
  );
}
