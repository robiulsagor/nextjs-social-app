import Image from "next/image";
import Link from "next/link";

function UserMediaCard({ userId }: { userId: string }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-4">
      {/* top */}
      <div className="font-medium flex items-center justify-between text-sm">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 hover:underline">
          See all{" "}
        </Link>
      </div>

      {/* Bottom */}
      <div className="flex flex-wrap gap-4 ">
        <div className="relative w-1/5 h-20">
          <Image
            src={
              "https://images.pexels.com/photos/26771975/pexels-photo-26771975/free-photo-of-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            fill
            alt="img"
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-20">
          <Image
            src={
              "https://images.pexels.com/photos/26077583/pexels-photo-26077583/free-photo-of-a-lone-tree-stands-on-top-of-a-cliff.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            fill
            alt="img"
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-20">
          <Image
            src={
              "https://images.pexels.com/photos/13464716/pexels-photo-13464716.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            fill
            alt="img"
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-20">
          <Image
            src={
              "https://images.pexels.com/photos/21582198/pexels-photo-21582198/free-photo-of-woman-drawing-on-the-sand-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            fill
            alt="img"
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-20">
          <Image
            src={
              "https://images.pexels.com/photos/26699373/pexels-photo-26699373/free-photo-of-a-pelican-stands-on-a-post-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            fill
            alt="img"
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-20">
          <Image
            src={
              "https://images.pexels.com/photos/10805778/pexels-photo-10805778.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            fill
            alt="img"
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-20">
          <Image
            src={
              "https://images.pexels.com/photos/6000791/pexels-photo-6000791.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            fill
            alt="img"
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-20">
          <Image
            src={
              "https://images.pexels.com/photos/19794931/pexels-photo-19794931/free-photo-of-woman-holding-a-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            fill
            alt="img"
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default UserMediaCard;
