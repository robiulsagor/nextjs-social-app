import Image from "next/image";
import Link from "next/link";

function FriendRequests() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="font-medium flex items-center justify-between">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 hover:underline">
          See all{" "}
        </Link>
      </div>

      {/* user */}
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Image
            src="https://images.pexels.com/photos/13464716/pexels-photo-13464716.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={40}
            height={40}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          <span className="font-semibold">Akash Barman</span>
        </div>

        <div className="flex items-center gap-3">
          <Image
            src="/assets/accept.png"
            width={20}
            height={20}
            alt="profile"
            className="cursor-pointer"
          />
          <Image
            src="/assets/reject.png"
            width={20}
            height={20}
            alt="profile"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Image
            src="https://images.pexels.com/photos/21582198/pexels-photo-21582198/free-photo-of-woman-drawing-on-the-sand-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={40}
            height={40}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          <span className="font-semibold">Sobuj Sathi</span>
        </div>

        <div className="flex items-center gap-3">
          <Image
            src="/assets/accept.png"
            width={20}
            height={20}
            alt="profile"
            className="cursor-pointer"
          />
          <Image
            src="/assets/reject.png"
            width={20}
            height={20}
            alt="profile"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Image
            src="https://images.pexels.com/photos/26756081/pexels-photo-26756081/free-photo-of-a-woman-standing-in-front-of-the-azebler-mosque-gelibolu-canakkale-turkey.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={40}
            height={40}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          <span className="font-semibold">Miss Hiya</span>
        </div>

        <div className="flex items-center gap-3">
          <Image
            src="/assets/accept.png"
            width={20}
            height={20}
            alt="profile"
            className="cursor-pointer"
          />
          <Image
            src="/assets/reject.png"
            width={20}
            height={20}
            alt="profile"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default FriendRequests;
