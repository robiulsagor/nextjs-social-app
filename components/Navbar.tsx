import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-20 border">
      <div className="font-bold border">
        SAGAR<span className="text-amber-600">SOCIAL</span>
      </div>
      <div className="flex justify-between items-center border gap-10">
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <Image src="/assets/home.svg" width={30} height={30} alt="home" />
            <span>Home</span>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/assets/friends.svg"
              width={30}
              height={20}
              alt="home"
            />
            <span>Friends</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/assets/plus.svg" width={30} height={30} alt="home" />
            <span>Stories</span>
          </div>
        </div>

        <div>
          <input type="text" className="border" placeholder="Search" />
        </div>
      </div>
      <div>
        <Link href="/profile" className="border flex gap-1 items-center">
          <Image src="/assets/user.svg" width={25} height={25} alt="user" />
          <span>Login/Signup</span>
        </Link>
      </div>
    </div>
  );
}
