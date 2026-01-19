"use client";

import Link from "next/link";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { Video } from "@/lib/types";

interface SuggestedVideosProps {
  videos: Video[];
}

export default function SuggestedVideos({ videos }: SuggestedVideosProps) {
  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  if (!videos.length) {
    return <p className="text-gray-400 text-sm">No suggested videos</p>;
  }

  return (
    <div className="space-y-2 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin">
      <h3 className="text-lg font-semibold text-white mb-4">Up next</h3>

      {videos.map((video) => (
        <Link
          key={video._id}
          href={`/watch?id=${video._id}`}
          className="group flex gap-2 rounded-lg p-2 hover:bg-gray-800 transition-colors"
        >
          {/* Thumbnail */}
          <div className="relative flex-shrink-0 w-40 aspect-video bg-gray-800 rounded-lg overflow-hidden">
            <Image
              src={video.thumbnailUrl}
              alt={video.title}
              fill
              sizes="160px"
              className="object-cover transition-transform duration-200 group-hover:scale-105"
            />

            <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
              {formatDuration(video.duration)}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h4 className="text-white text-sm font-medium line-clamp-2 mb-1 group-hover:text-gray-300 transition-colors">
              {video.title}
            </h4>

            <p className="text-gray-400 text-xs mb-1 hover:text-white transition-colors">
              {video.uploader}
            </p>

            <p className="text-gray-400 text-xs">
              {formatDistanceToNow(new Date(video.uploadedAt), {
                addSuffix: true,
              })}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
