"use client";

import { News } from "@/lib/news/news";
import { motion } from "framer-motion";
import Link from "next/link";

const FeaturedNews = ({ news }: { news: News[] }) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">🔥 Featured News</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {news.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03 }}
            className="rounded-xl overflow-hidden bg-card border shadow-md"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-5 space-y-3">
              <span className="text-xs text-primary font-semibold">
                {item.category}
              </span>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.excerpt}</p>

              <Link
                href={`/news/${item.slug}`}
                className="inline-block text-sm font-medium text-primary"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedNews;
