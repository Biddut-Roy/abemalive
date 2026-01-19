"use client";

import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UpcomingContent() {
  const upcoming = [
    {
      id: 1,
      title: "Season Finale Special",
      show: "Mystery Detective",
      date: "Dec 25, 2024",
      time: "20:00 JST",
      image:
        "https://images.stockcake.com/public/e/b/c/ebc478a1-2fba-4c8c-a99f-514e308f5487_large/mysterious-detective-work-stockcake.jpg",
      type: "Episode",
    },
    {
      id: 2,
      title: "New Series Premiere",
      show: "Future Warriors",
      date: "Jan 1, 2025",
      time: "21:00 JST",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQQxWgVRu6iTUevXat2ig7p-ixq__A5S-wwA&s",
      type: "Premiere",
    },
    {
      id: 3,
      title: "Live Concert Event",
      show: "Summer Music Festival",
      date: "Dec 31, 2024",
      time: "19:00 JST",
      image:
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Live",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Coming Soon</h2>
        <p className="text-gray-400">Don't miss these upcoming releases</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {upcoming.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              <div className="absolute top-3 left-3">
                <span className="inline-block bg-cyan-500 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase">
                  {item.type}
                </span>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-400 text-sm mb-2">{item.show}</p>
              <h3 className="text-xl font-bold mb-4 line-clamp-2">
                {item.title}
              </h3>

              <div className="flex items-center gap-4 mb-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>{item.time}</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full border-white/20 bg-white/5 hover:bg-white/10 text-white"
              >
                Set Reminder
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
