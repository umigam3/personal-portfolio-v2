"use client";

import GitHub from "@components/icons/GitHub";
import LinkedIn from "@components/icons/LinkedIn";

export default function Socials() {
  return (
    <>
      <div className="hidden md:flex flex-col gap-4 items-center absolute left-4 top-[45%] -translate-y-1/2">
        <div className="w-0.5 h-16 bg-white rounded-full"></div>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#191919] p-4 rounded-full cursor-pointer hover:bg-primary duration-200"
        >
          <GitHub className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#191919] p-4 rounded-full cursor-pointer hover:bg-primary duration-200"
        >
          <LinkedIn className="w-5 h-5" />
        </a>
        <div className="w-0.5 h-16 bg-white rounded-full"></div>
      </div>
      <div className="hidden md:flex flex-col gap-4 items-center text-sm absolute font-medium opacity-50 -right-28 top-[45%] -translate-y-1/2 -rotate-90">
        <span>FULL STACK DEVELOPER | GERARD DONCEL</span>
      </div>
    </>
  );
}
