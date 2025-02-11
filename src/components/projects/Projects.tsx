import Title from "@components/ui/Title";
import { useState } from "react";

export default function Experience() {
  const [selectedProject, setSelectedProject] = useState<string>("");
  return (
    <section id="projects" className="mb-20 w-full">
      <Title label="Projects" />
      <div className="flex flex-col">
        <div className="project flex items-center justify-between w-full cursor-pointer group-hover:[clip-path:inset(0_0_0)]">
          <span className="text-[256px] font-delirium z-10">POKEDEX</span>
          <span className="description">
            A pokemon application using react and consusuming the pokeapi.co API
          </span>
        </div>
        <div className="project flex items-center justify-between w-full cursor-pointer group-hover:[clip-path:inset(0_0_0)]">
          <span className="text-[256px] text-7xl font-delirium">
            UNIX SCRIPTS
          </span>
          <span className="description">
            A collection of scripts that I have written to automate tasks on my
          </span>
        </div>
      </div>
    </section>
  );
}
