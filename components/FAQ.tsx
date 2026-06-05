"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How far are the NathBliss properties from the Shreenathji Temple?",
    answer: "Both Sudarshan INN and Sudarshan Hotel are located right at Chaupati (the main temple chowk), which is just a 1 to 2-minute walk to the temple gates. Shreeji Dhaam is situated in the scenic Riverside area, a brief 5-minute transit away.",
  },
  {
    question: "Do you offer elevator access and senior-citizen friendly facilities?",
    answer: "Yes. Keeping family comfort in mind, our premium properties feature modern elevator (lift) systems, minimal stairs, and senior-citizen friendly layouts. We also provide dedicated wheelchair support for going to the temple to ensure a smooth, worry-free pilgrimage for elderly family members.",
  },
  {
    question: "Are your food and room service options 100% vegetarian?",
    answer: "Absolutely. In compliance with the holy traditions of Nathdwara, all our associated kitchens and in-room dining menus serve strictly 100% pure vegetarian food prepared under the highest standards of hygiene and taste.",
  },
  {
    question: "What are the standard check-in and check-out timings?",
    answer: "Our check-in time is 10:00 AM and check-out time is 9:00 AM. If you require early check-in or late check-out due to temple darshan schedules, please contact us in advance and we will accommodate you based on room availability.",
  },
  {
    question: "Do you provide airport transfer or taxi services for sightseeing?",
    answer: "Yes, we provide 24/7 dedicated taxi support. We can arrange airport pickups from Udaipur (UDR), temple transits, and guided day tours to nearby historical sights like Kumbhalgarh Fort, Haldighati, and Eklingji.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 md:px-8 bg-sand border-t border-alabaster">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs sm:text-sm font-cinzel font-semibold text-gold tracking-widest block uppercase">
            Have Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal font-playfair tracking-wide">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-[1px] bg-gold/50 mx-auto mt-4" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 pt-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-alabaster overflow-hidden hover:shadow-sm transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="font-cinzel font-semibold text-charcoal text-sm sm:text-base tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <div className="ml-4 shrink-0 p-1.5 rounded-full bg-sand/50 text-gold border border-alabaster">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pl-14 border-t border-alabaster/40 pt-4">
                        <p className="text-charcoal/80 font-sans font-light text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
