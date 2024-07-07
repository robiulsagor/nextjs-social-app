import Image from "next/image";
import Link from "next/link";

function Birthdays() {
  return (
    <div className="p-4 rounded-lg shadow-md  bg-white flex flex-col gap-5">
      <span className="text-gray-500 text-sm">Birthdays</span>

      <div className="flex justify-between items-center ">
        <div className="flex gap-4 items-center">
          <Image
            src="https://images.pexels.com/photos/13464716/pexels-photo-13464716.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={40}
            height={40}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          <span className="font-semibold text-sm">Akash Barman</span>
        </div>

        <button className="bg-blue-600 text-white text-xs border-none rounded-lg p-[5.5px] hover:opacity-75 transition-all">
          Celebrate
        </button>
      </div>

      <div className="bg-slate-100 flex items-center justify-normal gap-4 rounded-lg p-4">
        <Image
          src={"/assets/gift.png"}
          width={28}
          height={28}
          alt="gift"
          className="cursor-pointer"
        />
        <Link href={"/"} className="flex flex-col gap-1 hover:underline">
          <h2 className=" text-gray-700 text-sm font-semibold">
            Upcoming Birthdays
          </h2>
          <span className="text-xs text-gray-500">
            See other 16 have upcoming birthdays
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Birthdays;
