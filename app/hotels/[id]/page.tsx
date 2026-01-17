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
    alternates: {
      canonical: `/hotels/${hotelId}`,
    },
    openGraph: {
      title: `${hotel.name} - NathBliss Hotels`,
      description: `Book your stay at ${hotel.name}, ${hotel.location}. Experience personalized luxury in Nathdwara.`,
      type: "website",
      locale: "en_IN",
    },
  };
}

export default function HotelRooms() {
  return <HotelDetailPage />;
}
