import StructuredData from "@/components/StructuredData";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abemalive.com"),

  title: {
    default: "ABEMA Live – Live Streaming & Video On Demand",
    template: "%s | ABEMA Live",
  },

  description:
    "Stream live channels and thousands of shows on demand. News, anime, drama, sports, and entertainment available 24/7 on ABEMA Live.",

  keywords: [
    "streaming",
    "live tv",
    "anime",
    "drama",
    "sports",
    "news",
    "entertainment",
    "video on demand",
    "VOD",
    "abema live",
  ],

  authors: [{ name: "ABEMA Live" }],
  creator: "ABEMA Live",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abemalive.com",
    siteName: "ABEMA Live",
    images: [
      {
        url: "https://abemalive.com/og-image.jpg", //
        width: 1200,
        height: 630,
        alt: "ABEMA Live Streaming Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@abemalive",
    creator: "@abemalive",
    images: ["https://abemalive.com/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-black text-white antialiased`}
        suppressHydrationWarning
      >
        {/* JSON-LD */}
        <StructuredData />

        <Header />

        <main className="min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
