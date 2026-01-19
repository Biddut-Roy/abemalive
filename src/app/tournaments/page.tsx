const tournaments = [
  { name: "NeoSport World Cup", date: "Aug 2026", prize: "$100K" },
  { name: "Asia Championship", date: "Oct 2026", prize: "$50K" },
  { name: "Street League", date: "Dec 2026", prize: "$25K" },
];

export default function TournamentsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-14">
        Upcoming <span className="text-primary">Tournaments</span>
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {tournaments.map((t, i) => (
          <div
            key={i}
            className="bg-card rounded-2xl p-8 hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-4">{t.name}</h3>
            <p className="text-gray-400">📅 {t.date}</p>
            <p className="text-primary font-semibold mt-4">
              Prize Pool: {t.prize}
            </p>
            <button className="mt-6 w-full bg-primary text-black py-2 rounded-full font-semibold">
              Register
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
