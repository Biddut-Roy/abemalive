import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import LiveChannels from "@/components/home/LiveChannels";
import PopularShows from "@/components/home/PopularShows";
import Categories from "@/components/home/Categories";
import UpcomingContent from "@/components/home/UpcomingContent";

export const metadata: Metadata = {
  title: "ABEMA - Live Streaming & Video On Demand",
  description:
    "Watch 25+ live channels and thousands of shows on demand. Enjoy news, anime, drama, sports, and entertainment 24/7. No registration required.",
  keywords:
    "streaming, live tv, anime, drama, sports, news, entertainment, video on demand",
  openGraph: {
    title: "ABEMA - Live Streaming & Video On Demand",
    description:
      "Watch 25+ live channels and thousands of shows on demand. Enjoy news, anime, drama, sports, and entertainment 24/7.",
    type: "website",
    images: [
      {
        url: "https://abemalive.com",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ABEMA - Live Streaming & Video On Demand",
    description: "Watch 25+ live channels and thousands of shows on demand.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <LiveChannels />
      <PopularShows />
      <Categories />
      <UpcomingContent />
    </main>
  );
}
