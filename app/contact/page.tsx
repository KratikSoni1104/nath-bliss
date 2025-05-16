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
    <main className="min-h-screen py-12 px-4 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center md:text-left">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-sm sm:prose-lg dark:prose-invert max-w-none">
              <p className="text-base sm:text-lg mb-6 text-center md:text-left">
                We'd love to hear from you. Please fill out the form below or
                reach out using our contact information.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div whileFocus={{ scale: 1.01 }} className="space-y-2">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-10 sm:h-12 text-base"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.01 }} className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-10 sm:h-12 text-base"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.01 }} className="space-y-2">
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="min-h-[120px] sm:min-h-[150px] text-base"
                />
              </motion.div>

              <Button type="submit" className="w-full" size="lg">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info and Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-center md:text-left">
                Contact Information
              </h2>

              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>

                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <span>contact@nathbliss.com</span>
                </div>

                <div className="flex items-start space-x-3 justify-center md:justify-start">
                  <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                  <span className="text-left">
                    Hotel Sudarshan near Moti Mahal, Chopati, Nathdwara,
                    Rajasthan 313301, India
                  </span>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] sm:aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d366.0429001482041!2d73.81710727038114!3d24.92824949165648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39680d15bd5e90af%3A0x83f460a09e37b91d!2sHotel%20Sudarshan!5e0!3m2!1sen!2sus!4v1746255087090!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
