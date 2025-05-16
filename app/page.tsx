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

const hotels = [
  {
    name: "Sudarshan Hotel",
    description:
      "Your sanctuary of peace and luxury, offering an unforgettable stay with personalized service and elegant accommodations.",
    image:
      // "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "/images/sudarshan-room-1.jpeg",
  },
  {
    name: "Sudarshan INN",
    description:
      "Experience luxury at its finest with our signature property featuring panoramic city views and world-class amenities.",
    image: "/images/sudarshan-inn-room-1.jpeg",
    // image:
    //   "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Shreeji Dhaam",
    description:
      "A boutique experience combining modern comfort with traditional hospitality, perfect for both business and leisure.",
    image:
      // "https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "/images/shreeji-dhaam-room-1.jpeg",
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

const roomTypes = [
  {
    name: "Budget Bliss Rooms",
    price: "₹849+",
    description: "Minimalist and peaceful, designed for personalization.",
    image:
      "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Comfort Bliss Rooms",
    price: "₹1299+",
    description: "Enhanced comfort with tailored amenities.",
    image:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Premium Personalized Suites",
    price: "₹1799+",
    description: "Luxury suites with fully customized experiences.",
    image:
      "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative text-center text-white space-y-6 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold ">
            Discover Bliss with NathBliss
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-playfair">
            Experience unparalleled luxury and comfort at our exclusive
            properties
          </p>
          <Button
            size="lg"
            asChild
            className="bg-white text-black hover:bg-white/90"
          >
            <Link href="/hotels">Book Now</Link>
          </Button>
        </motion.div>
      </motion.section>

      {/* Quick Booking Form */}
      <motion.section
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
      </motion.section>

      {/* Intro Section */}
      <Intro />

      {/* Personalization Service Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto py-20 px-4 bg-muted"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Personalization Service – Included in Every Booking
          </h2>
          <p className="text-lg">
            Most hotels treat customization as a luxury.
          </p>
          <p className="text-xl font-bold">
            We treat it as a basic human need.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Guest Profile Memory: Return guests are remembered and preferences auto-applied",
              "Flexible Add-ons: Flowers, décor, spiritual requests, family needs",
              "Pre-Arrival Connect: WhatsApp or Call survey 24 hrs before check-in",
              "Real-Time Requests: In-room QR or App to request anything, instantly",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start space-x-3 p-4 bg-background rounded-lg shadow-sm"
              >
                <span className="text-primary">•</span>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-lg mt-8">
            And all this, starting at just ₹849 per night.
          </p>
          <Button size="lg" asChild>
            <Link href="/hotels">Customize My Stay</Link>
          </Button>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto py-20 px-4"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience comfort and luxury tailored to your needs
            </p>
          </div>

          {/* Room Types */}
          <div className="grid md:grid-cols-3 gap-8">
            {roomTypes.map((room, index) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{room.name}</CardTitle>
                    <CardDescription>Starting at {room.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{room.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Travel Services */}
          <div className="text-center space-y-8">
            <h3 className="text-2xl font-bold">Travel & Spiritual Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <h4 className="text-xl font-semibold mb-2">Taxi Service</h4>
                <p className="text-muted-foreground">
                  Reliable transportation at your convenience
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="text-xl font-semibold mb-2">Temple Guide</h4>
                <p className="text-muted-foreground">
                  Expert guidance for Shreenathiji Temple visits
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="text-xl font-semibold mb-2">Spiritual Tours</h4>
                <p className="text-muted-foreground">
                  Visit sacred sites including Udaipur, Kumbhalgarh, and more
                </p>
              </Card>
            </div>
            <Button size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Featured Hotels */}
      <section className="container mx-auto py-20 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our Luxury Properties
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{hotel.name}</CardTitle>
                  <CardDescription>{hotel.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href={`/hotels?property=${encodeURIComponent(
                        hotel.name
                      )}`}
                    >
                      View Rooms
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            What Our Guests Say
          </motion.h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none bg-transparent">
                    <CardContent className="flex flex-col items-center text-center p-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-lg mb-4">{testimonial.content}</p>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Teaser Section for Explore Nathdwara */}
      <Explore />

      {/* Features */}
      <section className="container mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Building2 className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Prime Locations</h3>
            <p className="text-muted-foreground">
              Situated in the most sought-after destinations for your
              convenience
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Exceptional Service</h3>
            <p className="text-muted-foreground">
              Dedicated staff available 24/7 to ensure your comfort
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <Calendar className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
            <p className="text-muted-foreground">
              Simple and secure reservation process at your fingertips
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
