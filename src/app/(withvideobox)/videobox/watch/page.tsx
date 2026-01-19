"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

import api from "@/lib/axios/axios";
import { Video } from "@/lib/types";

import Header from "@/components/videobox/Header";
import Sidebar from "@/components/videobox/Sidebar";
import VideoPlayer from "@/components/videobox/VideoPlayer";
import VideoInfo from "@/components/videobox/VideoInfo";
import Comments from "@/components/videobox/Comments";
import SuggestedVideos from "@/components/videobox/SuggestedVideos";

function WatchPageContent() {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("id");

  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theaterMode, setTheaterMode] = useState(false);

  const [video, setVideo] = useState<Video | null>(null);
  const [suggestedVideos, setSuggestedVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* ---------------- FETCH DATA ---------------- */
  useEffect(() => {
    if (!videoId) {
      setError("Invalid video id");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);

        // 1️⃣ get all videos
        const allRes = await api.get<Video[]>("/videos");

        // 2️⃣ get single video
        const videoRes = await api.get<Video>(`/videos/${videoId}`);

        setVideo(videoRes.data);

        // 3️⃣ suggested videos
        const filtered = allRes.data.filter((v) => v._id !== videoRes.data._id);

        setSuggestedVideos(filtered.slice(0, 20));
      } catch (err) {
        console.error(err);
        setError("Failed to load video");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [videoId]);

  /* ---------------- STATES ---------------- */
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
        Loading video...
      </div>
    );
  }

  if (error || !video) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] text-red-500 flex items-center justify-center">
        {error || "Video not found"}
      </div>
    );
  }

  /* ---------------- UI ---------------- */
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="flex">
        {!theaterMode && <Sidebar isOpen={sidebarOpen} />}

        <main
          className={`flex-1 transition-all duration-300 ${
            theaterMode ? "" : sidebarOpen ? "ml-64" : "ml-16"
          }`}
        >
          <div className={theaterMode ? "p-0" : "p-6"}>
            <div
              className={`grid gap-6 ${
                theaterMode ? "grid-cols-1" : "grid-cols-1 xl:grid-cols-3"
              }`}
            >
              {/* LEFT */}
              <div className={theaterMode ? "" : "xl:col-span-2"}>
                <VideoPlayer
                  video={video}
                  theaterMode={theaterMode}
                  setTheaterMode={setTheaterMode}
                />

                {!theaterMode && (
                  <>
                    <VideoInfo video={video} />
                    <Comments videoId={video._id} />
                  </>
                )}
              </div>

              {/* RIGHT */}
              {!theaterMode && (
                <div className="xl:col-span-1">
                  <SuggestedVideos videos={suggestedVideos} />
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ---------------- SUSPENSE ---------------- */
export default function Watch() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
          Loading video...
        </div>
      }
    >
      <WatchPageContent />
    </Suspense>
  );
}
