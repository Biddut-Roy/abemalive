"use client";

import Link from "next/link";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { Video } from "@/lib/types";

interface VideoGridProps {
  videos: Video[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  if (!videos.length) {
    return <p className="text-gray-400 text-sm">No videos found</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {videos.map((video, index) => {
        const hasThumbnail =
          typeof video.thumbnailUrl === "string" &&
          video.thumbnailUrl.trim().length > 0;

        return (
          <Link
            key={video._id}
            href={`videobox/watch?id=${video._id}`}
            className="group cursor-pointer"
          >
            <div className="space-y-3">
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden">
                {hasThumbnail && (
                  <Image
                    src={video.thumbnailUrl}
                    alt={video.title}
                    fill
                    priority={index < 4} // ⭐ LCP fix
                    loading={index < 4 ? "eager" : "lazy"}
                    sizes="
                      (max-width: 640px) 50vw,
                      (max-width: 1024px) 33vw,
                      (max-width: 1536px) 25vw,
                      20vw
                    "
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                )}

                {/* Duration */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded">
                  {formatDuration(video.duration)}
                </div>
              </div>

              {/* Info */}
              <div className="flex gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium text-sm line-clamp-2 mb-1 group-hover:text-gray-300 transition-colors">
                    {video.title}
                  </h3>

                  <p className="text-gray-400 text-xs mb-1 hover:text-white transition-colors">
                    {video.uploader}
                  </p>

                  <p className="text-gray-400 text-xs">
                    {formatDistanceToNow(new Date(video.uploadedAt), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
