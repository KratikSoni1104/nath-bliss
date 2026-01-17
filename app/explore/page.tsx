import ExplorePage from "@/components/pages/explore/ExplorePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Explore Nathdwara & Beyond - Tourist Attractions Near NathBliss Hotels",
  description:
    "Discover spiritual temples, historic forts, serene lakes, and natural wonders near NathBliss Hotels. Explore Shreenathji Temple, Kumbhalgarh Fort, Pichola Lake, and more attractions in and around Nathdwara, Rajasthan.",
  keywords:
    "Nathdwara attractions, Shreenathji Temple, places to visit Nathdwara, Rajasthan tourism, Kumbhalgarh Fort, Udaipur lakes, spiritual tours, religious sites Rajasthan",
  openGraph: {
    title: "Explore Nathdwara & Beyond - NathBliss Hotels",
    description: "Experience personalized luxury hospitality in Nathdwara",
    url: "https://www.nathbliss.in/explore",
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
    canonical: "/explore",
  },
};

export default function Explore() {
  return <ExplorePage />;
}
