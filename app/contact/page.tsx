import ContactPage from "@/components/pages/contact/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact NathBliss Hotels - Get in Touch for Bookings & Inquiries",
  description:
    "Contact NathBliss Hotels for bookings, special requests, or inquiries. Call us at +91 93523 85552, email contact@nathbliss.com, or visit our property in Nathdwara. 24/7 support available.",
  keywords:
    "contact NathBliss, book hotel Nathdwara, hotel inquiry, reservation contact, customer support, NathBliss phone number, hotel email",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return <ContactPage />;
}
