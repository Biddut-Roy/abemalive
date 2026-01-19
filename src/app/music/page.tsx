import Sidebar from "@/components/music/Sidebar";
import Trending from "@/components/music/Trending";

const page = () => {
  return (
    <div className="mt-20 flex min-h-screen">
      <Sidebar />
      <Trending />
    </div>
  );
};

export default page;
