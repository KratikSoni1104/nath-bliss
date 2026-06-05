import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // If we are on a preview branch, dev subdomain, or local machine, disallow search engine indexing.
  const isProduction = 
    process.env.NEXT_PUBLIC_SITE_URL === "https://www.nathbliss.in" || 
    process.env.VERCEL_ENV === "production";

  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "*.json",
          "/*?*", // Disallow query parameters to avoid duplicate content indexing
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: "https://www.nathbliss.in/sitemap.xml",
  };
}
