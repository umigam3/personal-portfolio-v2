"use client";

import { useEffect } from "react";

import About from "@components/about/About";
import Hero from "@components/hero/Hero";
import Projects from "@components/projects/Projects";
import Experience from "@components/experience/Experience";
// import Contact from "@components/contact/Contact";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      {/* <Contact /> */}
    </main>
  );
}
