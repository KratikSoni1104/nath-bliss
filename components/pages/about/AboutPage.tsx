"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Star, Clock, Sparkles, ChevronDown, Award, Globe, Shield } from "lucide-react";

// Define tab content to reuse in both Tabs and Accordion
const tabContent = [
  {
    id: "about",
    title: "Our Story",
    content: (
      <div className="grid gap-8 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <span className="text-xs font-cinzel font-semibold text-gold tracking-widest block">
            HOW WE BEGAN
          </span>
          <h3 className="text-2xl sm:text-3xl font-playfair font-medium text-charcoal">
            Built Around Human Connection
          </h3>
          <p className="text-charcoal/80 font-sans font-light leading-relaxed text-base sm:text-lg">
            Founded in the spiritual heart of Nathdwara, NathBliss emerged from a simple vision: to create hospitality that remembers you. What began as a single 12-room guesthouse has blossomed into three distinct properties, each offering personalized comfort starting at just ₹849.
          </p>
          <p className="text-charcoal/80 font-sans font-light leading-relaxed text-base sm:text-lg">
            While chains focus on scale, we focus on soul. Our 83% repeat guest rate speaks to experiences crafted around you - from preferred tea blends to customized darshan schedules.
          </p>
        </div>
        
        {/* Image with clean gold border */}
        <div className="relative p-1 mt-4 lg:mt-0">
          <div className="relative rounded-2xl overflow-hidden border border-alabaster aspect-[4/3] shadow-md ring-1 ring-gold/20">
            <img
              src="/images/intro-img.jpeg"
              alt="Hotel Lobby"
              className="w-full h-full object-cover transform hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "difference",
    title: "Differentiators",
    content: (
      <div className="grid gap-8 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <span className="text-xs font-cinzel font-semibold text-gold tracking-widest block">
            THE NATHBLISS WAY
          </span>
          <h3 className="text-2xl sm:text-3xl font-playfair font-medium text-charcoal">
            The Personalization Matrix
          </h3>
          <p className="text-charcoal/80 font-sans font-light leading-relaxed text-base sm:text-lg">
            Standardization is convenient for hotels, but uncomfortable for guests. We structured our entire management framework around remembering your details.
          </p>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {[
              "Preference surveys via WhatsApp",
              "Guest memory logging system",
              "Custom spiritual itineraries",
              "Diet-specific kitchen protocols",
              "Multilingual local hosts",
              "Flexible 24h check-in",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center text-charcoal/80 font-sans font-light text-sm sm:text-base"
              >
                <Sparkles className="w-4 h-4 text-gold mr-3 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Image with clean gold border */}
        <div className="relative p-1 mt-4 lg:mt-0">
          <div className="relative rounded-2xl overflow-hidden border border-alabaster aspect-[4/3] shadow-md ring-1 ring-gold/20">
            <img
              src="/images/s-in-family-bliss.jpeg"
              alt="Luxury Room"
              className="w-full h-full object-cover transform hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "features",
    title: "Core Values",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: Heart,
            title: "Guest-Centricity",
            description: "Spaces and services designed solely around human comfort and ease.",
          },
          {
            icon: Users,
            title: "Local Stewards",
            description: "24/7 personalized hosts trained to help you navigate local heritage.",
          },
          {
            icon: Star,
            title: "Inclusive Luxury",
            description: "Providing premium linen, high-speed Wi-Fi, and top cleanliness at every tier.",
          },
          {
            icon: Clock,
            title: "Complete Flexibility",
            description: "A checkout schedule and dining timing prioritized to fit your plans.",
          },
        ].map((feature, index) => (
          <Card key={index} className="bg-white/50 backdrop-blur-sm border-alabaster/60 hover:border-gold/30 hover:shadow-md transition-all duration-300 group h-full">
            <CardContent className="p-6 text-center space-y-3 flex flex-col justify-center h-full">
              <div className="w-12 h-12 rounded-full bg-sand border border-alabaster flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <feature.icon className="w-5 h-5 text-gold" />
              </div>
              <h4 className="font-cinzel text-base text-charcoal font-semibold">
                {feature.title}
              </h4>
              <p className="text-charcoal/80 font-sans font-light text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    ),
  },
];

export default function AboutPage() {
  const [selectedTabId, setSelectedTabId] = useState(tabContent[0].id);

  const activeTab = tabContent.find((tab) => tab.id === selectedTabId) || tabContent[0];

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-sand">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs sm:text-sm font-cinzel font-semibold text-gold tracking-widest block">
            REDEFINING HOSPITALITY
          </span>
          <h1 className="text-4xl md:text-5xl font-medium text-charcoal font-playfair tracking-wide">
            About NathBliss
          </h1>
          <div className="w-24 h-[1px] bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Video Hero Block */}
        <div className="relative h-80 sm:h-[500px] rounded-3xl overflow-hidden border border-alabaster shadow-sm">
          <video
            src="/videos/about-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-6 sm:p-12" />
          <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 text-white space-y-2 max-w-3xl">
            <span className="text-xs font-cinzel font-semibold tracking-wider text-gold">
              OUR PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-4xl font-playfair font-medium leading-tight">
              Personalization at Core
            </h2>
            <p className="text-sm sm:text-lg font-sans font-light text-white/90 leading-relaxed">
              Crafting experiences that resonate with your unique needs, not just providing standardized rooms.
            </p>
          </div>
        </div>

        {/* Interactive Stats: NathBliss by the Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-alabaster/60 text-center">
          {[
            { value: "4.9/5", label: "GUEST RATING", icon: Award },
            { value: "93%", label: "REPEAT RATE", icon: Star },
            { value: "3", label: "BOUTIQUE STAYS", icon: Globe },
            { value: "80+", label: "SANCTUARIES", icon: Shield },
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-center mb-1">
                <stat.icon className="h-5 w-5 text-gold" />
              </div>
              <div className="text-3xl sm:text-4xl font-cinzel font-bold text-charcoal">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs font-cinzel text-gold tracking-widest font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tab Selector (Desktop & Mobile Unified Layout) */}
        <div className="space-y-8">
          {/* Tabs Navigation */}
          <div className="flex justify-center border-b border-alabaster pb-2">
            <div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth w-full md:w-auto justify-center">
              {tabContent.map((tab) => {
                const isActive = tab.id === selectedTabId;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTabId(tab.id)}
                    style={{ outline: "none", boxShadow: "none" }}
                    className={`relative py-4 px-2 font-cinzel text-xs sm:text-sm tracking-widest transition-all focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 select-none ${
                      isActive ? "text-gold font-semibold" : "text-charcoal/60 hover:text-charcoal"
                    }`}
                  >
                    {tab.title.toUpperCase()}
                    {isActive && (
                      <motion.div
                        layoutId="activeAboutTabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="bg-white/30 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-alabaster/40 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Vision & Commitment Split */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-alabaster space-y-4 hover:shadow-sm transition-shadow">
            <span className="text-xs font-cinzel font-semibold text-gold tracking-widest block">
              FUTURE HORIZON
            </span>
            <h3 className="text-xl sm:text-2xl font-playfair font-semibold text-charcoal">
              Our Vision
            </h3>
            <p className="text-charcoal/80 font-sans font-light leading-relaxed text-sm sm:text-base">
              To become Rajasthan's most cherished hospitality brand by redefining personalized comfort, where technology enhances human connection rather than replacing it.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-alabaster space-y-4 hover:shadow-sm transition-shadow">
            <span className="text-xs font-cinzel font-semibold text-gold tracking-widest block">
              OUR TRUST
            </span>
            <h3 className="text-xl sm:text-2xl font-playfair font-semibold text-charcoal">
              Our Commitment
            </h3>
            <p className="text-charcoal/80 font-sans font-light leading-relaxed text-sm sm:text-base">
              Maintaining the sacred trust our guests place in us through immaculate spaces, discreet service, and ethical practices that honor Nathdwara's spiritual heritage.
            </p>
          </div>
        </div>

        {/* Why Choose Us List */}
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-alabaster space-y-6">
          <span className="text-xs font-cinzel font-semibold text-gold tracking-widest block text-center">
            CORE METRICS
          </span>
          <h3 className="font-cinzel text-xl sm:text-2xl text-gold text-center">
            Why NathBliss Stands Apart
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 border-t border-alabaster pt-6">
            <ul className="space-y-4">
              {[
                "Average 4.9/5 guest satisfaction score",
                "83% repeat guest ratio across properties",
                "72-hour clinical deep cleaning protocol",
                "Direct partnerships with local artisans",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-charcoal/80 font-sans font-light text-sm sm:text-base"
                >
                  <Star className="w-4 h-4 text-gold mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {[
                "15-minute emergency concierge response",
                "Organic Ayurvedic toiletries standard",
                "Solar-powered hot water systems",
                "Zero single-use plastics initiative",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-charcoal/80 font-sans font-light text-sm sm:text-base"
                >
                  <Sparkles className="w-4 h-4 text-gold mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </main>
  );
}
