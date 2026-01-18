import HomePage from "@/components/pages/home/HomePage";
import type { Metadata } from "next";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title:
    "NathBliss Hotels - Hyper-Personalized Luxury Hospitality in Nathdwara",
  description:
    "Experience personalized luxury at NathBliss Hotels in Nathdwara. Choose from Budget Bliss Rooms starting at ₹849, Comfort Bliss Rooms, and Premium Personalized Suites. Enjoy hyper-personalized service, spiritual tours, and world-class amenities.",
  keywords:
    "NathBliss Hotels, Nathdwara hotels, luxury hotels Nathdwara, personalized hospitality, Budget Bliss Rooms, Comfort Bliss Rooms, Premium Suites, Shreenathiji Temple, spiritual tours, Rajasthan hotels",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "NathBliss Hotels - Hyper-Personalized Luxury in Nathdwara",
    description:
      "Discover NathBliss Hotels offering personalized comfort from ₹849/night. Experience luxury, spiritual tours, and exceptional service in Nathdwara.",
    url: "https://www.nathbliss.in",
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
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <>
      {/* Organization Schema */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      /> */}
      {/* Website Schema */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      /> */}
      <HomePage />
    </>
  );
}
