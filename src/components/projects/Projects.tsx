import ProjectCard from "@components/projects/ProjectCard";
import Badge from "@components/ui/Badge";
import ButtonSecondary from "@components/ui/ButtonSecondary";

import ReactIcon from "@components/icons/React";
import JavaScriptIcon from "@components/icons/JavaScript";

import PreviewIcon from "@components/icons/Preview";
import SourceIcon from "@components/icons/Source";
import ViteIcon from "@components/icons/Vite";
import BashIcon from "@components/icons/Bash";
import LinuxIcon from "@components/icons/Linux";
import Title from "@components/ui/Title";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-14 md:mb-20 section max-w-[1520px] mx-auto w-full px-5 md:px-[5.5rem]"
    >
      <Title label="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
        <ProjectCard
          title="PokéDex App"
          source="/pokedex-project.webp"
          description="Simple Pokedex application built using React. It utilizes the PokeAPI to fetch and display Pokémon information."
          skills={
            <>
              <Badge color="bg-blue-500/30" skill="React">
                <ReactIcon className="w-4 h-4" />
              </Badge>
              <Badge color="bg-yellow-500/30" skill="JavaScript">
                <JavaScriptIcon className="w-4 h-4" />
              </Badge>
              <Badge color="bg-pink-500/30" skill="Vite">
                <ViteIcon className="w-4 h-4" />
              </Badge>
            </>
          }
          buttons={
            <>
              <ButtonSecondary
                href="https://github.com/umigam3/pokedex-api"
                label="Source Code"
              >
                <SourceIcon className="w-4 h-4" />
              </ButtonSecondary>
              <ButtonSecondary
                href="https://pokeindex-app.netlify.app/"
                label="Preview"
              >
                <PreviewIcon className="w-4 h-4" />
              </ButtonSecondary>
            </>
          }
        />

        <ProjectCard
          title="UNIX System Scripts"
          source="/unix-system-scripts.webp"
          description="Collection of Bash scripts designed to enhance system administration and user management tasks on Unix-like systems."
          skills={
            <>
              <Badge color="bg-slate-500/30" skill="Bash">
                <BashIcon className="w-4 h-4" />
              </Badge>
              <Badge color="bg-red-500/30" skill="Linux">
                <LinuxIcon className="w-4 h-4" />
              </Badge>
            </>
          }
          buttons={
            <>
              <ButtonSecondary
                href="https://github.com/umigam3/unix-system-scripts"
                label="Source Code"
              >
                <SourceIcon className="w-4 h-4" />
              </ButtonSecondary>
            </>
          }
        />
      </div>
    </section>
  );
}
