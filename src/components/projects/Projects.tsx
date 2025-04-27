import Title from "@components/ui/Title";

export default function Projects() {
  return (
    <section id="projects" className="mb-20 w-full">
      <Title label="Projects" />
      <div className="flex flex-col">
        <a href="https://github.com/umigam3/pokedex-api" target="_blank">
          <div className="relative cursor-pointer">
            <div className="w-full relative border-t border-slate-400">
              <div className="flex items-center justify-between max-w-7xl mx-auto">
                <span className="pt-3 leading-[256px] title text-[256px] font-delirium z-10 w-2/3 max-w-7xl">
                  POKEDEX
                </span>
              </div>
            </div>
            <div className="project w-full bg-gradient-to-r from-[#F47B2A] to-[#FFC76B] text-black absolute top-0 z-10 border-t border-secondary">
              <div className="flex justify-between max-w-7xl mx-auto">
                <span className="pt-3 leading-[256px] title text-[256px] font-delirium z-10 w-2/3">
                  POKEDEX
                </span>
                <div className="flex flex-col justify-start w-1/3 items-start">
                  <span className="description text-2xl text-right pt-10">
                    Simple Pokedex application built using React. It utilizes
                    the PokeAPI to fetch and display Pokémon information.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/umigam3/unix-system-scripts"
          target="_blank"
        >
          <div className="relative cursor-pointer">
            <div className="w-full relative border-t border-slate-400 border-b">
              <div className="flex items-center justify-between max-w-7xl mx-auto">
                <span className="pt-3 leading-[256px] title text-[256px] font-delirium z-10">
                  UNIX SCRIPTS
                </span>
              </div>
            </div>
            <div className="project w-full bg-gradient-to-r from-[#F47B2A] to-[#FFC76B] text-black absolute top-0 z-10 border-t border-secondary">
              <div className="flex justify-between max-w-7xl mx-auto">
                <span className="pt-3 leading-[256px] title text-[256px] font-delirium z-10 w-2/3">
                  UNIX SCRIPTS
                </span>
                <div className="flex flex-col justify-start w-1/3 items-start">
                  <span className="description text-2xl text-right pt-10">
                    Collection of Bash scripts designed to enhance system
                    administration and user management tasks on Unix-like
                    systems.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
