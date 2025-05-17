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

  useEffect(() => {
    if (!lenis) return;

    if (isOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [isOpen, lenis]);

  return (
    <header className="sticky top-0 z-10 h-20 backdrop-blur-xl">
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
            onClick={() => scrollToBottom()}
            className="bg-primary text-white px-6 py-2 rounded-xl cursor-pointer"
          >
            Get in touch
          </a>
        </div>

        <a className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <Cross className="w-8 h-8" />
          ) : (
            <Hamburger className="w-8 h-8" />
          )}
        </a>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 h-dvh bg-black/70 z-40 md:hidden touch-none"
              />
              <motion.div
                key="mobile-menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  duration: 0.25,
                  ease: !isOpen ? [0.32, 0, 0.67, 0] : [0.25, 1, 0.5, 1],
                }}
                className="fixed top-0 right-0 w-3/4 max-w-xs h-dvh bg-[#191919] flex flex-col items-start justify-between px-8 gap-y-6 py-6 md:hidden shadow-lg z-40 pt-20 border-l border-primary"
              >
                <div className="grid grid-rows-[4rem_1px_4rem_1px_4rem] w-full items-center">
                  <a
                    className="text-white text-lg"
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => {
                        scrollToId("aboutme");
                      }, 1);
                    }}
                  >
                    About me
                  </a>
                  <div className="h-px bg-white/50 w-full"></div>
                  <a
                    className="text-white text-lg"
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => {
                        scrollToId("experience");
                      }, 1);
                    }}
                  >
                    Experience
                  </a>
                  <div className="h-px bg-white/50 w-full"></div>
                  <a
                    href="#comoempezar"
                    className="text-white text-lg"
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => {
                        scrollToId("projects");
                      }, 1);
                    }}
                  >
                    Projects
                  </a>
                  <div className="h-px bg-white/50 w-full"></div>
                </div>

                <a
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => {
                      scrollToBottom();
                    }, 1);
                  }}
                  className="bg-primary text-white px-6 py-2 rounded-xl cursor-pointer flex items-center justify-center w-full"
                >
                  Get in touch
                </a>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <motion.div
          className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-[#FFC76B] to-[#F47B2A] transform-gpu"
          style={{ scaleX: scrollYProgress, originX: 0 }}
        />
      </div>
    </header>
  );
}
