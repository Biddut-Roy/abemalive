import { newsData } from "@/lib/news/news";
import { notFound } from "next/navigation";

export default function NewsDetails({ params }: { params: { slug: string } }) {
  const news = newsData.find((n) => n.slug === params.slug);
  if (!news) return notFound();

  return (
    <article className="container mx-auto px-4 py-16 max-w-3xl">
      <span className="text-sm text-primary font-semibold">
        {news.category}
      </span>

      <h1 className="text-3xl font-bold mt-2 mb-6">{news.title}</h1>

      <img src={news.image} alt={news.title} className="rounded-xl mb-8" />

      <p className="text-muted-foreground leading-relaxed">{news.content}</p>
    </article>
  );
}
