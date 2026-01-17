import HotelDetailPage from "@/components/pages/hotel-detail/HotelDetailPage";
import type { Metadata } from "next";

const hotels = {
  sudarshan: {
    name: "Sudarshan Hotel",
    location: "Downtown Business District",
  },
  inn: {
    name: "Sudarshan INN",
    location: "Historic District",
  },
  shree: {
    name: "Shreeji Dhaam",
    location: "Riverside Area",
  },
};

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const hotelId = params.id;
  const hotel = hotels[hotelId as keyof typeof hotels];

  if (!hotel) {
    return {
      title: "Hotel Not Found - NathBliss Hotels",
    };
  }

  return {
    title: `${hotel.name} - Book Rooms | NathBliss Hotels Nathdwara`,
    description: `Book your stay at ${hotel.name}, ${hotel.location}. Explore luxury rooms, amenities, and personalized hospitality at NathBliss Hotels in Nathdwara.`,
    keywords: `${hotel.name}, book ${hotel.name}, ${hotel.location} hotel, NathBliss hotels, Nathdwara accommodation`,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/hotels/${hotelId}`,
    },
    openGraph: {
      title: `${hotel.name} - NathBliss Hotels`,
      description: "Experience personalized luxury hospitality in Nathdwara",
      url: `https://www.nathbliss.in/hotels/${hotelId}`,
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
  };
}

export default function HotelRooms() {
  return <HotelDetailPage />;
}
