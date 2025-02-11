"use client";

import Experience from "@components/experience/Experience";
import About from "@components/about/About";
import Hero from "@components/hero/Hero";
import Projects from "@components/projects/Projects";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll al inicio
  }, []);
  return (
    <main className="w-full mx-auto px-6">
      <Hero />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
