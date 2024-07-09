import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import Feed from "../../../components/Feed";
import LeftMenu from "../../../components/LeftMenu";
import RightMenu from "../../../components/RightMenu";
import prisma from "../../../lib/client";

async function ProfilePage({ params }: { params: { username: string } }) {
  const username = params.username;

  const user = await prisma.user.findFirst({
    where: {
      username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          following: true,
          posts: true,
        },
      },
    },
  });

  if (!user) return notFound();

  const { userId: currentUser } = auth();

  let isBlocked;

  if (currentUser) {
    const res = await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentUser,
      },
    });

    if (res) isBlocked = true;
  } else {
    isBlocked = false;
  }

  if (isBlocked) return notFound();

  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%] ">
        <LeftMenu page="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%] ">
        <div className="flex flex-col gap-5">
          <div className="flex justify-center  flex-col">
            {/* cover and profile img */}
            <div className="relative h-64 ">
              <Image
                src={user?.cover || "/assets/noCover.jpg"}
                fill
                alt="cover image"
                className="object-cover rounded-lg"
              />
              <Image
                src={user?.avatar || "/assets/noAvatar.png"}
                alt="profile image"
                width={128}
                height={128}
                className="object-cover rounded-full w-32 h-32 absolute right-0 left-0 mx-auto -bottom-16 border-2 border-white"
              />
            </div>

            {/* name and bio */}
            <div>
              <h2 className="font-semibold text-2xl text-center mt-20 mb-4">
                {user.name && user.surname
                  ? user.name + " " + user.surname
                  : user.username}
              </h2>
              <div className="flex items-center justify-center gap-5 mb-4">
                <div className="flex flex-col items-center">
                  <span className="md:text-lg font-semibold text-gray-600">
                    {user._count.posts}
                  </span>
                  <span className="text-gray-500 text-sm md:text-base">
                    Posts
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <span className="md:text-lg font-semibold text-gray-500">
                    {user._count.followers}
                  </span>
                  <span className="text-gray-500 text-sm md:text-base">
                    Followers
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <span className="md:text-lg font-semibold text-gray-500">
                    {user._count.following}
                  </span>
                  <span className="text-gray-500 text-sm md:text-base">
                    Following
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%] ">
        <RightMenu user={user} />
      </div>
    </div>
  );
}

export default ProfilePage;
