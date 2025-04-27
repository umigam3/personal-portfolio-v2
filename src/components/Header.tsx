"use client";

import { motion, useScroll } from "framer-motion";

export default function Header() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.header
      className="sticky top-0 z-20 h-20 backdrop-blur-xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex h-full px-14 justify-between items-center relative">
        <img src="/signature.png" alt="Gerard Doncel" className="w-20" />
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

        <motion.div
          className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-[#F47B2A] to-[#FFC76B] transform-gpu"
          style={{ scaleX: scrollYProgress, originX: 0 }}
        />
      </div>
    </motion.header>
  );
}
