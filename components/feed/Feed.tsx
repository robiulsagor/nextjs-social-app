import { auth } from "@clerk/nextjs/server";
import prisma from "../../lib/client";
import SinglePost, { PostType } from "./SinglePost";

async function Feed({ username }: { username?: string }) {
  const { userId } = auth();

  let posts;

  if (username) {
    posts = await prisma.post.findMany({
      where: {
        user: {
          username: username,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  if (!username && userId) {
    const following = await prisma.follower.findMany({
      where: {
        followerId: userId,
      },
      select: {
        followingId: true,
      },
    });

    posts = await prisma.post.findMany({
      where: {
        user: {
          id: {
            in: following.map((f) => f.followingId),
          },
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  return (
    <div className=" flex flex-col gap-8 mb-12">
      {posts?.length > 0 &&
        posts.map((post: PostType) => <SinglePost key={post.id} post={post} />)}
    </div>
  );
}

export default Feed;
