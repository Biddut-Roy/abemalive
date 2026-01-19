import SongCard from "./SongCard";

const songs = [
  { title: "Propose", artist: "Masoom Sharma", image: "/song1.jpg" },
  { title: "Dastaar", artist: "Varinder Brar", image: "/song2.jpg" },
  { title: "Changa Lagda", artist: "Hero", image: "/song3.jpg" },
  { title: "Uddi Uddi", artist: "Nimrat Khaira", image: "/song4.jpg" },
];

import React from "react";

const Trending = () => {
  return (
    <section className="flex-1 p-6 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">TRENDING SONGS</h1>
        <span className="text-primary cursor-pointer">VIEW ALL</span>
      </div>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
        {songs.map((song, index) => (
          <SongCard key={index} song={song} />
        ))}
      </div>
    </section>
  );
};

export default Trending;
