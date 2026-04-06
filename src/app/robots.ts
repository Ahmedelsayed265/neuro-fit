import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = "https://neuro-fit.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
