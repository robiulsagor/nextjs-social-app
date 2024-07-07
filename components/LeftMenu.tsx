import ProfileCard from "./ProfileCard";

function LeftMenu({ page }: { page: "home" | "profile" }) {
  return <div className="flex flex-col gap-6">
    {page === "home" && (
      <ProfileCard />
    )}
  </div>;
}

export default LeftMenu;
