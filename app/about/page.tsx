import AboutPage from "@/components/pages/about/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About NathBliss Hotels - Redefining Personalized Hospitality in Nathdwara",
  description:
    "Learn about NathBliss Hotels' vision to redefine hospitality in Nathdwara. Discover our hyper-personalization framework, guest-centric design, and sustainable practices that make us Rajasthan's most cherished boutique hotel chain.",
  keywords:
    "about NathBliss, Nathdwara hospitality, personalized hotel service, sustainable hotels Rajasthan, guest satisfaction, hotel philosophy, boutique hotels India",
  openGraph: {
    title: "About NathBliss Hotels - Personalized Hospitality in Nathdwara",
    description: "Experience personalized luxury hospitality in Nathdwara",
    url: "https://www.nathbliss.in/about",
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
    canonical: "/about",
  },
};

export default function About() {
  return <AboutPage />;
}
