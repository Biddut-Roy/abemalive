export interface Video {
  _id: string;

  title: string;
  category: string;
  uploader: string;

  duration: number; // seconds
  uploadedAt: string;

  // Cloudinary
  cloudinaryThumbId: string;
  cloudinaryVideoId: string;

  thumbnailUrl: string;
  videoUrl: string;
}

// types/video.ts
export interface VideoFormData {
  title: string;
  channel: string;
  views?: number;
  uploadedAt?: string;
  duration: number;
  thumbnail: string;
  description: string;
  likes?: number;
  subscribers?: number;
  category: string;
  url: string | undefined;
}

export interface Videos extends VideoFormData {
  id: string;
}
