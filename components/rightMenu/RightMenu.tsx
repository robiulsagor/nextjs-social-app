import { User } from "@prisma/client";
import { Suspense } from "react";
import Ad from "../Ad";
import Birthdays from "./BirthDays";
import FriendRequests from "./FriendRequests";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

function RightMenu({ user }: { user?: User }) {
  return (
    <div className="flex flex-col gap-6">
      {user && (
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <UserMediaCard user={user} />
          </Suspense>
        </>
      )}
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
}

export default RightMenu;
