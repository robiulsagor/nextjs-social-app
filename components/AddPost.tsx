import Image from "next/image";

function AddPost() {
  return (
    <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
      {/* avatar */}
      <Image
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
        width={48}
        height={48}
        alt="profile"
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* Post */}
      <div className="flex-1 ">
        {/* Text area */}
        <div className="flex gap-4 items-end">
          <textarea
            name=""
            id=""
            placeholder="What's on your mind?"
            className="w-full focus:outline-none bg-slate-100 rounded-md p-2"
          ></textarea>
          <Image
            src={"/assets/emoji.png"}
            width={20}
            height={20}
            alt="emoji"
            className="cursor-pointer"
          />
        </div>

        {/* Post options */}
        <div className="flex gap-4 py-4 text-slate-400 flex-wrap">
          <div className="flex gap-2 items-center cursor-pointer hover:text-slate-900 transition-all duration-300">
            <Image
              src={"/assets/addimage.png"}
              width={22}
              height={22}
              alt="addimage"
            />
            <span>Photo</span>
          </div>
          <div className="flex gap-2 items-center cursor-pointer hover:text-slate-900 transition-all duration-300">
            <Image
              src={"/assets/addVideo.png"}
              width={22}
              height={22}
              alt="addimage"
            />
            <span>Video</span>
          </div>
          <div className="flex gap-2 items-center cursor-pointer hover:text-slate-900 transition-all duration-300">
            <Image
              src={"/assets/poll.png"}
              width={22}
              height={22}
              alt="addimage"
            />
            <span>Polls</span>
          </div>
          <div className="flex gap-2 items-center cursor-pointer hover:text-slate-900 transition-all duration-300">
            <Image
              src={"/assets/events.png"}
              width={22}
              height={22}
              alt="addimage"
            />
            <span>Events</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
