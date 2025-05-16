"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Star, Clock, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen py-16 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About NathBliss</h1>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] rounded-2xl overflow-hidden mb-16"
        >
          <img
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Luxury Hotel Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Mission: Hospitality That Feels Personal
              </h2>
              <p className="text-xl max-w-2xl mx-auto">
                Every guest deserves a stay crafted around their unique needs,
                not just a standard room.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="about" className="mb-16">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="about">About Us</TabsTrigger>
            <TabsTrigger value="difference">
              What Makes Us Different
            </TabsTrigger>
            <TabsTrigger value="features">Features & Benefits</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg mb-6">
                    Welcome to NathBliss, where luxury meets comfort in the
                    heart of hospitality. Founded with a vision to provide
                    exceptional stays, we take pride in offering three distinct
                    properties that cater to diverse preferences and needs.
                  </p>
                  <p className="text-lg mb-6">
                    While other chains focus on scaling rooms, we focus on
                    scaling relationships. From a budget of ₹849, we offer more
                    than just space — we offer soulful service, curated
                    experiences, and comfort that remembers you.
                  </p>
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Hotel Lobby"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="difference" className="mt-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">
                Personalization is Our Identity
              </h3>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-4">
                      Before Your Stay
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Your preferred room fragrance",
                        "Pillow softness level",
                        "Temple darshan schedule assistance",
                        "Fasting or special diet requirements",
                        "Anniversary or birthday decor",
                        "Early/late check-in flexibility",
                        "Custom mattress or lighting preferences",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <Sparkles className="h-4 w-4 text-primary" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Luxury Room"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="features" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Personalized Care",
                  description: "Every detail tailored to your preferences",
                },
                {
                  icon: Users,
                  title: "Dedicated Staff",
                  description: "24/7 service at your disposal",
                },
                {
                  icon: Star,
                  title: "Premium Experience",
                  description: "Luxury without compromise",
                },
                {
                  icon: Clock,
                  title: "Flexible Scheduling",
                  description: "Accommodating your timeline",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6 text-center">
                      <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                      <h3 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Vision and Commitment */}
        <div className="grid gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p>
              To create memorable experiences through personalized service and
              luxurious accommodations that exceed our guests' expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-card p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p>
              We are dedicated to providing exceptional service, maintaining the
              highest standards of cleanliness, and ensuring every guest feels
              at home during their stay.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-muted p-8 rounded-lg"
        >
          <h2 className="text-2xl font-semibold mb-6">Why Choose NathBliss?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-primary" />
                <span>
                  Prime locations in the most sought-after destinations
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span>Luxurious amenities and modern facilities</span>
              </li>
              <li className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Dedicated customer service available 24/7</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-primary" />
                <span>Competitive rates and exclusive packages</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Seamless booking experience</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
