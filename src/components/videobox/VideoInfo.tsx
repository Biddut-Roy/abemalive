"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";
import { Video } from "@/lib/types";

interface VideoInfoProps {
  video: Video;
}

export default function VideoInfo({ video }: VideoInfoProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="mt-4 space-y-4">
      {/* Title */}
      <h1 className="text-xl font-bold text-white">{video.title}</h1>

      {/* Channel + Subscribe */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar placeholder */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />

          <div>
            <h3 className="text-white font-medium">{video.uploader}</h3>
            <p className="text-gray-400 text-sm">
              Uploaded{" "}
              {formatDistanceToNow(new Date(video.uploadedAt), {
                addSuffix: true,
              })}
            </p>
          </div>
        </div>

        <Button
          className={`px-6 py-2 rounded-full font-medium transition-colors ${
            isSubscribed
              ? "bg-gray-700 text-white hover:bg-gray-600"
              : "bg-white text-black hover:bg-gray-200"
          }`}
          onClick={() => setIsSubscribed(!isSubscribed)}
        >
          {isSubscribed ? "Subscribed" : "Subscribe"}
        </Button>
      </div>

      {/* Description box */}
      <div className="bg-[#272727] rounded-xl p-4">
        <div className="text-gray-300 text-sm">
          <p className={showFullDescription ? "" : "line-clamp-3"}>
            This video belongs to the <b>{video.category}</b> category.
          </p>

          <Button
            variant="ghost"
            className="text-gray-400 hover:text-white mt-2 p-0 h-auto font-medium"
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            {showFullDescription ? "Show less" : "Show more"}
          </Button>
        </div>
      </div>
    </div>
  );
}
