import Button from "@components/ui/Button";
import { motion } from "framer-motion";
import { Clock } from "./Clock";

export default function Hero() {
  const now = new Date();

  return (
    <section
      id="hero"
      className="max-w-[1920px] mx-auto h-[calc(100vh-60px)] mb-24 px-6"
    >
      <div className="flex items-end justify-between h-full relative">
        <div className="font-delirium select-none flex flex-col">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[450px] -mb-64 text-transparent font-outline-4"
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
          <Clock time={now.getTime()} />
          <div className="text-2xl indent-[8rem] mb-6 max-w-lg text-justify">
            {" "}
            With over 2 years of experience in developing web applications and
            with solid skills in PHP & TypeScript, I deliver exceptional user
            experiences through clean, efficient, and innovative solutions.
          </div>
          <div className="flex justify-end mb-6">
            <Button href="#contanct" label="Contact me" />
          </div>
        </div>
      </div>
    </section>
  );
}
