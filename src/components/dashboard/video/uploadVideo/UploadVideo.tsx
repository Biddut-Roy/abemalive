"use client";

import { useRef, useState } from "react";
import axios from "axios";
import { UploadCloud, Loader2, Pause } from "lucide-react";

const categories = [
  "Shows",
  "Music",
  "Anime",
  "Drama",
  "Sports",
  "News",
  "Romance",
  "Movie",
  "Entertainment",
];

const UploadVideo = () => {
  const [video, setVideo] = useState<File | null>(null);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState<number | null>(null);

  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const xhrRef = useRef<XMLHttpRequest | null>(null);

  /* ================= VIDEO DURATION ================= */
  const handleVideoSelect = (file: File) => {
    setVideo(file);
    const v = document.createElement("video");
    v.preload = "metadata";
    v.src = URL.createObjectURL(file);
    v.onloadedmetadata = () => {
      setDuration(Math.floor(v.duration));
      URL.revokeObjectURL(v.src);
    };
  };

  /* ================= GET SIGNATURE ================= */
  const getSignature = async () => {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/cloudinary-sign`,
      {},
      { withCredentials: true }
    );
    return data;
  };

  /* ================= CLOUDINARY UPLOAD ================= */
  const uploadToCloudinary = (
    file: File,
    signed: any,
    resourceType: "video" | "image",
    onProgress?: (p: number) => void
  ) => {
    return new Promise<any>((resolve, reject) => {
      const form = new FormData();
      form.append("file", file);
      form.append("api_key", signed.apiKey);
      form.append("timestamp", signed.timestamp);
      form.append("signature", signed.signature);
      form.append("folder", signed.folder);

      const xhr = new XMLHttpRequest();
      xhrRef.current = xhr;

      xhr.open(
        "POST",
        `https://api.cloudinary.com/v1_1/${signed.cloudName}/${resourceType}/upload`
      );

      xhr.responseType = "json";

      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable && onProgress) {
          onProgress(Math.round((e.loaded / e.total) * 100));
        }
      };

      xhr.onload = () => {
        if (xhr.status === 200 && xhr.response?.secure_url) {
          resolve(xhr.response);
        } else {
          reject(xhr.response);
        }
      };

      xhr.onerror = () => reject("Network error");

      xhr.send(form);
    });
  };

  /* ================= MAIN UPLOAD ================= */
  const handleUpload = async () => {
    if (!video || !thumbnail) return alert("Video & thumbnail required");
    if (!title || !category || !duration)
      return alert("Missing required fields");

    try {
      setLoading(true);
      setProgress(0);

      const signed = await getSignature();

      /* 🎬 VIDEO UPLOAD */
      const videoRes = await uploadToCloudinary(
        video,
        signed,
        "video",
        setProgress
      );

      /* 🖼 THUMBNAIL UPLOAD */
      const thumbRes = await uploadToCloudinary(thumbnail, signed, "image");

      /* 💾 SAVE TO BACKEND */
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/videos`,
        {
          title,
          category,
          duration,
          videoUrl: videoRes.secure_url,
          thumbnailUrl: thumbRes.secure_url,
          cloudinaryVideoId: videoRes.public_id,
          cloudinaryThumbId: thumbRes.public_id,
        },
        { withCredentials: true }
      );

      alert("✅ Video & thumbnail uploaded successfully");
      resetForm();
    } catch (err) {
      console.error(err);
      alert("❌ Upload failed");
      setLoading(false);
    }
  };

  const resetForm = () => {
    setVideo(null);
    setThumbnail(null);
    setTitle("");
    setCategory("");
    setDuration(null);
    setProgress(0);
    setLoading(false);
  };

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-10">
      <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-2xl space-y-6">
        <h1 className="text-3xl font-bold">Upload Video</h1>

        <input
          type="file"
          accept="video/*"
          onChange={(e) =>
            e.target.files && handleVideoSelect(e.target.files[0])
          }
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
        />

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 bg-zinc-800 rounded"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 bg-zinc-800 rounded"
        >
          <option value="">Select category</option>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        {duration && (
          <div className="text-sm text-zinc-400">
            ⏱ {Math.floor(duration / 60)}:
            {(duration % 60).toString().padStart(2, "0")}
          </div>
        )}

        {loading && (
          <div className="w-full bg-zinc-700 h-3 rounded">
            <div
              className="bg-blue-600 h-3 rounded"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={loading}
          className="w-full py-3 bg-blue-600 rounded-xl flex justify-center gap-2"
        >
          {loading ? <Loader2 className="animate-spin" /> : <UploadCloud />}
          Upload
        </button>

        {loading && (
          <button
            onClick={() => xhrRef.current?.abort()}
            className="w-full py-2 bg-yellow-600 rounded"
          >
            <Pause /> Pause
          </button>
        )}
      </div>
    </div>
  );
};

export default UploadVideo;
