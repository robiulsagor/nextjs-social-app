import Image from "next/image";

function Ad({ size }: { size?: "sm" | "md" | "lg" }) {
  return (
    <div className="p-4 rounded-lg shadow-md  bg-white text-sm">
      {/* top */}
      <div className="flex justify-between items-center">
        <span className="text-gray-500 ">Sponsored Ads</span>
        <Image
          src={"/assets/more.png"}
          width={20}
          height={20}
          alt="more"
          className="cursor-pointer"
        />
      </div>

      {/* ad */}
      <div className={`flex flex-col mt-2 ${size == "sm" ? "gap-2" : "gap-4"}`}>
        <div
          className={`mt-3 relative ${
            size == "sm" ? "h-24" : size == "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=600"
            fill
            alt="ad"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=600"
            width={24}
            height={24}
            alt="ad"
            className="object-cover rounded-full w-6 h-6"
          />

          <span className="text-blue-600 font-medium ">BigChef Lounge</span>
        </div>
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        expedita, est placeat, ad vero error ipsum praesentium sapiente debitis
        facilis quasi quis commodi dignissimos cupiditate itaque nemo,
        voluptatem nisi asperiores aperiam veniam rem. Asperiores eligendi sit
        officiis facilis fugit vero! */}
        <p>
          {size == "sm"
            ? " Lorem ipsum dolor sit amet consectetur adipisicing elit."
            : size == "md"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam expedita, est placeat, ad vero error ipsum praesentium sapiente debitis."
            : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam expedita, est placeat, ad vero error ipsum praesentium sapiente debitis facilis quasi quis commodi dignissimos cupiditate itaque nemo, voluptatem nisi asperiores aperiam veniam rem."}
        </p>

        <button className="bg-gray-200 text-gray-500 text-xs border-none rounded-lg p-2 ">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Ad;
