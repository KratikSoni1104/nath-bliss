"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const attractions = [
  {
    category: "Religious & Cultural Spots",
    places: [
      {
        name: "Shreenathji Temple",
        distance: "Nathdwara",
        description: "The main attraction, devoted to Lord Krishna.",
        image:
          "https://images.pexels.com/photos/5432783/pexels-photo-5432783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Charbhuja Temple",
        distance: "28 km",
        description: "Ancient temple of Lord Vishnu.",
        image:
          "https://images.pexels.com/photos/6172771/pexels-photo-6172771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Eklingji Temple",
        distance: "30 km",
        description: "A famous temple dedicated to Lord Shiva.",
        image:
          "https://images.unsplash.com/photo-1618151313441-bd5d8ac42a31?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Ranakpur Jain Temple",
        distance: "90 km",
        description: "Renowned for intricate marble architecture.",
        image:
          "https://images.pexels.com/photos/5273644/pexels-photo-5273644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Dwarkadhish Temple, Kankroli",
        distance: "18 km",
        description: "Located on the banks of Rajsamand Lake.",
        image:
          "https://images.pexels.com/photos/5432782/pexels-photo-5432782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
        image:
          "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Pichola Lake, Udaipur",
        distance: "45 km",
        description: "Iconic lake with views of palaces.",
        image:
          "https://images.unsplash.com/photo-1588593380038-1b3576e171f3?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Fateh Sagar Lake, Udaipur",
        distance: "50 km",
        description: "Surrounded by hills and gardens.",
        image:
          "https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Sajjangarh (Monsoon Palace)",
        distance: "55 km",
        description: "Offers stunning sunset views.",
        image:
        //   "https://images.unsplash.com/photo-1603267681386-cb674dfbabab?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "/images/sajjan-garh.jpg"
      },
    ],
  },
  {
    category: "Forts & Heritage",
    places: [
      {
        name: "Kumbhalgarh Fort",
        distance: "65 km",
        description:
          "UNESCO World Heritage site with massive walls and scenic views.",
        image:
          "https://images.pexels.com/photos/1704090/pexels-photo-1704090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Chittorgarh Fort",
        distance: "110 km",
        description: "Largest fort in India with historical significance.",
        image:
          "https://images.unsplash.com/photo-1618151313550-508c39e61808?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Haldighati",
        distance: "40 km",
        description: "Famous battlefield of Maharana Pratap, with a museum.",
        image:
          "https://images.pexels.com/photos/614494/pexels-photo-614494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
        image:
          "https://images.pexels.com/photos/207048/pexels-photo-207048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Jaisamand Lake",
        distance: "90 km",
        description: "One of Asia’s largest artificial lakes.",
        image:
          "https://images.unsplash.com/photo-1593693396933-7ca98e3c61af?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    <main className="min-h-screen py-12 px-4 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Explore Nathdwara & Beyond
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground text-center mb-12">
          Discover spiritual, cultural, and natural wonders near Nath Bliss
          Hotels, perfect for day trips or extended adventures.
        </p>

        {/* Filter Bar */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 mb-8">
          <Select
            value={selectedCategory || "All"}
            onValueChange={(value) =>
              setSelectedCategory(value === "All" ? null : value)
            }
          >
            <SelectTrigger className="w-full sm:w-64 mx-auto">
              <SelectValue placeholder="Filter by Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Attractions</SelectItem>
              {attractions.map((cat) => (
                <SelectItem key={cat.category} value={cat.category}>
                  {cat.category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Attractions */}
        {filteredAttractions.map((category, catIndex) => (
          <motion.section
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.places.map((place, placeIndex) => (
                <motion.div
                  key={place.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: placeIndex * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{place.name}</CardTitle>
                      <CardDescription>{place.distance}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{place.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* Map Embed */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
            Find These Attractions
          </h2>
          <div className="relative aspect-[4/3] sm:aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d366.0429001482041!2d73.81710727038114!3d24.92824949165648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39680d15bd5e90af%3A0x83f460a09e37b91d!2sHotel%20Sudarshan!5e0!3m2!1sen!2sus!4v1746255087090!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Plan Your Visit with Nath Bliss
          </h2>
          <Button size="lg" asChild>
            <Link href="/hotels">Book Your Stay</Link>
          </Button>
        </motion.section>
      </motion.div>
    </main>
  );
}
