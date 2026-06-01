"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Users, Building2, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { phoneNumber } from "@/utils/data";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Explore from "@/components/Explore";
import Intro from "@/components/Intro";
import HeroSection from "@/components/Hero";

const hotels = [
  {
    name: "Sudarshan Hotel",
    description:
      "A boutique experience combining modern comfort with traditional hospitality, perfect for both business and leisure.",
    image:
      // "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "/images/sudarshan-hotel.jpeg",
  },
  {
    name: "Sudarshan INN",
    description:
      "Experience luxury at its finest with our signature property featuring panoramic city views and world-class amenities.",
    image: "/images/sudarshan-inn-hotel.jpeg",
    // image:
    //   "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Shreeji Dhaam",
    description:
      "Your sanctuary of peace and luxury in budget, offering an unforgettable stay with personalized service and elegant accommodations.",
    image:
      // "https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "/images/shreejee-dham.jpeg",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Traveler",
    content:
      "The attention to detail and exceptional service at NathBliss made my business trip feel like a luxury vacation.",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Michael Chen",
    role: "Family Vacation",
    content:
      "Our family stay was incredible. The staff went above and beyond to ensure our comfort and entertainment.",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Emma Thompson",
    role: "Luxury Enthusiast",
    content:
      "NathBliss hotels define luxury. Every stay has been nothing short of extraordinary.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const features = [
  "Guest Profile Memory: Return guests are remembered and preferences auto-applied",
  "Flexible Add-ons: Flowers, décor, spiritual requests, family needs",
  "Pre-Arrival Connect: WhatsApp or Call survey 24 hrs before check-in",
  "Real-Time Requests: In-room QR or App to request anything, instantly",
];

const roomTypes = [
  {
    title: "Budget Bliss Rooms",
    price: "₹849+",
    description: "Minimalist and peaceful, designed for personalization.",
    image: "/images/s-d-bliss-room.jpeg",
    // "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Comfort Bliss Rooms",
    price: "₹1299+",
    description: "Enhanced comfort with tailored amenities.",
    image: "/images/sudarshan-comfort-bliss.jpeg",
    // "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Premium Personalized Suites",
    price: "₹1799+",
    description: "Luxury suites with fully customized experiences.",
    image: "/images/s-in-premium-bliss-room.jpeg",
    // "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function HomePage() {
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);
  const [guests, setGuests] = useState("2 Adults");
  const [roomNeed, setRoomNeed] = useState("Family Room");

  const bookingMessage = useMemo(() => {
    const formattedCheckIn = checkIn ? `Check-in: ${format(checkIn, "yyyy-MM-dd")}.` : "";
    const formattedCheckOut = checkOut ? `Check-out: ${format(checkOut, "yyyy-MM-dd")}.` : "";
    return `Hi Nath Bliss, I want a stay in Nathdwara.${formattedCheckIn ? ` ${formattedCheckIn}` : ""}${formattedCheckOut ? ` ${formattedCheckOut}` : ""} Guests: ${guests}. Need: ${roomNeed}. Please share best rooms and today’s direct booking price.`;
  }, [checkIn, checkOut, guests, roomNeed]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Booking Form / Direct Booking Assistant Section */}
      <section
        id="booking-assistant"
        className="py-12 px-4 sm:px-6 bg-[#faf6f0] border-b border-[#e6ded4] scroll-mt-20"
      >
        <Card className="p-6 bg-white border-[#e6ded4] shadow-md rounded-2xl max-w-5xl mx-auto text-[#2a2418]">
          <div className="mb-6">
            <h3 className="text-sm font-cinzel font-semibold text-[#7f6d54] tracking-widest uppercase mb-1">
              Direct Booking Assistant
            </h3>
            <p className="text-xs text-[#4a453d] font-sans">
              Choose your dates and room details to get a custom recommendation on WhatsApp
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* Check-in Date */}
            <div className="space-y-2 flex flex-col">
              <label className="text-xs font-semibold text-[#2a2418] flex items-center gap-1.5">
                <CalendarIcon className="h-3.5 w-3.5 text-[#7f6d54]" /> Check-in
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full border-[#e6ded4] focus:ring-[#7f6d54] h-11 bg-white text-stone-900 justify-start text-left font-normal rounded-xl px-3 hover:bg-[#faf6f0] transition-colors",
                      !checkIn && "text-stone-400"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-[#7f6d54] shrink-0" />
                    {checkIn ? format(checkIn, "PPP") : <span>Pick date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 border-[#e6ded4] bg-white z-50 text-stone-950" align="start">
                  <div className="bg-white text-stone-950 rounded-md">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={(date) => {
                        setCheckIn(date);
                        // If check-out is selected and is before or equal to the new check-in date, reset check-out
                        if (date && checkOut && checkOut <= date) {
                          setCheckOut(undefined);
                        }
                      }}
                      disabled={(date) => {
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        return date < today;
                      }}
                      initialFocus
                      className="bg-white text-stone-950"
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            
            {/* Check-out Date */}
            <div className="space-y-2 flex flex-col">
              <label className="text-xs font-semibold text-[#2a2418] flex items-center gap-1.5">
                <CalendarIcon className="h-3.5 w-3.5 text-[#7f6d54]" /> Check-out
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full border-[#e6ded4] focus:ring-[#7f6d54] h-11 bg-white text-stone-900 justify-start text-left font-normal rounded-xl px-3 hover:bg-[#faf6f0] transition-colors",
                      !checkOut && "text-stone-400"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-[#7f6d54] shrink-0" />
                    {checkOut ? format(checkOut, "PPP") : <span>Pick date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 border-[#e6ded4] bg-white z-50 text-stone-950" align="start">
                  <div className="bg-white text-stone-950 rounded-md">
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      disabled={(date) => {
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        // Checkout must be at least the day after check-in, or today if check-in is not selected yet
                        const minDate = checkIn ? new Date(checkIn.getTime() + 24 * 60 * 60 * 1000) : today;
                        minDate.setHours(0, 0, 0, 0);
                        return date < minDate;
                      }}
                      initialFocus
                      className="bg-white text-stone-950"
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            
            {/* Guests Selection */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#2a2418] flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-[#7f6d54]" /> Guests
              </label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="border-[#e6ded4] focus:ring-[#7f6d54] h-11 bg-white text-stone-950 font-medium">
                  <SelectValue placeholder="Select guests" />
                </SelectTrigger>
                <SelectContent className="border-[#e6ded4] bg-white text-stone-950">
                  <SelectItem value="2 Adults" className="text-stone-950 focus:text-stone-950 hover:bg-[#faf6f0] focus:bg-[#faf6f0] cursor-pointer">2 Adults</SelectItem>
                  <SelectItem value="2 Adults + 1 Child" className="text-stone-950 focus:text-stone-950 hover:bg-[#faf6f0] focus:bg-[#faf6f0] cursor-pointer">2 Adults + 1 Child</SelectItem>
                  <SelectItem value="Family 4+" className="text-stone-950 focus:text-stone-950 hover:bg-[#faf6f0] focus:bg-[#faf6f0] cursor-pointer">Family 4+</SelectItem>
                  <SelectItem value="Group / Event" className="text-stone-950 focus:text-stone-950 hover:bg-[#faf6f0] focus:bg-[#faf6f0] cursor-pointer">Group / Event</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Room Need Selection */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#2a2418] flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5 text-[#7f6d54]" /> Room Need
              </label>
              <Select value={roomNeed} onValueChange={setRoomNeed}>
                <SelectTrigger className="border-[#e6ded4] focus:ring-[#7f6d54] h-11 bg-white text-stone-950 font-medium">
                  <SelectValue placeholder="Select room need" />
                </SelectTrigger>
                <SelectContent className="border-[#e6ded4] bg-white text-stone-950">
                  <SelectItem value="Family Room" className="text-stone-950 focus:text-stone-950 hover:bg-[#faf6f0] focus:bg-[#faf6f0] cursor-pointer">Family Room</SelectItem>
                  <SelectItem value="Budget Room" className="text-stone-950 focus:text-stone-950 hover:bg-[#faf6f0] focus:bg-[#faf6f0] cursor-pointer">Budget Room</SelectItem>
                  <SelectItem value="Premium Room" className="text-stone-950 focus:text-stone-950 hover:bg-[#faf6f0] focus:bg-[#faf6f0] cursor-pointer">Premium Room</SelectItem>
                  <SelectItem value="Hall + Rooms" className="text-stone-950 focus:text-stone-950 hover:bg-[#faf6f0] focus:bg-[#faf6f0] cursor-pointer">Hall + Rooms</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-[#e6ded4] flex flex-col sm:flex-row gap-4 items-center justify-between">
            <p className="text-xs text-[#7f6d54] font-medium text-center sm:text-left">
              ★ Direct support · Instant confirmation · Family-first services
            </p>
            <div className="flex gap-2 w-full sm:w-auto">
              <Button
                asChild
                className="flex-1 sm:flex-none bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <a
                  href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(bookingMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" /> Get best room on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Intro Section */}
      <Intro />

      {/* Personalization Service Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative py-16 px-4 sm:px-6 bg-white" // Changed to white background
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="lg:w-1/2 space-y-8 px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-medium text-[#2a2418] font-playfair">
                  <span className="block text-lg font-sans font-semibold text-[#7f6d54] tracking-widest mb-4">
                    Included in Every Stay 
                  </span>
                  Hyper-Personalized Service
                </h2>

                <p className="text-lg text-[#4a453d] font-light leading-relaxed">
                  While others treat customization as luxury,
                  <br className="hidden sm:block" /> we consider it fundamental.
                </p>

                <div className="space-y-1">
                  <p className="text-xl font-medium text-[#6b5d48]">
                    Your Needs, Our Standard
                  </p>
                  <div className="h-[2px] bg-[#e6ded4] w-24 mt-2" />
                </div>
              </motion.div>
            </div>

            {/* Features Grid */}
            <div className="lg:w-1/2 space-y-6">
              <div className="grid gap-4 sm:gap-5">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="p-5 bg-[#faf6f0] rounded-xl border border-[#e6ded4] shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-[#ede8e0] flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#7f6d54]" />
                        </div>
                      </div>
                      <p className="text-[#4a453d] leading-relaxed font-light font-sans">
                        {item}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center space-y-6 mt-8"
              >
                <p className="text-lg text-[#6b5d48] font-medium">
                  Experience personalized hospitality
                  <br />
                  <span className="text-[#4a453d] font-light">
                    starting at just ₹849/night
                  </span>
                </p>
                <Button
                  asChild
                  className="bg-[#6b5d48] hover:bg-[#5d5040] text-white px-8 py-6 rounded-xl font-medium text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  <Link href="/hotels">Customize My Stay</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative py-16 px-4 sm:px-6 bg-[#faf6f0]" // Alternating background
      >
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-[#2a2418] font-playfair">
              <span className="block text-lg font-cinzel font-semibold text-[#7f6d54] tracking-widest mb-3">
                Curated Experiences
              </span>
              Our Services
            </h2>
            <p className="text-lg text-[#4a453d] font-light max-w-2xl mx-auto font-sans">
              Experience comfort and luxury tailored to your needs
            </p>
          </motion.div>

          {/* Room Types */}
          <div className="grid md:grid-cols-3 gap-6">
            {roomTypes.map((room, index) => (
              <motion.div
                key={room.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white/70 group backdrop-blur-sm rounded-2xl border border-[#e6ded4] overflow-hidden hover:shadow-md transition-shadow group flex flex-col"
              >
                <div className="aspect-[4/3] sm:aspect-video relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="object-cover group-hover:scale-110 transition-all duration-300 w-full h-full transform origin-center"
                    // whileHover={{
                    //   scale: 1.1,
                    //   transition: { duration: 0.4, ease: "easeOut" },
                    // }}
                    // style={{ transition: "transform 0.4s ease-out" }}
                    // initial={{ scale: 1 }}
                    // animate={{ scale: 1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/25" />
                </div>
                <div className="p-4 sm:p-6 space-y-4 flex flex-col flex-grow">
                  <div className="space-y-4">
                    <h2 className="text-lg sm:text-xl font-cinzel font-semibold text-[#2a2418]">
                      {room.title}
                    </h2>
                    <p className="text-[#7f6d54] font-sans font-medium">
                      {room.price}
                    </p>
                    <p
                      className="text-[#4a453d] font-sans font-light text-sm sm:text-base leading-relaxed min-h-[4rem]"
                      style={{ flexGrow: 1 }}
                    >
                      {room.description}
                    </p>
                  </div>
                  <Button
                    asChild
                    className="w-full cursor-pointer bg-transparent hover:bg-[#7f6d54]/10 text-[#7f6d54] border-2 border-[#7f6d54] px-6 py-4 rounded-xl font-medium text-base transition-all duration-300 hover:scale-[1.02] shadow-none mt-auto"
                  >
                    <Link href="/hotels">Book Now</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Travel Services */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center space-y-4"
            >
              <h3 className="text-2xl font-medium text-[#2a2418] font-playfair">
                Spiritual & Travel Services
              </h3>
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  {
                    title: "Taxi Service",
                    description: "Reliable transportation at your convenience",
                  },
                  {
                    title: "Temple Guide",
                    description:
                      "Expert guidance for Shreenathiji Temple visits",
                  },
                  {
                    title: "Spiritual Tours",
                    description:
                      "Visit sacred sites including Udaipur, Kumbhalgarh, and more",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 bg-white/70 backdrop-blur-sm border-[#e6ded4] hover:shadow-md transition-shadow h-full">
                      <h4 className="text-lg font-cinzel font-semibold text-[#7f6d54] mb-3">
                        {service.title}
                      </h4>
                      <p className="text-[#4a453d] font-light font-sans leading-relaxed">
                        {service.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.98 }}
              whileInView={{ scale: 1 }}
              className="text-center"
            >
              <Button
                asChild
                className="bg-[#6b5d48] hover:bg-[#5d5040] text-white px-8 py-6 rounded-xl font-medium text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl font-sans"
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Hotels */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative py-16 px-4 sm:px-6 !bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {" "}
          {/* Consistent max width with intro */}
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-[#2a2418] font-playfair">
              <span className="block text-lg font-cinzel font-semibold text-[#7f6d54] tracking-widest mb-3">
                Exclusive Collection
              </span>
              Our Luxury Properties
            </h2>
          </motion.div>
          {/* Hotels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel, index) => (
              <motion.div
                key={hotel.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="h-full overflow-hidden border-[#e6ded4] hover:shadow-lg transition-shadow group bg-white">
                  {/* Image Container with Enhanced Hover */}
                  <div className="aspect-video relative overflow-hidden">
                    <motion.img
                      src={hotel.image}
                      alt={hotel.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-all duration-300  transform origin-center"
                      // whileHover={{
                      //   scale: 1.05,
                      //   transition: { duration: 0.4, ease: "easeOut" },
                      // }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/20" />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-5">
                    <div>
                      <h3 className="text-xl font-semibold text-[#2a2418] font-playfair mb-2">
                        {hotel.name}
                      </h3>
                      <p className="text-[#4a453d] font-light font-sans leading-relaxed">
                        {hotel.description}
                      </p>
                    </div>

                    {/* Updated Button Style */}
                    <Button
                      asChild
                      className="w-full bg-transparent hover:bg-[#6b5d48]/10 text-[#6b5d48] border-2 border-[#6b5d48] px-8 py-5 rounded-xl font-medium text-base transition-all duration-300 hover:scale-[1.02] shadow-none font-sans"
                    >
                      <Link
                        href={`/hotels?property=${encodeURIComponent(
                          hotel.name
                        )}`}
                      >
                        View Rooms
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative py-16 px-4 sm:px-6 bg-[#faf6f0]"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center space-y-4 mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-[#2a2418] font-playfair">
              <span className="block text-lg font-cinzel font-semibold text-[#7f6d54] tracking-widest mb-3">
                Voices of Experience
              </span>
              What Our Guests Say
            </h2>
          </motion.div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                  >
                    <Card className="border-[#e6ded4] bg-white/70 backdrop-blur-sm h-full overflow-hidden group hover:shadow-lg transition-shadow">
                      <div className="p-8 space-y-6">
                        <div className="relative">
                          <div className="absolute -left-4 -top-4 w-16 h-16 bg-[#7f6d54] opacity-10 rounded-full" />
                          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#e6ded4]">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </div>

                        <blockquote className="text-[#4a453d] font-light font-sans leading-relaxed italic text-lg">
                          "{testimonial.content}"
                        </blockquote>

                        <div className="space-y-1">
                          <h3 className="font-cinzel font-semibold text-[#7f6d54]">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-[#4a453d]/80 font-sans">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation Arrows */}
            <div className="hidden md:flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-x-0 translate-y-0 border-[#e6ded4] text-[#7f6d54] hover:bg-[#faf6f0] hover:text-[#5d5040]" />
              <CarouselNext className="static translate-x-0 translate-y-0 border-[#e6ded4] text-[#7f6d54] hover:bg-[#faf6f0] hover:text-[#5d5040]" />
            </div>
          </Carousel>
        </div>
      </motion.section>

      {/* Teaser Section for Explore Nathdwara */}
      <Explore />

      {/* Features */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative py-16 px-4 sm:px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Building2,
                title: "Prime Locations",
                text: "Situated in the most sought-after destinations for your convenience",
              },
              {
                icon: Users,
                title: "Exceptional Service",
                text: "Dedicated staff available 24/7 to ensure your comfort",
              },
              {
                icon: CalendarIcon,
                title: "Easy Booking",
                text: "Simple and secure reservation process at your fingertips",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group p-8 bg-[#faf6f0] rounded-2xl border border-[#e6ded4] hover:shadow-lg transition-shadow"
              >
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#7f6d54] text-[#e6ded4] mb-4">
                    <feature.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-medium text-[#2a2418] font-playfair">
                    {feature.title}
                  </h3>
                  <p className="text-[#4a453d] font-light font-sans leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
