import HotelsPage from "@/components/pages/hotels/HotelsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotels & Rooms - Book Your Stay at NathBliss Properties in Nathdwara",
  description:
    "Browse our luxury hotels in Nathdwara: Sudarshan Hotel, Sudarshan INN, and Shreeji Dhaam. Choose from Comfort Bliss Rooms (₹1499+), Premium Bliss Rooms (₹1999+), and Family Rooms (₹2499+). View amenities and book online.",
  keywords:
    "NathBliss hotels, book hotel Nathdwara, hotel rooms Nathdwara, Sudarshan Hotel, Sudarshan INN, Shreeji Dhaam, luxury accommodation, budget rooms",
  openGraph: {
    title: "Hotels & Rooms - NathBliss Properties in Nathdwara",
    description: "Experience personalized luxury hospitality in Nathdwara",
    url: "https://www.nathbliss.in/hotels",
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
    canonical: "/hotels",
  },
};

export default function Hotels() {
  return <HotelsPage />;
}
