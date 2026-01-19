"use client";

import Header from "@/components/videobox/Header";
import Sidebar from "@/components/videobox/Sidebar";
import VideoGrid from "@/components/videobox/VideoGrid";
import api from "@/lib/axios/axios";
import { Video } from "@/lib/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔥 Fetch videos using axios
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const res = await api.get<Video[]>("/videos");
        setVideos(res.data);
      } catch (err) {
        setError("Failed to load videos");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // 🔍 Client-side filtering
  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || video.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <main
          className={`flex-1 transition-all duration-300 ${
            sidebarOpen ? "ml-40 md:ml-52 lg:ml-64" : "ml-16"
          }`}
        >
          <div className="p-6 mt-10">
            {loading && (
              <p className="text-gray-400 text-sm">Loading videos...</p>
            )}

            {error && <p className="text-red-500 text-sm">{error}</p>}

            {!loading && !error && <VideoGrid videos={filteredVideos} />}
          </div>
        </main>
      </div>
    </div>
  );
}
