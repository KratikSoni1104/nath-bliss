"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin } from "lucide-react";

const hotels = [
  {
    id: "sudarshan",
    name: "Sudarshan Hotel",
    location: "Downtown Business District",
    description:
      "A boutique experience combining modern comfort with traditional hospitality, perfect for both business and leisure.",
    image:
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rooms: [
      {
        id: "deluxe-1",
        type: "Comfort Bliss Room",
        price: 1499,
        description: "Personalized comfortable room with essential amenities",
        image:
          // "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "/images/sudarshan-comfort-bliss.jpeg",
        amenities: ["Free Wi-Fi", "Room Service", "Smart TV"],
      },
      {
        id: "suite-1",
        type: "Premium Bliss Room",
        price: 1999,
        description:
          "Personalized room with Italic wooden furnitures, king-size bed, and modern amenities",
        image:
          // "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "/images/sudarshan-premium-bliss.jpeg",
        amenities: ["Free Wi-Fi", "Room Service", "Smart TV"],
      },
      {
        id: "suite-2",
        type: "Bliss's Family Room",
        price: 2499,
        description:
          "Spacious room with 2 king size-beds, with extra spacious washroom, and modern amenities.",
        image:
          // "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "/images/sudarshan-family-bliss.jpeg",
        amenities: ["Free Wi-Fi", "Room Service", "Smart TV"],
      },
    ],
  },
  {
    id: "inn",
    name: "Sudarshan INN",
    location: "Historic District",
    description:
      "Experience luxury at its finest with our signature property featuring panoramic city views and world-class amenities.",
    image:
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rooms: [
      {
        id: "standard-1",
        type: "Comfort Bliss Room",
        price: 1999,
        description: "Personalized Comfortable room with essential amenities.",
        image: "/images/s-in-comfort-bliss.jpeg",
        amenities: ["Free Wi-Fi", "Room Service", "Smart TV"],
      },
      {
        id: "deluxe-2",
        type: "Premium Bliss Room",
        price: 2499,
        description:
          "SPersonalized Spacious room with city view, king-size bed, and modern amenities",
        image: "/images/s-in-premium-bliss-room.jpeg",
        // "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        amenities: ["Free Wi-Fi", "Room Service", "Smart TV"],
      },
      {
        id: "deluxe-3",
        type: "Bliss's Family Room",
        price: 2999,
        description:
          "Personalized Spacious room with one king size bed accompanying single bed with premium furnishings.",
        image: "/images/s-in-family-bliss.jpeg",
        // "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        amenities: ["Free Wi-Fi", "Room Service", "Smart TV"],
      },
    ],
  },
  {
    id: "shree",
    name: "Shreeji Dhaam",
    location: "Riverside Area",
    description:
      "Your sanctuary of peace and luxury in budget, offering an unforgettable stay with personalized service and elegant accommodations.",
    image:
      "https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rooms: [
      {
        id: "deluxe-3",
        type: "Personalized Bliss Room",
        price: 849,
        description:
          "Personalized Spacious room with city view, open balcony, and modern amenities.",
        image: "/images/s-d-bliss-room.jpeg",
        // "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        amenities: ["Free Wi-Fi", "Room Service", "Smart TV"],
      },
      // {
      //   id: "suite-2",
      //   type: "Luxury Suite",
      //   price: 449,
      //   description: "Premium suite with panoramic river views",
      //   image:
      //     "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      //   amenities: [
      //     "Free Wi-Fi",
      //     "Mini Bar",
      //     "Room Service",
      //     "Smart TV",
      //     "Jacuzzi",
      //   ],
      // },
    ],
  },
];

export default function HotelsPage() {
  const [selectedHotel, setSelectedHotel] = useState<string | null>(null);
  const [showRooms, setShowRooms] = useState<string | null>(null);

  const filteredHotels = selectedHotel
    ? hotels.filter((hotel) => hotel.id === selectedHotel)
    : hotels;

  return (
    <main className="min-h-screen py-16 px-4 md:px-8 bg-[#faf6f0]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-medium text-[#2a2418] font-playfair mb-12"
        >
          <span className="block text-lg font-cinzel font-semibold text-[#7f6d54] tracking-widest mb-3">
            Curated Properties
          </span>
          Our Luxury Hotels
        </motion.h1>

        {/* Filters */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-16 bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-[#e6ded4] shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#4a453d]">
                Select Hotel
              </label>
              <Select
                value={selectedHotel || undefined}
                onValueChange={setSelectedHotel}
              >
                <SelectTrigger className="border-[#e6ded4] focus:ring-[#7f6d54]">
                  <SelectValue placeholder="All Hotels" />
                </SelectTrigger>
                <SelectContent className="border-[#e6ded4]">
                  <SelectItem value="all" className="focus:bg-[#faf6f0]">
                    All Hotels
                  </SelectItem>
                  {hotels.map((hotel) => (
                    <SelectItem
                      key={hotel.id}
                      value={hotel.id}
                      className="focus:bg-[#faf6f0]"
                    >
                      {hotel.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>


          </div>
        </motion.div> */}

        {/* Other filter */}
        {/* Filters */}
        {/* <div className="mb-12 bg-card p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Select Hotel</label>
              <Select
                value={selectedHotel || undefined}
                onValueChange={setSelectedHotel}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Hotels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Hotels</SelectItem>{" "}

                  {hotels.map((hotel) => (
                    <SelectItem key={hotel.id} value={hotel.id}>
                      {hotel.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Check-in Date</label>
              <Input type="date" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Check-out Date</label>
              <Input type="date" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Guests</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select guests" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div> */}

        {/* Hotel Listings */}
        <div className="space-y-8">
          {filteredHotels.map((hotel) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl border border-[#e6ded4] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="aspect-video relative overflow-hidden"
                >
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="object-cover w-full h-full transform origin-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
                </motion.div>

                <div className="p-8 space-y-6">
                  <div>
                    <h2 className="text-2xl font-medium text-[#2a2418] font-playfair">
                      {hotel.name}
                    </h2>
                    <p className="text-[#7f6d54] font-sans mt-2">
                      <MapPin className="inline h-4 w-4 mr-2" />
                      {hotel.location}
                    </p>
                  </div>
                  <p className="text-[#4a453d] font-sans leading-relaxed font-light">
                    {hotel.description}
                  </p>
                  <Button
                    onClick={() =>
                      setShowRooms(showRooms === hotel.id ? null : hotel.id)
                    }
                    className="bg-transparent hover:bg-[#7f6d54]/10 text-[#6b5d48] border-2 border-[#6b5d48] px-8 py-6 rounded-xl font-medium hover:scale-[1.02] transition-all"
                  >
                    {showRooms === hotel.id ? "Hide Rooms" : "View Rooms"}
                  </Button>
                </div>
              </div>

              {/* Rooms Section */}
              {showRooms === hotel.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-t border-[#e6ded4]"
                >
                  <div className="p-8 space-y-8">
                    <h3 className="text-xl font-cinzel font-semibold text-[#7f6d54]">
                      Available Rooms & Suites
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {hotel.rooms.map((room) => (
                        <motion.div
                          key={room.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <Card className="border-[#e6ded4] bg-white/50 backdrop-blur-sm overflow-hidden hover:shadow-md transition-shadow">
                            <div className="aspect-video relative overflow-hidden">
                              <img
                                src={room.image}
                                alt={room.type}
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <CardHeader>
                              <CardTitle className="font-playfair text-[#2a2418]">
                                {room.type}
                              </CardTitle>
                              <CardDescription className="text-[#7f6d54]">
                                ₹{room.price}/night
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <p className="text-[#4a453d] font-sans font-light leading-relaxed">
                                {room.description}
                              </p>
                              <div className="space-y-2">
                                <h4 className="font-cinzel font-semibold text-[#7f6d54]">
                                  Amenities
                                </h4>
                                <ul className="grid grid-cols-2 gap-2">
                                  {room.amenities.map((amenity) => (
                                    <li
                                      key={amenity}
                                      className="flex items-center text-[#4a453d] font-sans font-light"
                                    >
                                      <span className="text-[#7f6d54] mr-2">
                                        •
                                      </span>
                                      {amenity}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <Button
                                asChild
                                className="w-full bg-[#6b5d48] hover:bg-[#5d5040] text-white py-6 rounded-xl font-medium transition-all"
                              >
                                <Link href="/booking">Book Now</Link>
                              </Button>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
