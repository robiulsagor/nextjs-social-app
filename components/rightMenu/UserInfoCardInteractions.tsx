"use client";

import { useOptimistic, useState } from "react";
import { switchBlocked, switchFollowing } from "../../lib/actions";

function UserInfoCardInteractions({
  userId,
  currentUserId,
  isBlocked,
  isFollowing,
  isFollowingSent,
}: {
  userId: string;
  currentUserId: string;
  isBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}) {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isBlocked,
    followingSent: isFollowingSent,
  });

  const follow = async () => {
    switchOptimisticState("follow");
    try {
      await switchFollowing(userId);

      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followingSent: !prev.following && !prev.followingSent ? true : false,
      }));
    } catch (error) {
      console.log("error");
    }
  };

  const block = async () => {
    switchOptimisticState("block");
    try {
      await switchBlocked(userId);

      setUserState((prev) => ({
        ...prev,
        blocked: !prev.blocked,
      }));
    } catch (error) {
      console.log("error");
    }
  };

  const [optimisticState, switchOptimisticState] = useOptimistic(
    userState,
    (state, value: "follow" | "block") =>
      value === "follow"
        ? {
            ...state,
            following: state.following && false,
            followingSent:
              !state.following && !state.followingSent ? true : false,
          }
        : { ...state, blocked: !state.blocked }
  );

  return (
    <>
      <form action={follow}>
        <button className="w-full bg-blue-600 text-white border-none rounded-lg p-2  hover:opacity-75 transition-all">
          {optimisticState.following
            ? "Following"
            : optimisticState.followingSent
            ? "Friend Request Sent"
            : "Follow"}
        </button>
      </form>

      <form action={block} className="self-end">
        <button className="text-red-400 text-xs font-medium cursor-pointer">
          {optimisticState.blocked ? "Unblock" : "Block User"}
        </button>
      </form>
    </>
  );
}

export default UserInfoCardInteractions;
