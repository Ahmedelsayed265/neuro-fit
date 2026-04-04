import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = "http://nuero-fit.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
