"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="sticky top-0 bg-black/0 backdrop-blur-md z-20 border-b border-slate-400"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex py-5 mx-auto px-6 justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="font-semibold">GERARD DONCEL</span>
          <span>FULLSTACK DEVELOPER</span>
        </div>
        <nav className="flex justify-end items-center gap-x-10">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#aboutme">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </motion.header>
  );
}
