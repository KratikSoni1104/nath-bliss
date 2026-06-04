"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const propertyData = [
  {
    id: "sudarshan",
    name: "Sudarshan Hotel",
    tagline: "HERITAGE COMFORT",
    address: "Hotel Sudarshan near Moti Mahal, Chopati, Nathdwara, Rajasthan 313301",
    phone: "+91 93523 85552",
    email: "contact@nathbliss.com",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d366.0429001482041!2d73.81710727038114!3d24.92824949165648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39680d15bd5e90af%3A0x83f460a09e37b91d!2sHotel%20Sudarshan!5e0!3m2!1sen!2sus!4v1746255087090!5m2!1sen!2sus",
    directionsUrl: "https://maps.google.com/?q=Hotel+Sudarshan+Nathdwara"
  },
  {
    id: "inn",
    name: "Sudarshan INN",
    tagline: "LUXURY RETREAT",
    address: "Near Shrinathji Temple, Nathdwara, Rajasthan 313301",
    phone: "+91 93523 85552",
    email: "contact@nathbliss.com",
    mapEmbed: "https://maps.google.com/maps?q=Hotel+Sudarshan+Inn+Nathdwara+Rajasthan&t=&z=16&ie=UTF8&iwloc=&output=embed",
    directionsUrl: "https://maps.google.com/?q=Hotel+Sudarshan+Inn+Nathdwara"
  },
  {
    id: "shreeji",
    name: "Shreeji Dhaam",
    tagline: "PEACEFUL SANCTUARY",
    address: "Riverside Area, Bypass Road, Nathdwara, Rajasthan 313301",
    phone: "+91 93523 85552",
    email: "contact@nathbliss.com",
    mapEmbed: "https://maps.google.com/maps?q=Shreeji+Dhaam+Nathdwara+Rajasthan&t=&z=16&ie=UTF8&iwloc=&output=embed",
    directionsUrl: "https://maps.google.com/?q=Shreeji+Dhaam+Nathdwara"
  }
];

export default function ContactPage() {
  const [activePropertyId, setActivePropertyId] = useState(propertyData[0].id);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    property: "general",
    message: "",
  });

  const activeProperty = propertyData.find((p) => p.id === activePropertyId) || propertyData[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", property: "general", message: "" });
  };

  const handleWhatsAppRedirect = () => {
    const selectedPropName =
      formData.property === "general"
        ? "your properties"
        : propertyData.find((p) => p.id === formData.property)?.name || "your properties";
    const text = `Hello NathBliss Team, I am sending a booking inquiry for ${selectedPropName}. Name: ${formData.name || "[Your Name]"}. Message: ${formData.message || "Looking for availability."}`;
    window.open(`https://wa.me/919352385552?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 md:px-8 bg-sand">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs sm:text-sm font-cinzel font-semibold text-gold tracking-widest block">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl md:text-5xl font-medium text-charcoal font-playfair tracking-wide">
            Contact NathBliss
          </h1>
          <p className="text-charcoal/80 font-sans font-light max-w-3xl mx-auto text-base sm:text-lg">
            We are here to design your spiritual retreat. Select a property to locate us or send a direct inquiry.
          </p>
          <div className="w-24 h-[1px] bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Dynamic Map Tabs Switcher */}
        <div className="flex justify-center border-b border-alabaster pb-2">
          <div className="flex gap-2 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth w-full md:w-auto py-2">
            {propertyData.map((prop) => {
              const isActive = prop.id === activePropertyId;
              return (
                <button
                  key={prop.id}
                  onClick={() => setActivePropertyId(prop.id)}
                  style={{ outline: "none", boxShadow: "none" }}
                  className={`relative py-3 px-4 font-cinzel text-xs tracking-wider whitespace-nowrap transition-all focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 select-none ${
                    isActive ? "text-gold font-semibold" : "text-charcoal/60 hover:text-charcoal"
                  }`}
                >
                  {prop.name.toUpperCase()}
                  {isActive && (
                    <motion.div
                      layoutId="activeContactPropUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Split Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Form Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-alabaster shadow-sm space-y-6">
            <div className="space-y-2">
              <h3 className="font-playfair text-2xl text-charcoal font-medium">
                Send a Message
              </h3>
              <p className="text-charcoal/80 font-sans font-light text-sm">
                Share your details and our desk team will contact you back.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <label htmlFor="name-input" className="text-[10px] font-cinzel font-semibold text-gold tracking-widest block">
                  FULL NAME
                </label>
                <Input
                  id="name-input"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 bg-white border border-alabaster focus:border-gold focus:ring-0 rounded-xl text-sm"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email-input" className="text-[10px] font-cinzel font-semibold text-gold tracking-widest block">
                  EMAIL ADDRESS
                </label>
                <Input
                  id="email-input"
                  type="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 bg-white border border-alabaster focus:border-gold focus:ring-0 rounded-xl text-sm"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="property-select" className="text-[10px] font-cinzel font-semibold text-gold tracking-widest block">
                  SELECT PROPERTY
                </label>
                <select
                  id="property-select"
                  value={formData.property}
                  onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                  className="w-full h-12 bg-white border border-alabaster text-charcoal font-sans text-sm rounded-xl px-3 focus:border-gold focus:ring-0 shadow-sm outline-none transition-colors"
                >
                  <option value="general">General Query</option>
                  <option value="sudarshan">Sudarshan Hotel</option>
                  <option value="inn">Sudarshan INN</option>
                  <option value="shreeji">Shreeji Dhaam</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="message-input" className="text-[10px] font-cinzel font-semibold text-gold tracking-widest block">
                  YOUR MESSAGE
                </label>
                <Textarea
                  id="message-input"
                  placeholder="What can we help you with?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-[120px] bg-white border border-alabaster focus:border-gold focus:ring-0 rounded-xl text-sm"
                />
              </div>

              <div className="pt-2 space-y-3">
                <Button
                  type="submit"
                  variant="custom"
                  size="custom"
                  className="w-full btn-primary h-12 font-cinzel tracking-widest text-xs"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Inquiry
                </Button>

                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-alabaster"></div>
                  <span className="flex-shrink mx-4 text-[10px] font-cinzel text-charcoal/40 tracking-widest">OR CONNECT VIA</span>
                  <div className="flex-grow border-t border-alabaster"></div>
                </div>

                <Button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  variant="custom"
                  className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-cinzel tracking-widest flex items-center justify-center gap-2 border-0 outline-none"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.794.002-2.599-1.01-5.048-2.853-6.892-1.842-1.843-4.287-2.857-6.887-2.859-5.404 0-9.802 4.393-9.806 9.797-.001 1.77.462 3.498 1.345 5.021l-.98 3.585 3.67-.962zm11.365-7.114c-.3-.15-1.772-.875-2.046-.975-.276-.1-.476-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-3.037-1.514-4.72-3.896-5.507-5.25-.195-.336-.02-.518.147-.686.15-.15.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-1.072-2.587-.384-.926-.78-.8-1.072-.816-.275-.015-.59-.015-.903-.015-.313 0-.823.117-1.254.585-.43.467-1.64 1.6-1.64 3.9s1.67 4.514 1.895 4.814c.225.3 3.3 5.037 8.01 7.07 1.12.483 1.996.772 2.68 1.002 1.122.357 2.14.3 2.95.18.9-.133 2.772-1.132 3.17-2.229.4-.1.4-.824.274-1.025-.124-.2-.475-.35-.775-.5z"/>
                  </svg>
                  Chat with Us
                </Button>
              </div>
            </form>
          </div>

          {/* Maps and Address Card (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProperty.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-alabaster shadow-sm space-y-6"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-cinzel font-bold text-gold tracking-widest">
                    {activeProperty.tagline}
                  </span>
                  <h3 className="font-playfair text-2xl text-charcoal font-medium">
                    {activeProperty.name}
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 text-charcoal/80 font-sans font-light text-sm border-t border-alabaster/60 pt-6">
                  <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                      <MapPin className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-xs font-cinzel text-charcoal tracking-wider">ADDRESS</p>
                        <p className="mt-1 leading-relaxed">{activeProperty.address}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                      <Phone className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-xs font-cinzel text-charcoal tracking-wider">PHONE & DESK</p>
                        <p className="mt-1">{activeProperty.phone}</p>
                        <p className="text-xs text-charcoal/50 mt-0.5">24/7 Desk Support</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <Mail className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-xs font-cinzel text-charcoal tracking-wider">EMAIL</p>
                        <p className="mt-1">{activeProperty.email}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Wrapper */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-alabaster/80 shadow-inner">
                  <iframe
                    src={activeProperty.mapEmbed}
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <Button
                    asChild
                    variant="custom"
                    size="custom"
                    className="btn-primary py-3 px-6 font-cinzel tracking-widest text-[10px]"
                  >
                    <a
                      href={activeProperty.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="h-3 w-3 mr-2" />
                      Open Google Maps
                    </a>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}
