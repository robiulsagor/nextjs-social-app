import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import prisma from "../../lib/client";
import UserInfoCardInteractions from "./UserInfoCardInteractions";

async function UserInfoCard({ user }: { user: User }) {
  const createdAt = new Date(user.createdAt);
  const formattedDate = createdAt.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const { userId: currentUserId } = auth();

  let isUserBlocked = false;
  let isUserFollowing = false;
  let isFollowingSent = false;

  if (currentUserId) {
    // for blockings
    const blockRes = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: user.id,
      },
    });

    blockRes ? (isUserBlocked = true) : (isUserBlocked = false);

    // for followings
    const followingRes = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: user.id,
      },
    });
    followingRes ? (isUserFollowing = true) : (isUserFollowing = false);

    // for following sent
    const followingSentRes = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: user.id,
      },
    });
    followingSentRes ? (isFollowingSent = true) : (isFollowingSent = false);
  }

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
        <h1 className="text-xl font-semibold text-gray-950">
          {" "}
          {user.name && user.surname
            ? user.name + " " + user.surname
            : user.username}
        </h1>
        <span className="text-gray-500 text-sm cursor-pointer hover:underline">
          @{user.username}
        </span>
      </div>

      {/* Description */}
      {user.description && (
        <p className="text-gray-700 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sunt
          culpa eum!
        </p>
      )}

      {/* history */}
      {/* Live */}

      {user.city && (
        <div className="flex items-center gap-2 ">
          <Image src={"/assets/map.png"} width={16} height={16} alt="map" />
          <p>
            Living in <span className="font-semibold">{user.city} </span>
          </p>
        </div>
      )}

      {/* shcool */}

      {user.school && (
        <div className="flex items-center gap-2 ">
          <Image src={"/assets/school.png"} width={16} height={16} alt="map" />
          <p>
            Went to <span className="font-semibold">{user.school} </span>
          </p>
        </div>
      )}

      {/* work */}
      {user.work && (
        <div className="flex items-center gap-2 ">
          <Image src={"/assets/work.png"} width={16} height={16} alt="map" />
          <p>
            Works at <span className="font-semibold">{user.work} </span>
          </p>
        </div>
      )}

      <div className="flex items-center gap-2 justify-between">
        {user.website && (
          <div className="flex items-center gap-1">
            <Image src={"/assets/link.png"} width={16} height={16} alt="map" />
            <Link href="/" className="text-blue-500 font-semibold">
              {user.website}
            </Link>
          </div>
        )}

        <div className="flex items-center gap-1">
          <Image src="/assets/date.png" width={16} height={16} alt="map" />
          <span>Joined {formattedDate}</span>
        </div>
      </div>

      {currentUserId && currentUserId !== user.id && (
        <UserInfoCardInteractions
          userId={user.id}
          isBlocked={isUserBlocked}
          isFollowing={isUserFollowing}
          isFollowingSent={isFollowingSent}
        />
      )}
    </div>
  );
}

export default UserInfoCard;
