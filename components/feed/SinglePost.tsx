import { Post, User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import Comments from "./Comments";
import PostInteractions from "./PostInteractions";

export type PostType = Post & { user: User } & {
  likes: [{ userId: string }];
} & {
  _count: { comments: number };
};

function SinglePost({ post }: { post: PostType }) {
  return (
    <div className="bg-white p-4  rounded-lg shadow-md flex  flex-col gap-4 ">
      {/* USER */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src={post?.user.avatar || "/assets/noAvatar.png"}
            width={40}
            height={40}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          <Link href={`/profile/${post.user.username}`} className="font-medium">
            {post?.user.name && post?.user.surname
              ? post?.user.name + " " + post?.user.surname
              : post?.user.username}
          </Link>
        </div>
        {/* AVATAR */}

        <Image
          src={"/assets/more.png"}
          width={34}
          height={34}
          alt="more"
          className="cursor-pointer hover:bg-slate-100 p-2 rounded-full"
        />
      </div>

      {/* DETAILS */}
      <div className="flex flex-col gap-8">
        {post?.img && (
          <div className="w-full min-h-96 relative">
            <Image
              src={post?.img}
              fill
              className="object-cover rounded-lg"
              alt="img"
            />
          </div>
        )}

        <p>{post?.desc}</p>
      </div>

      {/* INTERACTIONS */}
      <PostInteractions
        postId={post.id}
        likes={post?.likes.map((like) => like.userId)}
        commentNumber={post._count.comments}
      />

      {/* COMMENTS */}
      <Comments />
    </div>
  );
}

export default SinglePost;
