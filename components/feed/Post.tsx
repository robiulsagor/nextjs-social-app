import Image from "next/image";
import Comments from "./Comments";

function Post() {
  return (
    <div className="flex flex-col gap-4 ">
      {/* USER */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
            width={40}
            height={40}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          <span className="font-medium">Sagar Islam</span>
        </div>
        {/* AVATAR */}

        <Image
          src={"/assets/more.png"}
          width={16}
          height={16}
          alt="more"
          className="cursor-pointer"
        />
      </div>

      {/* DETAILS */}
      <div className="flex flex-col gap-8">
        <div className="w-full min-h-96 relative">
          <Image
            src={
              "https://images.pexels.com/photos/3721535/pexels-photo-3721535.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            fill
            className="object-cover rounded-lg"
            alt="img"
          />
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam vel
          consectetur nam eveniet assumenda unde voluptate hic molestiae vitae
          ab distinctio porro reprehenderit blanditiis rerum, itaque,
          recusandae, quibusdam labore quae!
        </p>
      </div>

      {/* INTERACTIONS */}
      <div className="flex  justify-between items-center text-sm my-2">
        <div className="flex gap-2 md:gap-8 ">
          <div className="flex gap-4 items-center bg-slate-100 p-2 rounded-xl">
            <Image
              src={"/assets/like.png"}
              width={16}
              height={16}
              alt="like"
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-600">
              123 <span className="hidden md:inline">Likes</span>
            </span>
          </div>

          <div className="flex gap-4 items-center bg-slate-100 p-2 rounded-xl">
            <Image
              src={"/assets/comment.png"}
              width={16}
              height={16}
              alt="like"
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-600">
              55 <span className="hidden md:inline">Comments</span>
            </span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-4 items-center bg-slate-100 p-2 rounded-xl">
            <Image
              src={"/assets/share.png"}
              width={14}
              height={14}
              alt="like"
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-600">
              16<span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>

      {/* COMMENTS */}
      <Comments />
    </div>
  );
}

export default Post;
