"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { phoneNumber } from "@/utils/data";

export default function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds, then hide it after 10 seconds
    const showTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 12000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const message = encodeURIComponent(
    "Jai Shree Krishna! I am planning a stay in Nathdwara and would like to ask some questions regarding availability and customized room options. Thank you!"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Tooltip Message Bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="mb-3 mr-1 bg-white border border-alabaster p-3.5 rounded-2xl shadow-xl max-w-[240px] pointer-events-auto relative text-charcoal"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-stone-400 hover:text-stone-600 focus:outline-none"
              aria-label="Close tooltip"
            >
              <X className="h-3 w-3" />
            </button>
            <div className="space-y-1 pr-3">
              <span className="text-[10px] font-cinzel font-bold text-gold tracking-widest block uppercase">
                Support
              </span>
              <p className="text-xs font-sans font-light leading-relaxed text-charcoal/90">
                Jai Shree Krishna! Need help with booking or custom services? Let's chat.
              </p>
            </div>
            {/* Little arrow indicator */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-alabaster rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="pointer-events-auto relative flex items-center justify-center w-14 h-14 rounded-full bg-[#128C7E] hover:bg-[#075E54] text-white shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
        aria-label="Chat with our booking concierge on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
      >
        {/* Soft Breathing Glow Ring */}
        <span className="absolute inset-0 rounded-full bg-[#128C7E]/40 animate-ping pointer-events-none opacity-70 group-hover:animate-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="h-7 w-7 text-white fill-white" />
      </motion.a>
    </div>
  );
}
