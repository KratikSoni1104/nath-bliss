import ContactPage from "@/components/pages/contact/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact NathBliss Hotels - Get in Touch for Bookings & Inquiries",
  description:
    "Contact NathBliss Hotels for bookings, special requests, or inquiries. Call us at +91 93523 85552, email contact@nathbliss.com, or visit our property in Nathdwara. 24/7 support available.",
  keywords:
    "contact NathBliss, book hotel Nathdwara, hotel inquiry, reservation contact, customer support, NathBliss phone number, hotel email",
  openGraph: {
    title: "Contact NathBliss Hotels - Bookings & Inquiries",
    description: "Experience personalized luxury hospitality in Nathdwara",
    url: "https://www.nathbliss.in/contact",
    siteName: "NathBliss",
    images: [
      {
        url: "https://www.nathbliss.in/images/nath-bliss-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "NathBliss Hotels - Experience personalized luxury hospitality in Nathdwara",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return <ContactPage />;
}
