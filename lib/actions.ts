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

export const switchBlocked = async (userId: string) => {
  const { userId: currentUserId } = auth();
  try {
    const existingBlock = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: userId,
      },
    });

    if (existingBlock) {
      await prisma.block.delete({
        where: {
          id: existingBlock.id,
        },
      });
    } else {
      await prisma.block.create({
        data: {
          blockerId: currentUserId,
          blockedId: userId,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const accpectRequest = async (userId: string) => {
  try {
    const { userId: currentUserId } = auth();

    const followReq = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        receiverId: currentUserId,
      },
    });

    if (followReq) {
      await prisma.followRequest.delete({
        where: {
          id: followReq.id,
        },
      });

      await prisma.follower.create({
        data: {
          followerId: userId,
          followingId: currentUserId,
        },
      });
    }
  } catch (error) {
    console.log("Error accepting request:: ", error);
    return new Error("spmetj");
  }
};

export const removeRequest = async (id: number) => {
  try {
    await prisma.followRequest.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
