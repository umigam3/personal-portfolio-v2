"use client";

import { motion, useScroll } from "framer-motion";
import Hamburger from "@/components/icons/Hamburger";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

import { useLenis } from "lenis/react";

export default function Header() {
  const { scrollYProgress } = useScroll();
  const { scrollToTop } = useSmoothScroll();
  const { scrollToId } = useSmoothScroll();

  return (
    <header className="sticky top-0 z-20 h-20 backdrop-blur-xl">
      <div className="flex h-full px-5 md:px-[5.5rem] justify-between items-center relative">
        <a href="#">
          <img
            onClick={scrollToTop}
            src="/signature.png"
            alt="Gerard Doncel"
            className="w-20"
          />
        </a>
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex justify-end items-center gap-x-10">
            <a className="cursor-pointer" onClick={() => scrollToId("aboutme")}>
              About
            </a>
            <a
              className="cursor-pointer"
              onClick={() => scrollToId("experience")}
            >
              Experience
            </a>
            <a
              className="cursor-pointer"
              onClick={() => scrollToId("projects")}
            >
              Projects
            </a>
          </nav>
          <a
            onClick={() => scrollToId("contact")}
            className="bg-primary text-white px-6 py-2 rounded-xl"
          >
            Get in touch
          </a>
        </div>
        <a className="md:hidden">
          <Hamburger className="w-8 h-8" />
        </a>

        <motion.div
          className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-[#FFC76B] to-[#F47B2A] transform-gpu"
          style={{ scaleX: scrollYProgress, originX: 0 }}
        />
      </div>
    </header>
  );
}
