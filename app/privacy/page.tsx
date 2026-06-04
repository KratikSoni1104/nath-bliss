import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - NathBliss Hotels",
  description: "NathBliss Hotels privacy policy, guest safety, data security, and communication protocols.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 md:px-8 bg-sand">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border border-alabaster shadow-sm space-y-8 text-charcoal">
        <div className="space-y-4 text-center">
          <span className="text-xs font-cinzel font-semibold text-gold tracking-widest block">
            NATHBLISS HOTELS
          </span>
          <h1 className="text-3xl sm:text-4xl font-medium font-playfair tracking-wide">
            Privacy Policy
          </h1>
          <p className="text-xs text-charcoal/50 font-sans font-light">
            Last Updated: June 2026
          </p>
          <div className="w-16 h-[1px] bg-gold/50 mx-auto mt-4" />
        </div>

        <div className="space-y-6 font-sans font-light text-sm sm:text-base leading-relaxed text-charcoal/90">
          <p>
            At NathBliss Hotels, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy describes how we collect, use, and secure your information when you book a room, visit our website, or interact with our desk team.
          </p>

          <div className="space-y-3">
            <h2 className="font-cinzel text-lg text-gold font-semibold tracking-wider">
              1. Information We Collect
            </h2>
            <p>
              When you make an inquiry or room reservation through our contact form, phone, or messaging platforms like WhatsApp, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact details (name, email address, phone number).</li>
              <li>Reservation details (check-in/check-out dates, selected room type, preferred property).</li>
              <li>Payment verification details.</li>
              <li>Special preferences or dietary needs you share to customize your stay.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-cinzel text-lg text-gold font-semibold tracking-wider">
              2. How We Use Your Information
            </h2>
            <p>
              We process your details solely to deliver high-quality hospitality, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Managing and confirming your lodging reservations.</li>
              <li>Sending essential reservation updates and coordinates via email or WhatsApp.</li>
              <li>Responding to customer service inquiries or customization request matrices.</li>
              <li>Fulfilling compliance requirements set by local tourism authorities.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-cinzel text-lg text-gold font-semibold tracking-wider">
              3. Guest Security & Data Safeguards
            </h2>
            <p>
              We employ strict industry-standard administrative and physical safeguards to defend your personal information against theft, unauthorized access, or leakage. NathBliss does not sell or lease any guest details to third-party marketing companies.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-cinzel text-lg text-gold font-semibold tracking-wider">
              4. Cookies and Web Settings
            </h2>
            <p>
              Our website uses basic analytics cookies to study web traffic patterns and maintain tab states (such as active properties and search criteria). You can select to block or clear cookies through your local browser tools.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-cinzel text-lg text-gold font-semibold tracking-wider">
              5. Contact Us
            </h2>
            <p>
              If you have any questions or would like to request adjustments to your guest record, please email us at{" "}
              <a href="mailto:shreenathbliss@gmail.com" className="text-gold underline hover:text-gold/80">
                shreenathbliss@gmail.com
              </a>{" "}
              or message us directly on our contact page.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
