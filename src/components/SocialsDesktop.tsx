"use client";

import { motion } from "framer-motion";
import GitHub from "@components/icons/GitHub";
import LinkedIn from "@components/icons/LinkedIn";

export default function Socials() {
  return (
    <>
      <motion.div
        initial={{ x: -100, y: "-50%", opacity: 0 }}
        animate={{ x: 0, y: "-50%", opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="hidden md:flex flex-col gap-4 items-center fixed left-4 top-[50%]"
      >
        <div className="w-0.5 h-16 bg-white rounded-full"></div>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#191919] p-4 rounded-full cursor-pointer hover:bg-primary duration-200"
        >
          <GitHub className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#191919] p-4 rounded-full cursor-pointer hover:bg-primary duration-200"
        >
          <LinkedIn className="w-5 h-5" />
        </a>
        <div className="w-0.5 h-16 bg-white rounded-full"></div>
      </motion.div>
      <motion.div
        initial={{ x: 100, y: "-50%", opacity: 0, rotate: -90 }}
        animate={{ x: 0, y: "-50%", opacity: 0.5, rotate: -90 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="hidden md:flex flex-col gap-4 items-center text-sm fixed font-medium -right-28 top-[50%]"
      >
        <span>SOFTWARE DEVELOPER | GERARD DONCEL</span>
      </motion.div>
    </>
  );
}
