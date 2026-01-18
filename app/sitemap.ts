import { MetadataRoute } from "next";

// Hotel data for dynamic routes
const hotels = [
  {
    id: "sudarshan",
    name: "Sudarshan Hotel",
  },
  {
    id: "inn",
    name: "Sudarshan INN",
  },
  {
    id: "shree",
    name: "Shreeji Dhaam",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.nathbliss.in";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hotels`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/explore`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Dynamic hotel pages
  const hotelPages: MetadataRoute.Sitemap = hotels.map((hotel) => ({
    url: `${baseUrl}/hotels/${hotel.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...hotelPages];
}
