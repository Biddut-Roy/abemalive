"use client";

import {
  Home,
  TrendingUp,
  Film,
  Newspaper,
  Trophy,
  Lightbulb,
  Shirt,
  Earth,
  PlaySquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen?: boolean;
  selectedCategory?: string;
  setSelectedCategory?: (category: string) => void;
}

const categories = [
  { name: "All", icon: Home },
  { name: "Popular Shows", icon: TrendingUp },
  { name: "Anime", icon: Earth },
  { name: "Drama", icon: Film },
  { name: "News", icon: Newspaper },
  { name: "Top Host", icon: Trophy },
  { name: "Coming Soon", icon: Lightbulb },
  { name: "Shop", icon: Shirt },
];

const personalMenu = [{ name: "Live", icon: PlaySquare }];

export default function Sidebar({
  isOpen = true,
  selectedCategory = "All",
  setSelectedCategory,
}: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-[#0f0f0f] border-r border-gray-800 transition-all duration-300 z-40 overflow-y-auto scrollbar-thin",
        isOpen ? "w-40 md:w-52 lg:w-64" : "w-16"
      )}
    >
      <div className="p-2">
        {/* Main Navigation */}
        <div className="space-y-1 mb-4">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="ghost"
              className={cn(
                "w-full justify-start text-white hover:bg-gray-800 h-10",
                selectedCategory === category.name && "bg-gray-800"
              )}
              onClick={() => setSelectedCategory?.(category.name)}
            >
              <category.icon className="h-5 w-5 shrink-0" />
              {isOpen && <span className="ml-6 truncate">{category.name}</span>}
            </Button>
          ))}
        </div>

        {isOpen && (
          <>
            <div className="border-t border-gray-800 pt-4 mb-4">
              <h3 className="px-3 mb-2 text-sm font-medium text-gray-400 uppercase tracking-wider">
                Live Video
              </h3>
              <div className="space-y-1">
                {personalMenu.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="w-full justify-start text-white hover:bg-gray-800 h-10"
                  >
                    <item.icon className="h-5 w-2 md:w-3 lg:w-5 shrink-0" />
                    <span className="ml-6 truncate">{item.name}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Subscription section */}
            {/* <div className="border-t border-gray-800 pt-4">
              <h3 className="px-3 mb-2 text-sm font-medium text-gray-400 uppercase tracking-wider">
                Subscriptions
              </h3>
              <div className="space-y-1">
                {[
                  "Tech Reviews",
                  "Cooking Show",
                  "Gaming Central",
                  "Music Hub",
                ].map((channel) => (
                  <Button
                    key={channel}
                    variant="ghost"
                    className="w-full justify-start text-white hover:bg-gray-800 h-10"
                  >
                    <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shrink-0" />
                    <span className="ml-6 truncate">{channel}</span>
                  </Button>
                ))}
              </div>
            </div> */}
          </>
        )}
      </div>
    </aside>
  );
}
