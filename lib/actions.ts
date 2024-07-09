"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";

export const switchFollowing = async (userId: string) => {
  const { userId: currentUserId } = auth();

  try {
    const existingFollow = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });

    if (existingFollow) {
      await prisma.follower.delete({
        where: {
          id: existingFollow.id,
        },
      });
    } else {
      const followReq = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          receiverId: userId,
        },
      });

      if (followReq) {
        await prisma.followRequest.delete({
          where: {
            id: followReq.id,
          },
        });
      } else {
        await prisma.followRequest.create({
          data: {
            senderId: currentUserId,
            receiverId: userId,
          },
        });
      }
    }
  } catch (error) {
    console.log("Error:: ", error);
    throw new Error(" Error occured while following ");
  }
};
