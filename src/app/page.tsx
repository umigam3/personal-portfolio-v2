import Experience from "@components/experience/Experience";
import Hero from "@components/hero/Hero";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6">
      <Hero />
      <Experience />
    </main>
  );
}
