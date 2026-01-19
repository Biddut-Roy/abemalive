export type News = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  featured?: boolean;
};

export const newsData: News[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  slug: `breaking-news-${i + 1}`,
  title: `Breaking News Headline ${i + 1}`,
  excerpt:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  image: `https://picsum.photos/seed/news${i}/900/600`,
  category: ["Politics", "Tech", "Business", "Sports"][i % 4],
  date: "Jan 2, 2026",
  featured: i < 3,
}));
