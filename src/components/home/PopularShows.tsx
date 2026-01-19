"use client";

import { Play, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PopularShows() {
  const shows = [
    {
      id: 1,
      title: "Mystery Detective",
      description: "A brilliant detective solves complex cases",
      image:
        "https://store-images.s-microsoft.com/image/apps.64459.13896909028245835.27fc9289-8942-4708-a3cd-ad20711b57b9.484b9768-90e6-4eb1-ac67-4ef27357c9d5?q=90&w=480&h=270",
      episodes: 24,
      rating: 9.2,
      genre: "Drama",
    },
    {
      id: 2,
      title: "Space Warriors",
      description: "Epic space battles and adventure",
      image:
        "https://m.media-amazon.com/images/S/pv-target-images/50bd09af05213965a5a011de1bec53b16521f980f8d2fc2927415102ada89ce2.png",
      episodes: 12,
      rating: 8.8,
      genre: "Anime",
    },
    {
      id: 3,
      title: "City Romance",
      description: "Modern love story in Tokyo",
      image:
        "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      episodes: 16,
      rating: 8.5,
      genre: "Romance",
    },
    {
      id: 4,
      title: "Chef Masters",
      description: "Culinary competition series",
      image:
        "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=800",
      episodes: 20,
      rating: 9.0,
      genre: "Reality",
    },
    {
      id: 5,
      title: "Dark Horizons",
      description: "Psychological thriller series",
      image:
        "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=800",
      episodes: 10,
      rating: 9.3,
      genre: "Thriller",
    },
    {
      id: 6,
      title: "Music Dreams",
      description: "Journey to stardom",
      image:
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
      episodes: 18,
      rating: 8.7,
      genre: "Music",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Popular Shows</h2>
          <p className="text-gray-400">Trending on ABEMA this week</p>
        </div>
        <a
          href="/shows"
          className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors hidden md:block"
        >
          View All
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {shows.map((show) => (
          <div key={show.id} className="group cursor-pointer">
            <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3">
              <img
                src={show.image}
                alt={show.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  size="icon"
                  variant="ghost"
                  className="w-8 h-8 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40 text-white"
                >
                  <Plus className="w-5 h-5" />
                </Button>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform shadow-xl">
                  <Link href="/videobox">
                    <Play
                      className="w-7 h-7 text-black ml-0.5"
                      fill="currentColor"
                    />
                  </Link>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-2 mb-2 text-xs">
                  <span className="bg-emerald-500 text-white px-2 py-0.5 rounded font-semibold">
                    {show.rating}
                  </span>
                  <span className="text-gray-300">{show.episodes} eps</span>
                </div>
                <p className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">
                  {show.description}
                </p>
              </div>
            </div>

            <div>
              <span className="inline-block px-2 py-0.5 bg-white/5 text-gray-400 rounded text-xs font-medium mb-2">
                {show.genre}
              </span>
              <h3 className="font-semibold text-white text-sm line-clamp-2 leading-snug">
                {show.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
