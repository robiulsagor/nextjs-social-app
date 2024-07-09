"use client";

import { useOptimistic, useState } from "react";
import { switchFollowing } from "../../lib/actions";

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
    switchOptimisticFollow("");
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

  const [optimisticFollow, switchOptimisticFollow] = useOptimistic(
    userState,
    (state) => {
      return {
        ...state,
        following: state.following && false,
        followingSent: !state.following && !state.followingSent ? true : false,
      };
    }
  );

  return (
    <>
      <form action={follow}>
        <button className="w-full bg-blue-600 text-white border-none rounded-lg p-2  hover:opacity-75 transition-all">
          {optimisticFollow.following
            ? "Following"
            : optimisticFollow.followingSent
            ? "Friend Request Sent"
            : "Follow"}
        </button>
      </form>

      <form action="" className="self-end">
        <button className="text-red-400 text-xs font-medium cursor-pointer">
          {isBlocked ? "Unblock" : "Block User"}
        </button>
      </form>
    </>
  );
}

export default UserInfoCardInteractions;
