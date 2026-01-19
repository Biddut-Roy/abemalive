"use client";

import { Search, Menu, Video, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onMenuClick: () => void;
}

export default function Header({
  searchQuery,
  setSearchQuery,
  onMenuClick,
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f] border-b border-gray-800">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="text-white hover:bg-gray-800"
          >
            <Menu className="h-6 w-6" />
          </Button>

          <div className="flex items-center gap-1">
            <div className="bg-red-600 p-2 rounded">
              <Video className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Premium Show</span>
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-8">
          <div className="flex">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[#121212] border-gray-600 text-white placeholder-gray-400 rounded-l-full rounded-r-none border-r-0 focus:border-blue-500"
              />
            </div>
            <Button className="bg-[#222222] hover:bg-gray-700 text-white rounded-r-full rounded-l-none border border-gray-600 border-l-0 px-6">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-gray-800"
          >
            <Video className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-gray-800"
          >
            <Bell className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-gray-800"
          >
            <User className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
