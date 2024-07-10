"use client";

import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";
import { useOptimistic, useState } from "react";
import { accpectRequest } from "../../lib/actions";

type Requests = FollowRequest & {
  followRequestSender: User;
};

function FriendRequestLists({ requests }: { requests: Requests[] }) {
  const [requList, setRequList] = useState(requests);

  const accept = async (userId: string, id: number) => {
    try {
      removeOptimisticRequests(id);
      await accpectRequest(userId);
      setRequList((prev) => prev.filter((req) => req.id !== id));
    } catch (error) {
      console.log("error accepting request in client:: ", error);
    }
  };

  const reject = async (id: number) => {
    try {
      removeOptimisticRequests(id);
      setRequList((prev) => prev.filter((req) => req.id !== id));
    } catch (error) {
      console.log("error rejecting request in client:: ", error);
    }
  };

  const [optimisticRequests, removeOptimisticRequests] = useOptimistic(
    requList,
    (state, value) => state.filter((req) => req.id !== value)
  );
  return (
    <>
      {optimisticRequests.map((request) => (
        <div className="flex justify-between items-center" key={request.id}>
          <div className="flex gap-4 items-center">
            <Image
              src={request.followRequestSender.avatar || "/assets/noAvatar.png"}
              width={40}
              height={40}
              alt="profile"
              className="w-10 h-10 rounded-full object-cover"
            />

            <span className="font-semibold">
              {request.followRequestSender.name &&
              request.followRequestSender.surname
                ? request.followRequestSender.name +
                  " " +
                  request.followRequestSender.surname
                : request.followRequestSender.username}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <form action={() => accept(request.senderId, request.id)}>
              <button>
                <Image
                  src="/assets/accept.png"
                  width={20}
                  height={20}
                  alt="profile"
                  className="cursor-pointer"
                />
              </button>
            </form>

            <form action={() => reject(request.id)}>
              <button>
                <Image
                  src="/assets/reject.png"
                  width={20}
                  height={20}
                  alt="profile"
                  className="cursor-pointer"
                />
              </button>
            </form>
          </div>
        </div>
      ))}
    </>
  );
}

export default FriendRequestLists;
