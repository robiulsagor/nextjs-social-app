import Image from "next/image";

function Comments() {
  return (
    <div className="">
      {/* WRITE */}
      <div className="flex items-center gap-4 my-4">
        <Image
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
          width={32}
          height={32}
          alt="profile"
          className="w-8 h-8 rounded-full object-cover"
        />

        <div className="flex-1 bg-slate-100 rounded-xl flex items-center gap-2 px-4 py-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Write a comment"
            className="w-full focus:outline-none bg-transparent rounded-md p-2 text-sm"
          />
          <Image
            src="/assets/emoji.png"
            width={20}
            height={20}
            alt="profile"
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* COMMENTS */}
      <div>
        {/* COMMENT */}
        <div className="flex gap-4  items-start">
          {/* AVATAR */}
          <Image
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
            width={32}
            height={32}
            alt="profile"
            className="w-8 h-8 rounded-full object-cover"
          />

          {/* DESCRIPTION */}
          <div className="flex-1 flex flex-col gap-2">
            <span className="font-medium">Sagar Islam</span>
            <p className="text-slate-700 text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae nihil culpa eos porro, esse officiis commodi harum
              vero molestias ratione!
            </p>

            <div className="text-xs text-gray-500 flex items-center gap-5 ">
              <div className="flex items-center gap-2">
                {/* like button */}
                <Image
                  src={"/assets/like.png"}
                  width={16}
                  height={16}
                  alt="like"
                  className="cursor-pointer"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">5 Likes</span>
              </div>

              <div>Reply</div>
            </div>
          </div>

          {/* OPTIONS */}
          <Image
            src={"/assets/more.png"}
            width={16}
            height={16}
            alt="more"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Comments;
