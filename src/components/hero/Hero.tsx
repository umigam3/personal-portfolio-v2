"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="w-full h-[calc(100vh-60px)] mb-24">
      <div className="flex items-end justify-between h-full">
        <div className="font-delirium select-none">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[400px] -mb-60 text-transparent font-outline-4"
          >
            FULLSTACK
          </motion.h1>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[300px] -mb-24 text-secondary"
          >
            DEVELOPER
          </motion.h1>
        </div>
        <div className="text-2xl text-indent-lg indent-[8rem] mb-16 max-w-lg">
          {" "}
          Computer Engineer with more than 2 years in web development and solid
          skills in PHP.
        </div>
      </div>
    </section>
  );
}
