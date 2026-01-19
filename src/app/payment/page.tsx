const page = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#1a1a1a] rounded-2xl p-6 md:p-10 shadow-xl">
        {/* Premium */}
        <div className="bg-gradient-to-b from-[#1f1f1f] to-[#141414] rounded-xl p-6 flex flex-col">
          <p className="text-yellow-400 text-sm font-semibold mb-2">
            Unlimited viewing without ads
          </p>

          <h2 className="text-2xl font-bold mb-2">ABEMA Premium</h2>

          <p className="text-3xl font-bold mb-6">
            ¥1,080 <span className="text-base font-normal">/month</span>
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg mb-6 transition">
            Register
          </button>

          <ul className="space-y-3 text-sm text-gray-200">
            <li>✔ Unlimited Premium exclusive content</li>
            <li>✔ No ads</li>
            <li>✔ Playback during broadcast</li>
            <li>✔ Available for download</li>
            <li>✔ 2 simultaneous devices</li>
          </ul>
        </div>

        {/* Premium with ads */}
        <div className="bg-gradient-to-b from-[#1f1f1f] to-[#141414] rounded-xl p-6 flex flex-col">
          <p className="text-yellow-400 text-sm font-semibold mb-2">
            Enjoy great deals
          </p>

          <h2 className="text-2xl font-bold mb-2">ABEMA Premium with ads</h2>

          <p className="text-3xl font-bold mb-6">
            ¥580 <span className="text-base font-normal">/month</span>
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg mb-6 transition">
            Register
          </button>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>✔ Unlimited Premium content</li>
            <li>🔒 Contains ads</li>
            <li>🔒 No chase playback</li>
            <li>🔒 Download unavailable</li>
            <li>🔒 1 viewing device</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default page;
