"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="sticky top-0 z-20 h-24"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex h-full px-8 justify-between items-center">
        <img src="/signature.png" alt="Gerard Doncel" className="w-24" />
        <div className="flex items-center gap-10">
          <nav className="flex justify-end items-center gap-x-10">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#aboutme">About</a>
          </nav>
          <a
            href="#contact"
            className="bg-primary text-white px-6 py-2 rounded-xl"
          >
            Get in touch
          </a>
        </div>
      </div>
    </motion.header>
  );
}
