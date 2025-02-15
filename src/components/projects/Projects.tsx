import JavaScript from "@components/icons/JavaScript";
import React from "@components/icons/React";
import Title from "@components/ui/Title";

export default function Experience() {
  return (
    <section id="projects" className="mb-20 w-full">
      <Title label="Projects" />
      <div className="flex flex-col">
        <div className="relative">
          <div className="w-full relative border-t border-slate-400">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <span className="pt-3 leading-[256px] title text-[256px] font-delirium z-10 w-2/3 max-w-7xl">
                POKEDEX
              </span>
            </div>
          </div>
          <div className="project w-full bg-secondary text-black absolute top-0 z-10 border-t border-secondary">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <span className="pt-3 leading-[256px] title text-[256px] font-delirium z-10 w-2/3">
                POKEDEX
              </span>
              <div className="flex flex-col justify-between w-1/3 h-full items-end">
                <span className="description text-2xl text-right">
                  Simple Pokedex application built using React. It utilizes the
                  PokeAPI to fetch and display Pokémon information.
                </span>
                <div className="flex gap-x-4 mt-4 rounded-3xl bg-black bg-opacity-50 px-6 py-3 w-fit">
                  <React size={42} className="z-10" />
                  <JavaScript size={42} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-full relative border-t border-slate-400 border-b">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <span className="pt-3 leading-[256px] title text-[256px] font-delirium z-10">
                UNIX SCRIPTS
              </span>
            </div>
          </div>
          <div className="project w-full bg-secondary text-black absolute top-0 z-10 border-t border-secondary">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <span className="pt-3 leading-[256px] title text-[256px] font-delirium z-10 w-2/3">
                UNIX SCRIPTS
              </span>
              <div className="flex flex-col justify-between w-1/3 h-full items-end">
                <span className="description text-2xl text-right">
                  Simple Pokedex application built using React. It utilizes the
                  PokeAPI to fetch and display Pokémon information.
                </span>
                <div className="flex gap-x-4 mt-4 rounded-3xl bg-black bg-opacity-50 px-6 py-3 w-fit">
                  <React size={42} className="z-10" />
                  <JavaScript size={42} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
