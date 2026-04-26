import type { Metadata } from "next";

import { Noto_Kufi_Arabic } from "next/font/google";

import { getMessages, setRequestLocale, getTranslations } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Toaster } from "sonner";
import { getSettings } from "../fetches";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import FloatingActions from "@/components/FloatingActions";

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-noto-kufi-arabic",
});

const SITE_URL = process.env.SITE_URL || "http://localhost:3000";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(SITE_URL),

    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },

    description: t("description"),

    keywords: t("keywords").split(", "),

    authors: [
      {
        name: "Neuro Fit",
        url: SITE_URL,
      },
    ],

    creator: "Neuro Fit",
    publisher: "Neuro Fit",

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: SITE_URL,
    },

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: SITE_URL,
      siteName: "Neuro Fit",
      type: "website",

      images: [
        {
          url: "/images/logo.svg",
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/images/logo.svg"],
    },

    icons: {
      icon: "/images/fav.svg",
      apple: "/images/fav.svg",
    },

    category: "Health",

    verification: {
      google: process.env.NEXT_GOOGLE_VERIFICATION || "",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const [messages, settings] = await Promise.all([
    getMessages({ locale }),
    getSettings(locale),
  ]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Neuro Fit",
    jobTitle: "Neuro Fit",
    url: process.env.SITE_URL || "",
    sameAs: [process.env.SITE_URL || ""],
  };

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${notoKufiArabic.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className={notoKufiArabic.className} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
        <NextIntlClientProvider
          locale={locale}
          timeZone="UTC"
          now={new Date()}
          messages={messages}
        >
          <Toaster position="top-center" richColors />
          <Header locale={locale} settings={settings} />
          <main>{children}</main>
          <Footer settings={settings} />
          <FloatingActions settings={settings} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

