interface SongProps {
  song: {
    title: string;
    artist: string;
    image: string;
  };
}

export default function SongCard({ song }: SongProps) {
  return (
    <div className="min-w-[220px] bg-card rounded-xl overflow-hidden hover:scale-105 transition duration-300">
      <div className="relative">
        <img
          src={song.image}
          alt={song.title}
          className="w-full h-60 object-cover"
        />

        <button className="absolute bottom-3 right-3 bg-primary text-black w-12 h-12 rounded-full flex items-center justify-center text-lg">
          ▶
        </button>
      </div>

      <div className="p-4">
        <p className="font-semibold">{song.title}</p>
        <p className="text-sm text-gray-400">{song.artist}</p>
      </div>
    </div>
  );
}
