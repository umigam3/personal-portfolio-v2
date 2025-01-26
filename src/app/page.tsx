"use client";

import Experience from "@components/experience/Experience";
import Hero from "@components/hero/Hero";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll al inicio
  }, []);
  return (
    <main className="mx-auto px-6">
      <Hero />
      <Experience />
    </main>
  );
}
