import ProjectCard from "@/components/projects/ProjectCard";
import Badge from "@/components/ui/Badge";
import ButtonSecondary from "@/components/ui/ButtonSecondary";
import Title from "@/components/ui/Title";

import { projectsData } from "@/data/projects"; // ajusta ruta si es necesario

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-14 md:mb-20 section max-w-[1520px] mx-auto w-full px-5 md:px-[5.5rem]"
    >
      <Title label="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
        {projectsData.map(
          ({ title, source, description, skills, buttons }, idx) => (
            <ProjectCard
              key={idx}
              title={title}
              source={source}
              description={description}
              skills={
                <>
                  {skills.map(({ color, skill, Icon }) => (
                    <Badge key={skill} color={color} skill={skill}>
                      <Icon className="w-4 h-4" />
                    </Badge>
                  ))}
                </>
              }
              buttons={
                <>
                  {buttons.map(({ href, label, Icon }) => (
                    <ButtonSecondary key={label} href={href} label={label}>
                      <Icon className="w-4 h-4" />
                    </ButtonSecondary>
                  ))}
                </>
              }
            />
          )
        )}
      </div>
    </section>
  );
}
