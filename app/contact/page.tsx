"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 md:px-8 bg-[#faf6f0]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-medium text-[#2a2418] font-playfair">
            <span className="block text-lg font-cinzel font-semibold text-[#7f6d54] tracking-widest mb-3">
              Get in Touch
            </span>
            Contact NathBliss
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <p className="text-[#4a453d] font-sans font-light text-center md:text-left text-lg">
              We're here to craft your perfect stay. Share your needs, and we'll
              handle the rest.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div whileHover={{ scale: 1.01 }}>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-14 text-base bg-white border-[#e6ded4] focus:border-[#7f6d54] focus:ring-0 rounded-xl shadow-sm transition-colors"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-14 text-base bg-white border-[#e6ded4] focus:border-[#7f6d54] focus:ring-0 rounded-xl shadow-sm transition-colors"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="min-h-[150px] text-base bg-white border-[#e6ded4] focus:border-[#7f6d54] focus:ring-0 rounded-xl shadow-sm transition-colors"
                />
              </motion.div>

              <Button
                type="submit"
                className="w-full bg-transparent hover:bg-[#7f6d54]/10 text-[#7f6d54] border-2 border-[#7f6d54] h-14 text-lg rounded-xl font-cinzel font-medium transition-all hover:scale-[1.02] shadow-none"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-[#e6ded4]">
              <h2 className="font-cinzel text-2xl text-[#7f6d54] mb-6">
                Reach Us Directly
              </h2>

              <div className="space-y-6 text-[#4a453d] font-sans font-light">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#7f6d54]/10 rounded-lg">
                    <Phone className="h-6 w-6 text-[#7f6d54]" />
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p>+91 93523 85552</p>
                    <p className="text-sm mt-1">24/7 Support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#7f6d54]/10 rounded-lg">
                    <Mail className="h-6 w-6 text-[#7f6d54]" />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p>contact@nathbliss.com</p>
                    <p className="text-sm mt-1">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#7f6d54]/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-[#7f6d54]" />
                  </div>
                  <div>
                    <p className="font-medium">Visit Us</p>
                    <p>Hotel Sudarshan near Moti Mahal,</p>
                    <p>Chopati, Nathdwara, Rajasthan 313301</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#e6ded4]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d366.0429001482041!2d73.81710727038114!3d24.92824949165648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39680d15bd5e90af%3A0x83f460a09e37b91d!2sHotel%20Sudarshan!5e0!3m2!1sen!2sus!4v1746255087090!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
