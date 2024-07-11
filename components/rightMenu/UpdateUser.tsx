"use client";

import { User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useEffect, useState } from "react";
import { updateUser } from "../../lib/actions";

function UpdateUser({ user }: { user: User }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cover, setCover] = useState<any>();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // sideeffect to disable scrolling
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      document.body.classList.add("no-scroll");
      document.addEventListener("keydown", handleKeyDown);
      console.log("modal is opened");
    } else {
      document.body.classList.remove("no-scroll");
      console.log("should be closed now");
    }

    return () => {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div>
      <span
        className="text-blue-500 text-sm cursor-pointer"
        onClick={openModal}
      >
        Update
      </span>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <form
            method="post"
            className="bg-white p-12 rounded-lg shadow-md md:w-1/2 xl:w-1/3 flex flex-col gap-4 w-full relative"
            action={(formData) => updateUser(formData, cover?.secure_url)}
          >
            <h2 className="text-lg font-bold">Update User</h2>
            <span className=" text-gray-400 text-xs ">
              Use the navbar profile to update username and avatar
            </span>

            {/* cover photo update */}
            <CldUploadWidget
              uploadPreset="social"
              onSuccess={(result) => setCover(result.info)}
            >
              {({ open }) => {
                return (
                  <div className="flex flex-col gap-4 " onClick={() => open()}>
                    <label className="text-lg">Cover Picture</label>
                    <div className="flex gap-4 items-center">
                      <Image
                        src={user.cover || "/assets/noCover.jpg"}
                        width={48}
                        height={32}
                        className="w-12 h-8 rounded-md object-cover"
                        alt="cover"
                      />
                      <span className="underline text-gray-600 text-xs cursor-pointer">
                        {" "}
                        Change
                      </span>{" "}
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>

            <div className="flex flex-wrap justify-between gap-2 xl:gap-y-4 mt-2">
              <div className="flex flex-col gap-3">
                <label htmlFor="firstName" className="text-gray-600 text-xs">
                  First Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="firstName"
                  placeholder={user?.name || "Sagor"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="surname" className="text-gray-500 text-xs">
                  Surname
                </label>
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  placeholder={user?.surname || "Islam"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="desc" className="text-gray-500 text-xs">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="desc"
                  placeholder={user?.description || "Embrace life's beauty."}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="city" className="text-gray-500 text-xs">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder={user?.city || "Dhaka"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="school" className="text-gray-500 text-xs">
                  School
                </label>
                <input
                  type="text"
                  name="school"
                  id="school"
                  placeholder={user?.school || "Motijheel Ideal School"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="work" className="text-gray-500 text-xs">
                  Work
                </label>
                <input
                  type="text"
                  name="work"
                  id="work"
                  placeholder={user?.work || "DreamIT"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="website" className="text-gray-500 text-xs">
                  Website
                </label>
                <input
                  type="text"
                  name="website"
                  id="website"
                  placeholder={user?.website || "sagor.dev"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                />
              </div>
            </div>
            <button className="bg-blue-600 text-white text-xs border-none rounded-lg p-2 hover:opacity-75 transition-all">
              Submit
            </button>

            {/* modal close button */}
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 p-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default UpdateUser;
