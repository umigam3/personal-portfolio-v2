import Experience from "@components/experience/Experience";
import Header from "@components/Header";
import Hero from "@components/hero/Hero";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6">
      <Header />
      <Hero />
      <Experience />
    </main>
  );
}
