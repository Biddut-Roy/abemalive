"use client";

import { Play } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";

export default function LiveChannels() {
  const channels = [
    {
      id: 1,
      name: "News Channel",
      current: "Breaking: Global Summit",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      viewers: "45.2K",
      category: "News",
    },
    {
      id: 2,
      name: "Anime 24/7",
      current: "Popular Series Marathon",
      image:
        "https://cdn-offer-photos.zeusx.com/419da974-16eb-4594-a72d-10fb629969c9.jpg",
      viewers: "128K",
      category: "Anime",
    },
    {
      id: 3,
      name: "Sports Live",
      current: "Championship Finals",
      image:
        "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800",
      viewers: "89.5K",
      category: "Sports",
    },
    {
      id: 4,
      name: "Drama Central",
      current: "Prime Time Special",
      image:
        "https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg?auto=compress&cs=tinysrgb&w=800",
      viewers: "52.3K",
      category: "Drama",
    },
    {
      id: 5,
      name: "Entertainment",
      current: "Variety Show Live",
      image:
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
      viewers: "34.8K",
      category: "Entertainment",
    },
    {
      id: 6,
      name: "Music Live",
      current: "Concert Special",
      image:
        "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
      viewers: "67.1K",
      category: "Music",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Live Video</h2>
          <p className="text-gray-400">Watch live broadcasts 24/7</p>
        </div>
        <a
          href="/videobox"
          className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors hidden md:block"
        >
          View All
        </a>
      </div>

      <ScrollArea className="w-full">
        <div className="flex gap-4 pb-4">
          {channels.map((channel) => (
            <div
              key={channel.id}
              className="flex-shrink-0 w-80 group cursor-pointer"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                <img
                  src={channel.image}
                  alt={channel.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="absolute top-3 left-3 flex items-center gap-2 bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  LIVE
                </div>

                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-medium">
                  {channel.viewers} viewers
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                    <Link href="/videobox">
                      <Play
                        className="w-8 h-8 text-black ml-1"
                        fill="currentColor"
                      />
                    </Link>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium line-clamp-1">
                    {channel.current}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-block px-2.5 py-1 bg-white/5 text-gray-400 rounded text-xs font-medium">
                  {channel.category}
                </span>
                <h3 className="font-semibold text-white">{channel.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
