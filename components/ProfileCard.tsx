import Image from "next/image";

function ProfileCard() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-4  ">
      <div className="relative w-full h-20">
        <Image
          src={
            "https://images.pexels.com/photos/15804651/pexels-photo-15804651/free-photo-of-people-together-on-motorcycle-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          fill
          alt="img"
          className="object-cover rounded-md"
        />

        <Image
          src={
            "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          width={48}
          height={48}
          alt="profile"
          className="w-12 h-12 rounded-full object-cover absolute right-0 left-0 mx-auto -bottom-6 border-2 border-white"
        />
      </div>

      <span className="font-semibold text-xl text-center mt-2">
        Akash Barman
      </span>

      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-1">
          <Image
            src={
              "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            width={12}
            height={12}
            alt="profile"
            className="w-3 h-3 rounded-full object-cover "
          />
          <Image
            src={
              "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            width={12}
            height={12}
            alt="profile"
            className="w-3 h-3 rounded-full object-cover "
          />
          <Image
            src={
              "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            width={12}
            height={12}
            alt="profile"
            className="w-3 h-3 rounded-full object-cover "
          />
        </div>

        <span className="text-gray-500 text-xs">500 Followers</span>
      </div>

      <div className="flex justify-center">
        <button className="p-2 text-xs bg-blue-500 text-white rounded-md">
          My Profile
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
