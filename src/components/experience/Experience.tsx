import Laravel from "@components/icons/Laravel";
import Html from "@components/icons/Html";
import JavaScript from "@components/icons/JavaScript";
import Sql from "@components/icons/Sql";
import Git from "@components/icons/Git";
import React from "@components/icons/React";
import Tailwind from "@components/icons/Tailwind";
import Alpine from "@components/icons/Alpine";
import Badge from "@components/ui/Badge";
import ExperienceCard from "@components/experience/ExperienceCard";
import Php from "@components/icons/Php";
import Livewire from "@components/icons/Livewire";

export default function Experience() {
  return (
    <section id="experience" className="mb-20 max-w-6xl mx-auto w-full">
      <h2 className="text-gray-200 font-medium text-2xl text-left md:text-center mb-8 tracking-[.5rem]">
        EXPERIENCE
      </h2>
      <div className="relative h-full">
        <div className="absolute ml-2 md:ml-0 left-0 top-4 md:left-1/2 w-[2px] bg-secondary transform -translate-x-1/2 h-full"></div>

        <ExperienceCard
          date="Oct 2024 - Present"
          position="Backend Developer"
          company="eAgora"
          description="Working with a development team to enhance the main platform, including integrating and refining APIs and endpoints, while also managing a dashboard that allows for a variety of actions."
          side="left"
        >
          <div className="flex flex-wrap justify-start md:justify-end">
            <Badge color="red" skill="Laravel">
              <Laravel />
            </Badge>
            <Badge color="indigo" skill="PHP">
              <Php />
            </Badge>
            <Badge color="pink" skill="Livewire">
              <Livewire />
            </Badge>
            <Badge color="cyan" skill="AlpineJS">
              <Alpine />
            </Badge>
            <Badge color="yellow" skill="JavaScript">
              <JavaScript />
            </Badge>
            <Badge color="orange" skill="HTML">
              <Html className="w-3 h-4" />
            </Badge>
            <Badge color="sky" skill="Tailwind">
              <Tailwind className="w-3 h-4" />
            </Badge>
            <Badge color="slate" skill="MySQL">
              <Sql />
            </Badge>
            <Badge color="amber" skill="Git">
              <Git />
            </Badge>
          </div>
        </ExperienceCard>
      </div>
    </section>
  );
}
