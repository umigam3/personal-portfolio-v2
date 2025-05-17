"use client";

import { useState } from "react";

import Cobe from "@/components/ui/Cobe";
import SectionTitle from "@/components/ui/SectionTitle";
import { Copy } from "@/components/icons";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "gerarddoncel41@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="w-full max-w-[1520px] mx-auto px-5 md:px-[5.5rem] h-[calc(100dvh-115px)] relative overflow-clip"
    >
      <SectionTitle label="Contact" />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3 mb-2">
          <span className="font-semibold uppercase opacity-50">Email</span>
          <div className="flex gap-4 items-center mb-4 md:mb-6">
            <a
              href={`mailto:${email}`}
              target="_blank"
              className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold lg:hover:text-primary duration-200"
            >
              {email}
            </a>
            <button
              onClick={handleCopy}
              aria-label="Copiar correo electrónico"
              className="relative flex items-center gap-1 lg:hover:text-primary transition-colors duration-200"
            >
              <Copy size={24} />

              <AnimatePresence>
                {copied && (
                  <motion.span
                    key="tooltip"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -top-9 md:-top-12 left-1/2 -translate-x-1/2 text-sm md:text-lg bg-black text-white px-2 py-1 rounded-md shadow-md whitespace-nowrap z-10"
                  >
                    Copied!
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
          <div className="h-0.5 w-full bg-gray-600 opacity-50"></div>
        </div>
        <div className="flex flex-col gap-3 mb-2">
          <span className="font-semibold uppercase opacity-50">Phone</span>
          <a
            href="tel:+34636739799"
            target="_blank"
            className="text-xl sm:text-3xl md:text-4xl lg:text-4xl mb-4 md:mb-6 font-bold lg:hover:text-primary duration-200 w-fit"
          >
            +34 636 73 97 99
          </a>
          <div className="h-0.5 w-full bg-gray-600 opacity-50"></div>
        </div>
        <div className="flex flex-col gap-3 mb-2">
          <span className="font-semibold uppercase opacity-50">LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/gerarddoncel/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-3xl md:text-4xl lg:text-4xl mb-4 md:mb-6 font-bold lg:hover:text-primary duration-200 w-fit"
          >
            LinkedIn Profile Page
          </a>
          <div className="h-0.5 w-full bg-gray-600 opacity-50"></div>
        </div>
      </div>
      <Cobe />
    </section>
  );
}
