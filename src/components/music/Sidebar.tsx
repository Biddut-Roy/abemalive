const Sidebar = () => {
  return (
    <aside className="w-64 bg-black p-6 hidden md:block">
      <h2 className="text-primary font-semibold mb-6">BROWSE</h2>

      <ul className="space-y-3 text-gray-400">
        <li className="bg-card text-white px-4 py-2 rounded-lg">Home</li>
        <li>Trending Songs</li>
        <li>Trending Albums</li>
        <li>Recently Added</li>
        <li>Accounts for You</li>
      </ul>

      <h2 className="text-primary font-semibold mt-10 mb-4">CHARTS</h2>
      <ul className="space-y-3 text-gray-400">
        <li>Top Songs</li>
        <li>Top Albums</li>
        <li>Top Artists</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
