"use client";

import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useOptimistic, useState } from "react";
import { switchLike } from "../../lib/actions";

function PostInteractions({
  postId,
  likes,
  commentNumber,
}: {
  postId: number;
  likes: string[];
  commentNumber: number;
}) {
  const { userId } = useAuth();

  const [likeState, setLikeState] = useState({
    likeCount: likes.length,
    isLiked: userId && likes.includes(userId) ? true : false,
  });

  const [optimisticLike, switchOptimisticLike] = useOptimistic(
    likeState,
    (state, value) => {
      return {
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
        isLiked: !state.isLiked,
      };
    }
  );

  const handleLike = async () => {
    try {
      switchOptimisticLike("");
      await switchLike(postId);

      if (likeState.isLiked) {
        setLikeState({
          likeCount: likeState.likeCount - 1,
          isLiked: false,
        });
      } else {
        setLikeState({
          likeCount: likeState.likeCount + 1,
          isLiked: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex  justify-between items-center text-sm my-2">
      <div className="flex gap-2 md:gap-8 ">
        <div className="flex gap-4 items-center bg-slate-100 p-2 rounded-xl">
          <Image
            src={
              optimisticLike.isLiked ? "/assets/liked.png" : "/assets/like.png"
            }
            width={16}
            height={16}
            alt="like"
            className="cursor-pointer"
            onClick={handleLike}
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-600">
            {optimisticLike.likeCount}{" "}
            <span className="hidden md:inline">
              Like{optimisticLike.likeCount > 1 ? "s" : ""}{" "}
            </span>
          </span>
        </div>

        <div className="flex gap-4 items-center bg-slate-100 p-2 rounded-xl">
          <Image
            src={"/assets/comment.png"}
            width={16}
            height={16}
            alt="like"
            className="cursor-pointer"
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-600">
            55 <span className="hidden md:inline">Comments</span>
          </span>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-4 items-center bg-slate-100 p-2 rounded-xl">
          <Image
            src={"/assets/share.png"}
            width={14}
            height={14}
            alt="like"
            className="cursor-pointer"
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-600">
            <span className="hidden md:inline"> Share</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default PostInteractions;
