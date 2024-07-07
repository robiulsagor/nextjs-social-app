import Image from "next/image";
import Link from "next/link";

function UserInfoCard({ userId }: { userId: string }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-4 text-sm text-gray-700">
      {/* top */}
      <div className="font-medium flex items-center justify-between text-sm">
        <span className="text-gray-500">User Informantion</span>
        <Link href="/" className="text-blue-500 hover:underline">
          See all{" "}
        </Link>
      </div>

      {/* Name */}
      <div className="flex gap-2 items-center">
        <h1 className="text-xl font-semibold text-gray-950">Sagor Islam</h1>
        <span className="text-gray-500 text-sm cursor-pointer hover:underline">
          @sagor.islam
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-700 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sunt
        culpa eum!
      </p>

      {/* history */}
      {/* Live */}
      <div className="flex items-center gap-2 ">
        <Image src={"/assets/map.png"} width={16} height={16} alt="map" />
        <p>
          Living in <span className="font-semibold">Bagerhat</span>
        </p>
      </div>

      {/* shcool */}
      <div className="flex items-center gap-2 ">
        <Image src={"/assets/school.png"} width={16} height={16} alt="map" />
        <p>
          Went to <span className="font-semibold">Govt PC College</span>
        </p>
      </div>

      {/* work */}
      <div className="flex items-center gap-2 ">
        <Image src={"/assets/work.png"} width={16} height={16} alt="map" />
        <p>
          Works at <span className="font-semibold">Web Developer</span>
        </p>
      </div>

      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-1">
          <Image src={"/assets/link.png"} width={16} height={16} alt="map" />
          <Link href="/" className="text-blue-500 font-semibold">
            sagor.dev
          </Link>
        </div>

        <div className="flex items-center gap-1">
          <Image src="/assets/date.png" width={16} height={16} alt="map" />
          <span>Joined June 2022</span>
        </div>
      </div>

      <button className="bg-blue-600 text-white border-none rounded-lg p-2  hover:opacity-75 transition-all">
        Following
      </button>

      <button className="flex justify-end text-red-400 text-xs font-medium cursor-pointer">
        Block User
      </button>
    </div>
  );
}

export default UserInfoCard;
