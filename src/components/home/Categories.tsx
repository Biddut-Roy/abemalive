'use client';

import { Tv, Drama, Newspaper, Trophy, Heart, Mic, Film, Gamepad2 } from 'lucide-react';

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: 'Anime',
      icon: Tv,
      color: 'from-pink-500 to-rose-500',
      count: '500+ shows',
    },
    {
      id: 2,
      name: 'Drama',
      icon: Drama,
      color: 'from-blue-500 to-cyan-500',
      count: '300+ shows',
    },
    {
      id: 3,
      name: 'News',
      icon: Newspaper,
      color: 'from-red-500 to-orange-500',
      count: '24/7 live',
    },
    {
      id: 4,
      name: 'Sports',
      icon: Trophy,
      color: 'from-emerald-500 to-teal-500',
      count: '200+ events',
    },
    {
      id: 5,
      name: 'Romance',
      icon: Heart,
      color: 'from-purple-500 to-pink-500',
      count: '150+ shows',
    },
    {
      id: 6,
      name: 'Music',
      icon: Mic,
      color: 'from-yellow-500 to-orange-500',
      count: '100+ concerts',
    },
    {
      id: 7,
      name: 'Movies',
      icon: Film,
      color: 'from-slate-500 to-zinc-500',
      count: '400+ titles',
    },
    {
      id: 8,
      name: 'Gaming',
      icon: Gamepad2,
      color: 'from-cyan-500 to-blue-500',
      count: '50+ streams',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Browse by Category</h2>
        <p className="text-gray-400">Find your favorite content</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <a
              key={category.id}
              href={`/category/${category.name.toLowerCase()}`}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 transform group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-sm text-center">{category.name}</h3>
                  <p className="text-gray-400 text-xs mt-1">{category.count}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
