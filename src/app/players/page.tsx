const players = [
  { name: "Ayaan Khan", role: "Striker", country: "India" },
  { name: "Leo Cruz", role: "Defender", country: "Spain" },
  { name: "Noah Park", role: "Playmaker", country: "Korea" },
  { name: "Amir Ali", role: "All-Rounder", country: "UAE" },
];

export default function PlayersPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-14">
        Top <span className="text-primary">Players</span>
      </h1>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {players.map((p, i) => (
          <div
            key={i}
            className="bg-card rounded-2xl p-6 text-center hover:-translate-y-2 transition"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary to-orange-400 mb-4"></div>
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-primary text-sm">{p.role}</p>
            <p className="text-gray-400 text-sm mt-1">{p.country}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
