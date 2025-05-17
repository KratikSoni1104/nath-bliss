"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Star, Clock, Sparkles, ChevronDown } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

// Custom Accordion Component for Mobile
const Accordion = ({
  items,
}: {
  items: { id: string; title: string; content: React.ReactNode }[];
}) => {
  const [openId, setOpenId] = React.useState<string | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-[#e6ded4] rounded-lg bg-white/70 backdrop-blur-sm"
        >
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full flex justify-between items-center p-4 text-left font-cinzel text-lg text-[#2a2418]"
            aria-expanded={openId === item.id}
            aria-controls={`accordion-content-${item.id}`}
          >
            <span>{item.title}</span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-[#7f6d54] transition-transform",
                openId === item.id && "rotate-180"
              )}
            />
          </button>
          <div
            id={`accordion-content-${item.id}`}
            className={cn(
              "overflow-hidden transition-all duration-300",
              openId === item.id ? "max-h-[1000px] p-4" : "max-h-0"
            )}
            role="region"
            aria-labelledby={`accordion-button-${item.id}`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

// Define tab content to reuse in both Tabs and Accordion
const tabContent = [
  {
    id: "about",
    title: "Our Story",
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 md:grid-cols-2"
      >
        <div className="space-y-6">
          <p className="text-[#4a453d] font-inter font-light leading-relaxed text-base sm:text-lg">
            Founded in the spiritual heart of Nathdwara, NathBliss emerged from
            a simple vision: to create hospitality that remembers you. What
            began as a single 12-room guesthouse has blossomed into three
            distinct properties, each offering personalized comfort starting at
            just ₹849.
          </p>
          <p className="text-[#4a453d] font-inter font-light leading-relaxed text-base sm:text-lg">
            While chains focus on scale, we focus on soul. Our 83% repeat guest
            rate speaks to experiences crafted around you - from preferred tea
            blends to customized darshan schedules.
          </p>
        </div>
        <div className="relative rounded-xl overflow-hidden border border-[#e6ded4]">
          <img
            src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg"
            alt="Hotel Lobby"
            className="w-full h-64 sm:h-80 object-cover"
          />
        </div>
      </motion.div>
    ),
  },
  {
    id: "difference",
    title: "Differentiators",
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 md:grid-cols-2"
      >
        <Card className="bg-white/70 backdrop-blur-sm border-[#e6ded4]">
          <CardContent className="p-6">
            <h3 className="font-cinzel text-xl sm:text-2xl text-[#7f6d54] mb-6">
              Hyper-Personalization Framework
            </h3>
            <ul className="space-y-3">
              {[
                "Pre-arrival preference surveys via WhatsApp",
                "AI-powered guest memory system",
                "Custom spiritual itinerary planning",
                "Diet-specific kitchen protocols",
                "Multilingual staff (Hindi, English, Gujarati)",
                "Flexible check-in/out system",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start text-[#4a453d] font-inter font-light text-base sm:text-lg"
                >
                  <Sparkles className="w-5 h-5 text-[#7f6d54] mt-1 mr-3 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <div className="relative rounded-xl overflow-hidden border border-[#e6ded4]">
          <img
            src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
            alt="Luxury Room"
            className="w-full h-64 sm:h-80 object-cover"
          />
        </div>
      </motion.div>
    ),
  },
  {
    id: "features",
    title: "Features",
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {[
          {
            icon: Heart,
            title: "Guest-Centric Design",
            description: "Spaces crafted around human needs",
          },
          {
            icon: Users,
            title: "Dedicated Concierge",
            description: "24/7 personalized service",
          },
          {
            icon: Star,
            title: "Luxury Standards",
            description: "Premium amenities at every tier",
          },
          {
            icon: Clock,
            title: "Flexible Experience",
            description: "Your schedule, our priority",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/70 backdrop-blur-sm border-[#e6ded4] h-full">
              <CardContent className="p-6 text-center">
                <feature.icon className="w-10 h-10 mx-auto mb-4 text-[#7f6d54]" />
                <h3 className="font-cinzel text-lg sm:text-xl text-[#2a2418] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#4a453d] font-inter font-light text-sm sm:text-base">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    ),
  },
];

// Updated Main Content Tabs Section
const MainContentSection = () => {
  return (
    <section className="mb-16">
      {/* Desktop: Tabs */}
      <div className="hidden lg:block">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-[#e6ded4] p-2 gap-2 rounded-lg">
            {tabContent.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="font-cinzel text-base tracking-wide py-3 data-[state=active]:bg-white data-[state=active]:text-[#2a2418] data-[state=active]:shadow-sm hover:bg-[#7f6d54]/10 transition-all rounded-md"
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabContent.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-8">
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Mobile: Accordion */}
      <div className="lg:hidden">
        <Accordion items={tabContent} />
      </div>
    </section>
  );
};

// Integrate into AboutPage
export default function AboutPage() {
  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-[#faf6f0]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2a2418] font-playfair">
            <span className="block text-base sm:text-lg font-cinzel font-semibold text-[#7f6d54] tracking-widest mb-3">
              Redefining Hospitality
            </span>
            About NathBliss
          </h1>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative h-80 sm:h-[500px] rounded-2xl overflow-hidden mb-12 sm:mb-16 border border-[#e6ded4]"
        >
          <img
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg"
            alt="Luxury Hotel Interior"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 flex items-end p-6 sm:p-8">
            <div className="text-left text-white">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair mb-4">
                Our Philosophy: Personalization at Core
              </h2>
              <p className="text-base sm:text-xl font-inter font-light max-w-2xl">
                Crafting experiences that resonate with your unique needs, not
                just providing standardized rooms
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content Section */}
        <MainContentSection />

        {/* Vision Section */}
        <div className="grid gap-6 lg:grid-cols-2 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#e6ded4]"
          >
            <h2 className="font-playfair text-xl sm:text-2xl text-[#2a2418] mb-4">
              Our Vision
            </h2>
            <p className="text-[#4a453d] font-inter font-light leading-relaxed text-base sm:text-lg">
              To become Rajasthan's most cherished hospitality brand by
              redefining personalized comfort, where technology enhances human
              connection rather than replacing it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#e6ded4]"
          >
            <h2 className="font-playfair text-xl sm:text-2xl text-[#2a2418] mb-4">
              Our Commitment
            </h2>
            <p className="text-[#4a453d] font-inter font-light leading-relaxed text-base sm:text-lg">
              Maintaining the sacred trust our guests place in us through
              immaculate spaces, discreet service, and ethical practices that
              honor Nathdwara's spiritual heritage.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#e6ded4]"
        >
          <h2 className="font-cinzel text-xl sm:text-2xl text-[#7f6d54] mb-6">
            Why NathBliss Stands Apart
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <ul className="space-y-3">
              {[
                "Average 4.9/5 guest satisfaction score",
                "93% repeat guest ratio",
                "72-hour deep cleaning protocol",
                "Local artisan partnerships",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-[#4a453d] font-inter font-light text-base sm:text-lg"
                >
                  <Star className="w-5 h-5 text-[#7f6d54] mr-3" />
                  {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {[
                "15-minute emergency response",
                "Ayurvedic toiletries standard",
                "Solar-powered hot water",
                "Zero single-use plastics",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-[#4a453d] font-inter font-light text-base sm:text-lg"
                >
                  <Sparkles className="w-5 h-5 text-[#7f6d54] mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
