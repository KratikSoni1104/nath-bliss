import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - NathBliss Hotels",
  description: "NathBliss Hotels terms of service, guest policies, cancellation guidelines, and check-in rules.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 md:px-8 bg-sand">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border border-alabaster shadow-sm space-y-8 text-charcoal">
        <div className="space-y-4 text-center">
          <span className="text-xs font-cinzel font-semibold text-gold tracking-widest block">
            NATHBLISS HOTELS
          </span>
          <h1 className="text-3xl sm:text-4xl font-medium font-playfair tracking-wide">
            Terms of Service
          </h1>
          <p className="text-xs text-charcoal/50 font-sans font-light">
            Last Updated: June 2026
          </p>
          <div className="w-16 h-[1px] bg-gold/50 mx-auto mt-4" />
        </div>

        <div className="space-y-6 font-sans font-light text-sm sm:text-base leading-relaxed text-charcoal/90">
          <p>
            Welcome to NathBliss Hotels. By booking or staying at any of our properties (Sudarshan Hotel, Sudarshan INN, or Shreeji Dhaam), you agree to comply with and be bound by the following Terms of Service. Please review these details carefully before completing your reservation.
          </p>

          <div className="space-y-3">
            <h2 className="font-cinzel text-lg text-gold font-semibold tracking-wider">
              1. Booking & Reservation Policies
            </h2>
            <p>
              To confirm a reservation, guests must supply valid identification matching the check-in details. Online booking requests are subject to confirmation by our front desk. Bookings must comply with local security registrations.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-cinzel text-lg text-gold font-semibold tracking-wider">
              2. Standard Check-In & Check-Out
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Check-in Time:</strong> 14:00 (2:00 PM)</li>
              <li><strong>Check-out Time:</strong> 11:00 (11:00 AM)</li>
              <li>Requests for early check-in or late check-out depend on room availability and must be requested in advance.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-cinzel text-lg text-gold font-semibold tracking-wider">
              3. Pure Vegetarian & Alcohol Guidelines
            </h2>
            <p>
              To maintain the sacred local traditions of Nathdwara:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Only 100% pure vegetarian food is permitted inside the hotel properties.</li>
              <li>Alcohol consumption, possession, or smoking is strictly prohibited on all hotel premises. Violation of this rule will result in immediate termination of the stay without a refund.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-cinzel text-lg text-gold font-semibold tracking-wider">
              4. Cancellations and Deposit Policy
            </h2>
            <p>
              Cancellation policies differ depending on the booking tier and seasons (such as festival periods). Unless specified otherwise during booking:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cancellations made more than 48 hours prior to check-in are eligible for a full refund.</li>
              <li>Cancellations within 48 hours will incur a charge equal to the first night's room rate.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-cinzel text-lg text-gold font-semibold tracking-wider">
              5. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of India, and any disputes will fall under the exclusive jurisdiction of the courts located in Rajsamand/Nathdwara, Rajasthan.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
