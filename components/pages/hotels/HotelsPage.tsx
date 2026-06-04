"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Wifi, Tv, Clock, Users, Wind, Utensils, ShieldCheck } from "lucide-react";
import { phoneNumber } from "@/utils/data";

const hotels = [
  {
    id: "sudarshan",
    name: "Sudarshan Hotel",
    tagline: "HERITAGE COMFORT",
    location: "Hotel Sudarshan near Moti Mahal, Chopati, Nathdwara",
    googleMapsUrl: "https://maps.google.com/?q=Hotel+Sudarshan+Nathdwara",
    description:
      "A boutique retreat combining heritage charm with modern leisure, situated in the heart of Nathdwara. Experience warm hospitality, pristine vegetarian cuisine, and curated comfort.",
    image: "/images/sudarshan-hotel.jpeg",
    amenities: ["AC Rooms", "Free High-Speed Wi-Fi", "24/7 Room Service", "Pure Veg Restaurant"],
    rooms: [
      {
        id: "deluxe-1",
        type: "Comfort Bliss Room",
        price: 1499,
        capacity: "2 Guests",
        description: "Perfectly designed for couples or solo pilgrims looking for standard comfort and modern facilities.",
        image: "/images/sudarshan-comfort-bliss.jpeg",
        amenities: ["Free Wi-Fi", "Room Service", "Smart TV", "Air Conditioning"],
      },
      {
        id: "suite-1",
        type: "Premium Bliss Room",
        price: 1999,
        capacity: "2 Guests",
        description: "Elegant suites featuring handcrafted wooden furniture, extra workspace, and premium bath amenities.",
        image: "/images/sudarshan-premium-bliss.jpeg",
        amenities: ["Free Wi-Fi", "Room Service", "Smart TV", "Air Conditioning", "Sofa Seating"],
      },
      {
        id: "suite-2",
        type: "Bliss's Family Room",
        price: 2499,
        capacity: "4 Guests",
        description: "Extra spacious sanctuary featuring two king-size beds and luxury linen for comfortable family retreats.",
        image: "/images/sudarshan-family-bliss.jpeg",
        amenities: ["Free Wi-Fi", "Room Service", "Smart TV", "Air Conditioning", "2 King Beds"],
      },
    ],
  },
  {
    id: "inn",
    name: "Sudarshan INN",
    tagline: "LUXURY RETREAT",
    location: "Near Shrinathji Temple, Nathdwara",
    googleMapsUrl: "https://maps.google.com/?q=Hotel+Sudarshan+Inn+Nathdwara",
    description:
      "Our premier signature property offering panoramic views of the city, premium suites, and state-of-the-art facilities designed for spiritual and business travelers.",
    image: "/images/sudarshan-inn-hotel.jpeg",
    amenities: ["Premium Suites", "Free High-Speed Wi-Fi", "Valet Parking", "24/7 Security"],
    rooms: [
      {
        id: "standard-1",
        type: "Comfort Bliss Room",
        price: 1999,
        capacity: "2 Guests",
        description: "Tastefully detailed spaces with cozy custom bedding, work desks, and beautiful street-view windows.",
        image: "/images/s-in-comfort-bliss.jpeg",
        amenities: ["Free Wi-Fi", "Room Service", "Smart TV", "Air Conditioning"],
      },
      {
        id: "deluxe-2",
        type: "Premium Bliss Room",
        price: 2499,
        capacity: "2 Guests",
        description: "Spacious quarters offering elevated city viewpoints, signature amenities, and premium sitting corners.",
        image: "/images/s-in-premium-bliss-room.jpeg",
        amenities: ["Free Wi-Fi", "Room Service", "Smart TV", "Air Conditioning", "Mini Fridge"],
      },
      {
        id: "deluxe-3",
        type: "Bliss's Family Room",
        price: 2999,
        capacity: "3-4 Guests",
        description: "Features one grand king-size bed and an adjoining single bed with custom heritage decorations.",
        image: "/images/s-in-family-bliss.jpeg",
        amenities: ["Free Wi-Fi", "Room Service", "Smart TV", "Air Conditioning", "Extra Bed Included"],
      },
    ],
  },
  {
    id: "shree",
    name: "Shreeji Dhaam",
    tagline: "PEACEFUL SANCTUARY",
    location: "Riverside Area, Bypass Road, Nathdwara",
    googleMapsUrl: "https://maps.google.com/?q=Shreeji+Dhaam+Nathdwara",
    description:
      "A peaceful budget sanctuary near the riverside, designed to connect pilgrims with serenity and simple, elegant comfort without exceeding constraints.",
    image: "/images/shreejee-dham.jpeg",
    amenities: ["Budget Friendly", "Free High-Speed Wi-Fi", "Spacious Balconies", "Temple Transit Support"],
    rooms: [
      {
        id: "deluxe-3",
        type: "Personalized Bliss Room",
        price: 849,
        capacity: "2 Guests",
        description: "Charming budget-friendly comfort with natural lighting, a private balcony, and essential modern services.",
        image: "/images/s-d-bliss-room.jpeg",
        amenities: ["Free Wi-Fi", "Room Service", "Smart TV", "Air Conditioning", "Private Balcony"],
      },
    ],
  },
];

export default function HotelsPage() {
  const [selectedHotelId, setSelectedHotelId] = useState(hotels[0].id);

  const activeHotel = hotels.find((hotel) => hotel.id === selectedHotelId) || hotels[0];

  return (
    <main className="min-h-screen py-16 px-4 md:px-8 bg-sand">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <span className="text-xs sm:text-sm font-cinzel font-semibold text-gold tracking-widest block">
            EXPERIENCE THE SACRED STAY
          </span>
          <h1 className="text-4xl md:text-5xl font-medium text-charcoal font-playfair tracking-wide">
            Our Premium Stays
          </h1>
          <div className="w-24 h-[1px] bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Custom Property Tabs */}
        <div className="flex justify-center border-b border-alabaster pb-2">
          <div className="grid grid-cols-3 w-full max-w-2xl md:flex md:w-auto gap-1 md:gap-8 justify-items-center">
            {hotels.map((hotel) => {
              const isActive = hotel.id === selectedHotelId;
              return (
                <button
                  key={hotel.id}
                  onClick={() => setSelectedHotelId(hotel.id)}
                  style={{ outline: "none", boxShadow: "none" }}
                  className={`relative w-full py-4 px-1 text-center font-cinzel text-[10px] sm:text-xs md:text-base tracking-widest transition-all outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 select-none ${
                    isActive ? "text-gold font-semibold" : "text-charcoal/60 hover:text-charcoal"
                  }`}
                >
                  {hotel.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Hotel Details Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeHotel.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8 items-start"
          >
            {/* Hotel Image Card */}
            <div className="relative group overflow-hidden rounded-2xl border border-alabaster aspect-[4/3] md:aspect-auto md:h-[480px] w-full shadow-sm">
              <img
                src={activeHotel.image}
                alt={activeHotel.name}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-xs font-cinzel font-semibold tracking-wider text-gold">
                  {activeHotel.tagline}
                </span>
                <h2 className="text-2xl sm:text-3xl font-playfair font-medium">
                  {activeHotel.name}
                </h2>
              </div>
            </div>

            {/* Hotel Meta Details */}
            <div className="flex flex-col justify-between bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-alabaster space-y-6 md:h-[480px] shadow-sm">
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-cinzel font-medium text-gold tracking-widest block">
                    PROPERTY PROFILE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-playfair text-charcoal font-semibold">
                    Luxury & Serenity Refined
                  </h3>
                </div>

                <p className="text-charcoal/80 font-sans font-light text-sm sm:text-base md:text-lg leading-relaxed">
                  {activeHotel.description}
                </p>

                {/* Google Maps link */}
                <div className="pt-2">
                  <a
                    href={activeHotel.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gold hover:text-charcoal font-sans text-xs sm:text-sm font-medium transition-colors"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    {activeHotel.location}
                  </a>
                </div>
              </div>

              {/* High-level specs */}
              <div className="border-t border-alabaster pt-6">
                <h4 className="text-xs font-cinzel font-semibold text-gold tracking-wider mb-4">
                  COMPLIMENTARY SERVICES
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {activeHotel.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2 text-charcoal/80 font-sans text-xs sm:text-sm font-light">
                      <ShieldCheck className="h-4 w-4 text-gold flex-shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Divider */}
        <div className="w-full h-[1px] bg-alabaster my-16" />

        {/* Room Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-cinzel font-semibold text-gold tracking-widest block">
              ACCOMMODATIONS
            </span>
            <h3 className="text-3xl font-playfair text-charcoal font-medium">
              Select Your Sanctuary
            </h3>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {activeHotel.rooms.map((room) => (
                <motion.div
                  key={room.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-alabaster overflow-hidden shadow-sm hover:shadow-md hover:border-gold/30 transition-all duration-300 group"
                >
                  {/* Image container */}
                  <div className="aspect-[16/10] relative overflow-hidden bg-alabaster">
                    <img
                      src={room.image}
                      alt={room.type}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-charcoal/90 text-white px-3 py-1.5 rounded-full text-xs font-cinzel font-bold tracking-widest shadow-md">
                      ₹{room.price} / NIGHT
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-cinzel text-gold tracking-widest font-semibold">
                        <span>DELUXE STAY</span>
                        <span className="flex items-center text-charcoal/70 font-sans tracking-normal font-light">
                          <Users className="h-3 w-3 mr-1 text-gold" />
                          {room.capacity}
                        </span>
                      </div>
                      <h4 className="font-playfair text-xl text-charcoal font-semibold">
                        {room.type}
                      </h4>
                    </div>

                    <p className="text-charcoal/80 font-sans font-light text-sm sm:text-base leading-relaxed flex-grow">
                      {room.description}
                    </p>

                    {/* Room Level Amenities / Badges */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {room.amenities.map((amenity) => (
                          <span
                            key={amenity}
                            className="bg-sand text-charcoal/80 text-[11px] font-sans font-light py-1 px-2.5 rounded-full border border-alabaster/70"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Book Now Button */}
                    <Button
                      asChild
                      variant="custom"
                      size="custom"
                      className="w-full btn-primary py-3.5 mt-4 font-cinzel tracking-widest text-xs"
                    >
                      <a
                        href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                          `Hi Nath Bliss, I want to book the ${room.type} at ${activeHotel.name}. Please share availability and today’s direct booking price.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Sanctuary
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
