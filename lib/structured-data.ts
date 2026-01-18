import { WithContext, Organization, Hotel, LodgingBusiness } from "schema-dts";

/**
 * Generate Organization structured data for NathBliss Hotels
 * Used on homepage and throughout the site
 */
export function getOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.nathbliss.in/#organization",
    name: "NathBliss Hotels",
    url: "https://www.nathbliss.in",
    logo: {
      "@type": "ImageObject",
      url: "https://www.nathbliss.in/images/nath-bliss-logo.jpeg",
      width: "1200",
      height: "630",
    },
    description:
      "NathBliss Hotels offers hyper-personalized luxury hospitality in Nathdwara with Budget Bliss, Comfort Bliss, and Premium Personalized rooms.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nathdwara",
      addressLocality: "Nathdwara",
      addressRegion: "Rajasthan",
      postalCode: "313301",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9352385552",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      // Add your social media links here when available
      // "https://www.facebook.com/nathbliss",
      // "https://www.instagram.com/nathbliss",
    ],
  };
}

/**
 * Hotel data with complete information for structured data
 */
export const hotelsData = {
  sudarshan: {
    id: "sudarshan",
    name: "Sudarshan Hotel",
    description:
      "A boutique experience combining modern comfort with traditional hospitality, perfect for both business and leisure in Nathdwara.",
    location: "Downtown Business District",
    address: "Downtown Business District, Nathdwara, Rajasthan 313301, India",
    priceRange: "₹₹",
    starRating: 4,
    checkinTime: "14:00",
    checkoutTime: "11:00",
    image: "https://www.nathbliss.in/images/sudarshan-hotel.jpeg",
    rooms: [
      {
        name: "Comfort Bliss Room",
        price: 1499,
        currency: "INR",
        description: "Personalized comfortable room with essential amenities",
        amenities: ["Free Wi-Fi", "Room Service", "Smart TV"],
      },
      {
        name: "Premium Bliss Room",
        price: 1999,
        currency: "INR",
        description:
          "Personalized room with Italic wooden furnitures, king-size bed, and modern amenities",
        amenities: ["Free Wi-Fi", "Room Service", "Smart TV"],
      },
      {
        name: "Bliss's Family Room",
        price: 2499,
        currency: "INR",
        description:
          "Spacious room with 2 king size-beds, extra spacious washroom, and modern amenities",
        amenities: ["Free Wi-Fi", "Room Service", "Smart TV"],
      },
    ],
  },
  inn: {
    id: "inn",
    name: "Sudarshan INN",
    description:
      "Experience luxury at its finest with our signature property featuring panoramic city views and world-class amenities in Nathdwara.",
    location: "Historic District",
    address: "Historic District, Nathdwara, Rajasthan 313301, India",
    priceRange: "₹₹₹",
    starRating: 4.5,
    checkinTime: "14:00",
    checkoutTime: "11:00",
    image: "https://www.nathbliss.in/images/sudarshan-inn-hotel.jpeg",
    rooms: [
      {
        name: "Comfort Bliss Room",
        price: 1999,
        currency: "INR",
        description: "Personalized Comfortable room with essential amenities",
        amenities: ["Free Wi-Fi", "Room Service", "Smart TV"],
      },
      {
        name: "Premium Bliss Room",
        price: 2499,
        currency: "INR",
        description:
          "Personalized Spacious room with city view, king-size bed, and modern amenities",
        amenities: ["Free Wi-Fi", "Room Service", "Smart TV"],
      },
      {
        name: "Bliss's Family Room",
        price: 2999,
        currency: "INR",
        description:
          "Personalized Spacious room with one king size bed accompanying single bed with premium furnishings",
        amenities: ["Free Wi-Fi", "Room Service", "Smart TV"],
      },
    ],
  },
  shree: {
    id: "shree",
    name: "Shreeji Dhaam",
    description:
      "Your sanctuary of peace and luxury in budget, offering an unforgettable stay with personalized service and elegant accommodations in Nathdwara.",
    location: "Riverside Area",
    address: "Riverside Area, Nathdwara, Rajasthan 313301, India",
    priceRange: "₹",
    starRating: 3.5,
    checkinTime: "14:00",
    checkoutTime: "11:00",
    image: "https://www.nathbliss.in/images/shreejee-dham.jpeg",
    rooms: [
      {
        name: "Personalized Bliss Room",
        price: 849,
        currency: "INR",
        description:
          "Personalized Spacious room with city view, open balcony, and modern amenities",
        amenities: ["Free Wi-Fi", "Room Service", "Smart TV"],
      },
    ],
  },
};

/**
 * Generate Hotel/LodgingBusiness structured data for individual hotel pages
 */
export function getHotelSchema(hotelId: string) {
  const hotel = hotelsData[hotelId as keyof typeof hotelsData];

  if (!hotel) {
    throw new Error(`Hotel with id "${hotelId}" not found`);
  }

  // Find min and max prices
  const prices = hotel.rooms.map((room) => room.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `https://www.nathbliss.in/hotels/${hotelId}#hotel`,
    name: hotel.name,
    description: hotel.description,
    image: hotel.image,
    url: `https://www.nathbliss.in/hotels/${hotelId}`,
    telephone: "+91-9352385552",
    email: "info@nathbliss.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: hotel.address,
      addressLocality: "Nathdwara",
      addressRegion: "Rajasthan",
      postalCode: "313301",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.1208", // Update with actual coordinates
      longitude: "73.8218", // Update with actual coordinates
    },
    starRating: {
      "@type": "Rating",
      ratingValue: hotel.starRating.toString(),
      bestRating: "5",
    },
    priceRange: hotel.priceRange,
    checkinTime: hotel.checkinTime,
    checkoutTime: hotel.checkoutTime,
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Free Wi-Fi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Room Service",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Smart TV",
        value: true,
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Room Types",
      itemListElement: hotel.rooms.map((room, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Accommodation",
          name: room.name,
          description: room.description,
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: room.price.toString(),
          priceCurrency: room.currency,
          name: "Per Night",
        },
      })),
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.nathbliss.in/contact",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "LodgingReservation",
        name: "Book Room",
      },
    },
  } as any; // Using 'as any' to bypass complex nested type checking
}

/**
 * Generate Website structured data
 */
export function getWebsiteSchema(): WithContext<any> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.nathbliss.in/#website",
    url: "https://www.nathbliss.in",
    name: "NathBliss Hotels",
    description:
      "Experience personalized luxury hospitality in Nathdwara. Book Budget Bliss, Comfort Bliss, and Premium rooms.",
    publisher: {
      "@id": "https://www.nathbliss.in/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://www.nathbliss.in/hotels?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generate BreadcrumbList structured data
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
