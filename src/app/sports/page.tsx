const page = () => {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Welcome to <span className="text-primary">NextSport</span>
            </h1>
            <p className="mt-6 text-gray-400 text-lg">
              A brand-new futuristic sport designed for speed, power and
              strategy.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <button className="bg-primary text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
                Join Now
              </button>
              <button className="border border-gray-600 px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary rounded-3xl blur-3xl opacity-30"></div>
            <div className="relative bg-card rounded-3xl p-12 text-center">
              <p className="text-xl font-bold">Fast • Competitive • Global</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 bg-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Why NextSport?
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            ["High Energy", "Fast-paced gameplay with constant action."],
            ["Team Based", "Win with teamwork and smart strategies."],
            ["Global Ready", "Play anywhere, anytime, worldwide."],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="bg-card p-8 rounded-2xl hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                {title}
              </h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            ["150+", "Countries"],
            ["50K+", "Players"],
            ["24/7", "Live Matches"],
            ["5v5", "Game Mode"],
          ].map(([num, label], i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold text-primary">{num}</h3>
              <p className="text-gray-400 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6 bg-black">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Enter the Arena?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Become part of the fastest growing new-age sport.
        </p>
        <button className="bg-primary text-black px-12 py-4 rounded-full font-semibold hover:scale-110 transition">
          Get Started
        </button>
      </section>
    </main>
  );
};

export default page;
