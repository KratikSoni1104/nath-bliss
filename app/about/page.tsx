import AboutPage from "@/components/pages/about/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About NathBliss Hotels - Redefining Personalized Hospitality in Nathdwara",
  description:
    "Learn about NathBliss Hotels' vision to redefine hospitality in Nathdwara. Discover our hyper-personalization framework, guest-centric design, and sustainable practices that make us Rajasthan's most cherished boutique hotel chain.",
  keywords:
    "about NathBliss, Nathdwara hospitality, personalized hotel service, sustainable hotels Rajasthan, guest satisfaction, hotel philosophy, boutique hotels India",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return <AboutPage />;
}
