import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import prisma from "../../lib/client";

async function ProfileCard() {
  const { userId } = auth();

  if (!userId) return null;

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });

  if (!user) return null;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-4  ">
      <div className="relative w-full h-20">
        <Image
          src={user?.cover || "/assets/noCover.jpg"}
          fill
          alt="img"
          className="object-cover rounded-md"
        />

        <Image
          src={user?.avatar || "/assets/noAvatar.png"}
          width={48}
          height={48}
          alt="profile"
          className="w-12 h-12 rounded-full object-cover absolute right-0 left-0 mx-auto -bottom-6 border-2 border-white"
        />
      </div>

      <span className="font-semibold text-xl text-center mt-2">
        {user.name && user.surname
          ? user.name + " " + user.surname
          : user.username}
      </span>

      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-1">
          <Image
            src={
              "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            width={12}
            height={12}
            alt="profile"
            className="w-3 h-3 rounded-full object-cover "
          />
          <Image
            src={
              "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            width={12}
            height={12}
            alt="profile"
            className="w-3 h-3 rounded-full object-cover "
          />
          <Image
            src={
              "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            width={12}
            height={12}
            alt="profile"
            className="w-3 h-3 rounded-full object-cover "
          />
        </div>

        <span className="text-gray-500 text-xs">
          {" "}
          {user._count.followers} Followers
        </span>
      </div>

      <div className="flex justify-center">
        <Link
          href={`/profile/${user.username}`}
          className="p-2 text-xs bg-blue-500 text-white rounded-md"
        >
          My Profile
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
