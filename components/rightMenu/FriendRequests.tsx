import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import prisma from "../../lib/client";
import FriendRequestLists from "./FriendRequestLists";

async function FriendRequests() {
  const { userId: currentUserId } = auth();

  if (!currentUserId) return null;

  const requests = await prisma.followRequest.findMany({
    where: {
      receiverId: currentUserId,
    },
    include: {
      followRequestSender: true,
    },
  });

  if (!requests.length) return null;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="font-medium flex items-center justify-between">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 hover:underline">
          See all{" "}
        </Link>
      </div>

      <FriendRequestLists requests={requests} />
    </div>
  );
}

export default FriendRequests;
