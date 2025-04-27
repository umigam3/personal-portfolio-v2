"use client";

import GitHub from "@components/icons/GitHub";
import LinkedIn from "@components/icons/LinkedIn";

export default function Socials() {
  return (
    <div className="flex md:hidden gap-4 items-center">
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
    </div>
  );
}
