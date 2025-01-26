"use client";

import { motion } from "framer-motion";
import useMousePosition from "@utils/useMousePosition";
import { useEffect } from "react";

export default function Cursor() {
  const { x, y } = useMousePosition();
  const size = 750;

  useEffect(() => {
    console.log(x, y);
  }, [x, y]);
  return (
    <div className="w-full h-full fixed overflow-hidden -z-10">
      <motion.div
        className="absolute h-[750px] w-[750px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(124,58,237,.25),rgba(255,255,255,0))]"
        animate={{
          x: x - size / 2,
          y: y - size / 2,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      ></motion.div>
    </div>
  );
}
