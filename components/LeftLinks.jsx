import Image from "next/image";

const LeftLinks = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-4 text-sm text-gray-500 transition-all">
      <div className="flex items-center gap-4 hover:bg-slate-100 p-2 rounded-lg cursor-pointer">
        <Image src={"/assets/posts.png"} width={20} height={20} alt="posts" />
        <span className="">Posts</span>
      </div>

      <div className="flex items-center gap-4 hover:bg-slate-100 p-2 rounded-lg cursor-pointer">
        <Image
          src={"/assets/activity.png"}
          width={20}
          height={20}
          alt="posts"
        />
        <span className="">Activity</span>
      </div>

      <div className="flex items-center gap-4 hover:bg-slate-100 p-2 rounded-lg cursor-pointer">
        <Image src={"/assets/market.png"} width={20} height={20} alt="posts" />
        <span className="">MarketPlace</span>
      </div>

      <div className="flex items-center gap-4 hover:bg-slate-100 p-2 rounded-lg cursor-pointer">
        <Image src={"/assets/events.png"} width={20} height={20} alt="posts" />
        <span className="">Events</span>
      </div>
      <div className="flex items-center gap-4 hover:bg-slate-100 p-2 rounded-lg cursor-pointer">
        <Image src={"/assets/albums.png"} width={20} height={20} alt="posts" />
        <span className="">Albums</span>
      </div>
      <div className="flex items-center gap-4 hover:bg-slate-100 p-2 rounded-lg cursor-pointer">
        <Image src={"/assets/videos.png"} width={20} height={20} alt="posts" />
        <span className="">Videos</span>
      </div>
      <div className="flex items-center gap-4 hover:bg-slate-100 p-2 rounded-lg cursor-pointer">
        <Image src={"/assets/news.png"} width={20} height={20} alt="posts" />
        <span className="">News</span>
      </div>
      <div className="flex items-center gap-4 hover:bg-slate-100 p-2 rounded-lg cursor-pointer">
        <Image src={"/assets/courses.png"} width={20} height={20} alt="posts" />
        <span className="">Courses</span>
      </div>
      <div className="flex items-center gap-4 hover:bg-slate-100 p-2 rounded-lg cursor-pointer">
        <Image src={"/assets/gift.png"} width={20} height={20} alt="posts" />
        <span className="">Gifts</span>
      </div>
      <div className="flex items-center gap-4 hover:bg-slate-100 p-2 rounded-lg cursor-pointer">
        <Image
          src={"/assets/settings.png"}
          width={24}
          height={24}
          alt="posts"
        />
        <span className="">Settings</span>
      </div>
    </div>
  );
};

export default LeftLinks;
