"use client";

import { Play, Info, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden mt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg?auto=compress&cs=tinysrgb&w=1920)",
        }}
      />

      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            LIVE NOW
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Breaking News
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mt-2">
              24/7 Coverage
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Watch live news, exclusive interviews, and breaking stories as they
            happen. Stay informed with our 24-hour news channel.
          </p>

          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 text-lg px-8 h-14 font-semibold group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-lg px-8 h-14 font-semibold"
            >
              <Info className="w-5 h-5 mr-2" />
              More Info
            </Button>
          </div>

          <div className="flex items-center gap-6 mt-12 text-sm text-gray-400 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-emerald-400 rounded-full" />
              <span>HD</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-emerald-400 rounded-full" />
              <span>English Subtitles</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-emerald-400 rounded-full" />
              <span>Watch</span>
            </div>
          </div>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-8 right-8 z-20 bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/20 text-white"
        onClick={() => setIsMuted(!isMuted)}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </Button>
    </section>
  );
}
