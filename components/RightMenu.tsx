import Ad from "./Ad";
import Birthdays from "./BirthDays";
import FriendRequests from "./FriendRequests";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

function RightMenu({ userId }: { userId?: string }) {
  return (
    <div className="flex flex-col gap-6">
      {userId && (
        <>
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      )}
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
}

export default RightMenu;
