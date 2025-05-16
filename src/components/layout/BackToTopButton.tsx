"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Chevron from "../icons/Chevron";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function BackToTopButton() {
  const { scrollToTop } = useSmoothScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 flex gap-x-2 items-center justify-center rounded-full p-3 text-white
                     bg-primary cursor-pointer"
        >
          <Chevron className="w-4 h-4" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
