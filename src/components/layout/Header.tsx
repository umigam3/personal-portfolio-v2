"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import Hamburger from "@/components/icons/Hamburger";
import Cross from "@/components/icons/Cross";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const { lenis, scrollToTop, scrollToBottom, scrollToId } = useSmoothScroll();

  return (
    <>
      <header className="sticky top-0 h-20 backdrop-blur-xl z-10">
        <div className="flex h-full px-5 md:px-[5.5rem] justify-between items-center">
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
              <a
                className="cursor-pointer"
                onClick={() => scrollToId("aboutme")}
              >
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
              onClick={() => scrollToBottom()}
              className="bg-primary text-white px-6 py-2 rounded-xl cursor-pointer"
            >
              Get in touch
            </a>
          </div>

          <a className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
            <Hamburger className="w-8 h-8" />
          </a>

          <motion.div
            className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-[#FFC76B] to-[#F47B2A] transform-gpu"
            style={{ scaleX: scrollYProgress, originX: 0 }}
          />
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 h-screen md:hidden z-20"
              onClick={() => {
                setIsOpen(false);
              }}
            />
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-24 right-5 w-3/4 max-w-xs flex flex-col items-start justify-between bg-black/10 p-4 md:hidden backdrop-blur-xl rounded-2xl bg-clip-padding backdrop-filter bg-opacity-10 border border-gray-500 z-40"
            >
              <div className="flex flex-col w-full gap-2">
                <a
                  className="text-white text-lg cursor-pointer"
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => {
                      scrollToId("aboutme");
                    }, 1);
                  }}
                >
                  About me
                </a>
                <div className="h-px bg-gradient-to-r from-[#FFC76B] to-[#F47B2A] w-full"></div>
                <a
                  className="text-white text-lg cursor-pointer"
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => {
                      scrollToId("experience");
                    }, 1);
                  }}
                >
                  Experience
                </a>
                <div className="h-px bg-gradient-to-r from-[#FFC76B] to-[#F47B2A] w-full"></div>
                <a
                  className="text-white text-lg cursor-pointer"
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => {
                      scrollToId("projects");
                    }, 1);
                  }}
                >
                  Projects
                </a>
                <div className="h-px bg-gradient-to-r from-[#FFC76B] to-[#F47B2A] w-full"></div>
                <a
                  className="text-white text-lg cursor-pointer"
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => {
                      scrollToId("contact");
                    }, 1);
                  }}
                >
                  Contact
                </a>
                <div className="h-px bg-gradient-to-r from-[#FFC76B] to-[#F47B2A] w-full mb-1"></div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
