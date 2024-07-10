import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import prisma from "../../lib/client";

async function UserMediaCard({ user }: { user: User }) {
  const postMedias = await prisma.post.findMany({
    where: {
      userId: user.id,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-4">
      {/* top */}
      <div className="font-medium flex items-center justify-between text-sm">
        <span className="text-gray-500">User Media</span>
        {postMedias?.length > 0 && (
          <Link href="/" className="text-blue-500 hover:underline">
            See all{" "}
          </Link>
        )}
      </div>

      {/* Bottom */}
      <div className="flex flex-wrap gap-4 ">
        {postMedias?.length ? (
          <div className="relative w-1/5 h-20">
            <Image
              src={
                "https://images.pexels.com/photos/26771975/pexels-photo-26771975/free-photo-of-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              }
              fill
              alt="img"
              className="object-cover rounded-md"
            />
          </div>
        ) : (
          "No media found!"
        )}
      </div>
    </div>
  );
}

export default UserMediaCard;
