import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://neuro-fit.com";
  const locales = ["ar", "en"];

  const staticPages = ["", "/articles"];

  const articleSlugs = [
    "إعادة-التأهيل-العصبي",
    "تأهيل-عضلات-الحوض",
    "جلسات-التخاطب",
    "جيم-طبي-متكامل",
    "إعادة-التأهيل-العصبي-2",
    "جلسات-التخاطب-2",
  ];

  const serviceIds = ["1", "2", "3", "4"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Home and static pages with alternates
  staticPages.forEach((page) => {
    sitemapEntries.push({
      url: `${siteUrl}/ar${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: page === "" ? 1 : 0.8,
      alternates: {
        languages: {
          ar: `${siteUrl}/ar${page}`,
          en: `${siteUrl}/en${page}`,
        },
      },
    });
    // We also add /en version explicitly if needed, but alternates usually cover it for many systems.
    // However, Next.js sitemap tool usually wants an entry per URL.
    sitemapEntries.push({
      url: `${siteUrl}/en${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: page === "" ? 1 : 0.8,
      alternates: {
        languages: {
          ar: `${siteUrl}/ar${page}`,
          en: `${siteUrl}/en${page}`,
        },
      },
    });
  });

  // Articles with alternates
  articleSlugs.forEach((slug) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${siteUrl}/${locale}/articles/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
        alternates: {
          languages: {
            ar: `${siteUrl}/ar/articles/${slug}`,
            en: `${siteUrl}/en/articles/${slug}`,
          },
        },
      });
    });
  });

  // Services with alternates
  serviceIds.forEach((id) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${siteUrl}/${locale}/services/${id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            ar: `${siteUrl}/ar/services/${id}`,
            en: `${siteUrl}/en/services/${id}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
