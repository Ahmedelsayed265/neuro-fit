import type { Metadata } from "next";

import { Noto_Kufi_Arabic } from "next/font/google";

import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-noto-kufi-arabic",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || ""),

  title: {
    default: "Neuro Fit",
    template: "%s | Neuro Fit",
  },

  description: "",

  keywords: ["Neuro Fit"],

  authors: [
    {
      name: "Neuro Fit",
      url: process.env.SITE_URL || "",
    },
  ],

  creator: "Neuro Fit",
  publisher: "Neuro Fit",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: process.env.SITE_URL || "",
  },

  openGraph: {
    title: "Neuro Fit",
    description: "",
    url: process.env.SITE_URL || "",
    siteName: "Neuro Fit",
    type: "website",

    images: [
      {
        url: "/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "Neuro Fit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Neuro Fit",
    description: "",
    images: ["/images/logo.svg"],
  },

  icons: {
    icon: "/images/fav.svg",
    apple: "/images/fav.svg",
  },

  category: "",

  verification: {
    google: "",
  },
};

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

  const messages = await getMessages({ locale });

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
          <Header locale={locale} />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
