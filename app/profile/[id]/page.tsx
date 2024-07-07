import Image from "next/image";
import Feed from "../../../components/Feed";
import LeftMenu from "../../../components/LeftMenu";
import RightMenu from "../../../components/RightMenu";

function ProfilePage() {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%] ">
        <LeftMenu page="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%] ">
        <div className="flex flex-col gap-5">
          <div className="flex justify-center  flex-col">
            {/* cover and profile img */}
            <div className="relative h-64 ">
              <Image
                src="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=600"
                fill
                alt="cover image"
                className="object-cover rounded-lg"
              />
              <Image
                src="https://images.pexels.com/photos/1072842/pexels-photo-1072842.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="profile image"
                width={128}
                height={128}
                className="object-cover rounded-full w-32 h-32 absolute right-0 left-0 mx-auto -bottom-16 border-2 border-white"
              />
            </div>

            {/* name and bio */}
            <div>
              <h2 className="font-semibold text-2xl text-center mt-20 mb-4">
                Akash Barman
              </h2>
              <div className="flex items-center justify-center gap-5 mb-4">
                <div className="flex flex-col items-center">
                  <span className="md:text-lg font-semibold text-gray-600">
                    123
                  </span>
                  <span className="text-gray-500 text-sm md:text-base">
                    Posts
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <span className="md:text-lg font-semibold text-gray-500">
                    1.7K
                  </span>
                  <span className="text-gray-500 text-sm md:text-base">
                    Followers
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <span className="md:text-lg font-semibold text-gray-500">
                    1.5K
                  </span>
                  <span className="text-gray-500 text-sm md:text-base">
                    Following
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%] ">
        <RightMenu userId="abcd" />
      </div>
    </div>
  );
}

export default ProfilePage;
