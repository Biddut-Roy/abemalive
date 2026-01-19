"use client";

import { useState } from "react";
import { Menu, Search, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Live", href: "/live" },
    { label: "Shows", href: "/shows" },
    { label: "Music", href: "/music" },
    { label: "Anime", href: "/anime" },
    { label: "Drama", href: "/drama" },
    { label: "Sports", href: "/sports" },
    { label: "News", href: "/news" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-black text-xl transition-transform group-hover:scale-105">
                A
              </div>
              <span className="text-2xl font-bold tracking-tight">ABEMA</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-300 hover:text-white hover:bg-white/10"
            >
              {isSearchOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Search className="w-5 h-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white hover:bg-white/10"
            >
              <a href="/auth">
                <User className="w-5 h-5" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-300 hover:text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>

            <Button className="hidden md:flex bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-medium">
              <a href="/auth">Premium</a>
            </Button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="pb-4 animate-in slide-in-from-top-2">
            <Input
              type="search"
              placeholder="Search shows, channels, genres..."
              className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:bg-white/10"
              autoFocus
            />
          </div>
        )}
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-black/98 animate-in slide-in-from-top-4">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                {item.label}
              </a>
            ))}
            <Button className="mt-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-medium">
              <a href="/auth"> Try Premium</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
