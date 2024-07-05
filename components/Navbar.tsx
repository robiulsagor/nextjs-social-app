import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-20  text-base gap-6">
      {/* left */}
      <div className="font-bold w-[20%] border text-xl md:hidden lg:block">
        <Link href="/">
          SAGAR<span className="text-amber-600">SOCIAL</span>
        </Link>
      </div>

      {/* center */}
      <div className="hidden md:flex justify-between items-center w-[50%] border">
        <div className="flex gap-5 text-gray-600">
          <Link href="/" className="flex items-center gap-1 hover:underline">
            <Image src="/assets/home.svg" width={25} height={25} alt="home" />
            <span>Home</span>
          </Link>
          <Link href="/" className="flex items-center gap-1 hover:underline">
            <Image
              src="/assets/friends.svg"
              width={25}
              height={10}
              alt="home"
              className="h-5 w-5"
            />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-1 hover:underline">
            <Image src="/assets/plus.svg" width={20} height={20} alt="home" />
            <span>Stories</span>
          </Link>
        </div>

        <form className="hidden lg:block border bg-slate-100 rounded-md w-[200px] relative">
          <input
            type="text"
            name="search"
            className="outline-none w-full bg-transparent py-1 px-1"
            placeholder="Search"
          />
          <button type="submit">
            <Image
              src="/assets/search.svg"
              width={20}
              height={20}
              alt="search"
              className="absolute top-[50%] right-2 translate-y-[-50%] cursor-pointer text-slate-100"
            />
          </button>
        </form>
      </div>

      {/* right */}
      <div className="w-[20%] flex justify-end items-center gap-4 xl:gap-8">
        <MobileMenu />

        {/* while loading */}
        <ClerkLoading>
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-black/30"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </ClerkLoading>

        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image
                src="/assets/people.png"
                width={20}
                height={20}
                alt="people"
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/assets/messages.png"
                width={20}
                height={20}
                alt="people"
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/assets/notifications.png"
                width={20}
                height={20}
                alt="people"
              />
            </div>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <Link href="/sign-in" className="hidden md:flex gap-1 items-center">
              <Image src="/assets/user.svg" width={20} height={20} alt="user" />
              <span>Login/Register</span>
            </Link>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </div>
  );
}
