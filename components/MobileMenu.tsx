"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div
        className="flex flex-col  gap-[4.5px] cursor-pointer   transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`bg-blue-800 w-6 h-1 rounded-sm transition duration-300 ${
            isOpen && "rotate-45 "
          } origin-left`}
        ></div>
        <div
          className={`bg-blue-800 w-6 h-1 rounded-sm transition duration-300 ${
            isOpen && "opacity-0"
          }`}
        ></div>
        <div
          className={`bg-blue-800 w-6 h-1 rounded-sm transition duration-300 ${
            isOpen && "-rotate-45 "
          } origin-left`}
        ></div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-white w-[99.8%] h-[calc(100vh-80px)] absolute top-20 left-0 flex flex-col gap-5 items-center justify-center font-medium text-xl z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/">Home</Link>
            <Link href="/">Friends</Link>
            <Link href="/">Groups</Link>
            <Link href="/">Stories</Link>
            <Link href="/">Login</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileMenu;
