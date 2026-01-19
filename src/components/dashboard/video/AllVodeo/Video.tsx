"use client";

import { useEffect, useState } from "react";
import { Play, Clock } from "lucide-react";

type Video = {
  _id: string;
  title: string;
  category: string;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
  uploadedAt: string;
};

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/videos`)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        Loading videos...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-8 py-10 mt-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">All Videos</h1>
        <p className="text-zinc-400 mt-1">Explore our latest uploads</p>
      </div>

      {/* Video Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {videos.map((video) => (
          <div
            key={video._id}
            className="group bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
          >
            {/* Thumbnail */}
            <div className="relative">
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${video.thumbnailUrl}`}
                alt={video.title}
                className="w-full h-44 object-cover"
              />

              {/* Play overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                  <Play className="text-black ml-1" />
                </div>
              </div>

              {/* Duration */}
              <div className="absolute bottom-2 right-2 bg-black/80 text-xs px-2 py-1 rounded flex items-center gap-1">
                <Clock size={12} />
                {Math.floor(video.duration / 60)}:
                {(video.duration % 60).toString().padStart(2, "0")}
              </div>
            </div>

            {/* Info */}
            <div className="p-4 space-y-2">
              <h2 className="font-semibold text-sm line-clamp-2">
                {video.title}
              </h2>

              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-1 rounded bg-blue-600/20 text-blue-400">
                  {video.category}
                </span>

                <span className="text-xs text-zinc-400">
                  {new Date(video.uploadedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {videos.length === 0 && (
        <div className="text-center text-zinc-400 mt-20">
          No videos uploaded yet.
        </div>
      )}
    </div>
  );
}
