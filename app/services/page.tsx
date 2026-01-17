import ServicesPage from "@/components/pages/services/ServicesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Amenities - NathBliss Hotels Nathdwara",
  description:
    "Explore the comprehensive services and amenities at NathBliss Hotels including 24/7 taxi service, temple guides, room service, free Wi-Fi, and more. Choose from Budget Bliss Rooms (₹849+), Comfort Bliss Rooms (₹1299+), or Premium Suites (₹1799+).",
  keywords:
    "hotel amenities Nathdwara, NathBliss services, taxi service, temple guide, room types, hotel facilities, budget rooms, premium suites",
  alternates: {
    canonical: "/services",
  },
};

export default function Services() {
  return <ServicesPage />;
}
