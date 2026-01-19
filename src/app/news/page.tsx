"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { newsData } from "@/lib/news/news";
import FeaturedNews from "@/components/News/FeaturedNews/FeaturedNews";
import NewsCard from "@/components/News/NewsCard/NewsCard";
import { Pagination } from "@/components/ui/pagination";

const PER_PAGE = 8;

export default function NewsPage() {
  const [page, setPage] = useState(1);

  const featured = newsData.filter((n) => n.featured);
  const totalPages = Math.ceil(newsData.length / PER_PAGE);

  const paginated = newsData.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <main className="min-h-screen">
      <FeaturedNews news={featured} />

      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {paginated.map((news) => (
            <NewsCard key={news.id} {...news} description={news.excerpt} />
          ))}
        </motion.div>

        {/* <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        /> */}
      </section>
    </main>
  );
}
