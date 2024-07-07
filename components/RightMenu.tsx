import Ad from "./Ad";
import Birthdays from "./BirthDays";
import FriendRequests from "./FriendRequests";

function RightMenu({ userId }: { userId?: string }) {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
}

export default RightMenu;
