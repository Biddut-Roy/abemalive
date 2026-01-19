"use client";

import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Settings,
  MoreHorizontal,
  ThumbsUp,
  ThumbsDown,
  Share,
  Download,
} from "lucide-react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { Video } from "@/lib/types";

interface VideoPlayerProps {
  video: Video;
  theaterMode: boolean;
  setTheaterMode: (mode: boolean) => void;
}

export default function VideoPlayer({
  video,
  theaterMode,
  setTheaterMode,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const controlsTimeoutRef = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([80]);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  /* ---------------- video events ---------------- */
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const onTime = () => setCurrentTime(el.currentTime);
    const onLoaded = () => {
      setDuration(el.duration || 0);
      setIsLoading(false);
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    el.addEventListener("timeupdate", onTime);
    el.addEventListener("loadedmetadata", onLoaded);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);

    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("loadedmetadata", onLoaded);
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
    };
  }, []);

  /* ---------------- volume ---------------- */
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume[0] / 100;
    }
  }, [volume]);

  /* ---------------- helpers ---------------- */
  const togglePlay = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
  };

  const handleSeek = ([time]: number[]) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleMouseEnter = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    controlsTimeoutRef.current = window.setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2000);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  /* ---------------- UI ---------------- */
  return (
    <div
      className={`bg-black rounded-xl overflow-hidden transition-all duration-300 ${
        theaterMode ? "fixed inset-0 z-50" : "relative shadow-2xl"
      }`}
    >
      <div
        className={`relative group ${theaterMode ? "h-full" : "aspect-video"}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* VIDEO */}
        <video
          ref={videoRef}
          className="w-full h-full object-contain bg-black cursor-pointer"
          onClick={togglePlay}
          preload="metadata"
        >
          <source src={video.videoUrl} type="video/mp4" />
        </video>

        {/* LOADING */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-white" />
          </div>
        )}

        {/* CENTER PLAY */}
        {!isPlaying && !isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Button size="icon" onClick={togglePlay}>
              <Play className="h-8 w-8" />
            </Button>
          </div>
        )}

        {/* CONTROLS */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 transition ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          <Slider
            value={[currentTime]}
            max={duration || 1}
            step={0.1}
            onValueChange={handleSeek}
          />

          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Button size="icon" variant="ghost" onClick={togglePlay}>
                {isPlaying ? <Pause /> : <Play />}
              </Button>

              <Button
                size="icon"
                variant="ghost"
                onClick={() => setVolume(volume[0] ? [0] : [80])}
              >
                {volume[0] ? <Volume2 /> : <VolumeX />}
              </Button>

              <Slider
                className="w-24"
                value={volume}
                max={100}
                onValueChange={setVolume}
              />

              <span className="text-sm text-white">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex gap-2">
              <Button size="icon" variant="ghost">
                <Settings />
              </Button>

              <Button
                size="icon"
                variant="ghost"
                onClick={() => setTheaterMode(!theaterMode)}
              >
                {theaterMode ? <Minimize /> : <Maximize />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      {!theaterMode && (
        <div className="p-4 bg-gradient-to-b from-gray-900 to-black flex justify-between">
          <div className="flex gap-3">
            <Button variant="ghost">
              <ThumbsUp className="mr-2" /> Like
            </Button>
            <Button variant="ghost">
              <ThumbsDown />
            </Button>
            <Button variant="ghost">
              <Share className="mr-2" /> Share
            </Button>
            <Button variant="ghost">
              <Download className="mr-2" /> Download
            </Button>
          </div>

          <Button size="icon" variant="ghost">
            <MoreHorizontal />
          </Button>
        </div>
      )}
    </div>
  );
}
