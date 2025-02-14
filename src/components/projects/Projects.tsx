import Title from "@components/ui/Title";
import { useState } from "react";

export default function Experience() {
  return (
    <section id="projects" className="mb-20 w-full">
      <Title label="Projects" />
      <div className="flex flex-col">
        <div className="project w-full cursor-pointer hover:bg-secondary hover:text-black border-t-2 border-slate-800">
          <div className="flex items-center justify-between max-w-[1560px] mx-auto">
            <span className="pt-6 leading-[256px] title text-[256px] font-delirium z-10 ">
              POKEDEX
            </span>
            <span className="description">
              A pokemon application using react and consusuming the pokeapi.co
              API
            </span>
          </div>
        </div>
        <div className="w-full cursor-pointer hover:bg-secondary hover:text-black border-b-2 border-t-2 border-slate-800">
          <div className="flex items-center justify-between max-w-[1560px] mx-auto">
            <span className="pt-6 leading-[256px] title text-[256px] text-7xl font-delirium">
              UNIX SCRIPTS
            </span>
            <span className="description">
              A collection of scripts that I have written to automate tasks on
              my
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
