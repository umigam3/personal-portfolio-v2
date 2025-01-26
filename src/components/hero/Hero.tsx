import Button from "@components/ui/Button";
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
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[300px] -mb-24 text-secondary"
          >
            DEVELOPER
          </motion.h1>
        </div>
        <div className="flex flex-col">
          <div className="text-2xl indent-[8rem] max-w-lg -mb-3 text-justify">
            {" "}
            Hello! I&apos;m Gerard Doncel, a Computer Engineer with over 2 years
            of experience in developing web applications and with solid skills
            in PHP and JavaScript, I am dedicated to delivering exceptional user
            experiences through clean, efficient, and innovative solutions.
          </div>
          <div className="flex justify-end mb-4">
            <Button href="#contanct" label="Contact me" />
          </div>
        </div>
      </div>
    </section>
  );
}
