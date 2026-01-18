"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Building2, MapPin } from "lucide-react";
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
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Booking Form */}
      {/* <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="container mx-auto -mt-16 px-4 relative z-10"
      >
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Check-in Date</label>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <Input type="date" className="flex-1" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Check-out Date</label>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <Input type="date" className="flex-1" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Guests</label>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-muted-foreground" />
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
            <Button size="lg" asChild className="self-end">
              <Link href="/hotels">Search Rooms</Link>
            </Button>
          </div>
        </Card>
      </motion.section> */}

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
                icon: Calendar,
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
