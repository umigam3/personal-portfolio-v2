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
import Bootstrap from "@components/icons/Bootstrap";
import TypeScript from "@components/icons/TypeScript";
import WordPress from "@components/icons/WordPress";
import Angular from "@components/icons/Angular";
import Css from "@components/icons/Css";

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
              <Tailwind />
            </Badge>
            <Badge color="slate" skill="MySQL">
              <Sql />
            </Badge>
            <Badge color="amber" skill="Git">
              <Git />
            </Badge>
          </div>
        </ExperienceCard>
        <ExperienceCard
          date="Jan 2023 - Oct 2024"
          position="Web Developer"
          company="3&Punt"
          description="Developing quality Moodle plugins and integrations. Utilizing technologies to enhance the Moodle e-learning experience. Collaborating with clients, I analyze requirements to craft optimal solutions and ensure smooth integration."
          side="right"
        >
          <div className="flex flex-wrap justify-start md:justify-end">
            <Badge color="indigo" skill="PHP">
              <Php />
            </Badge>
            <Badge color="yellow" skill="JavaScript">
              <JavaScript />
            </Badge>
            <Badge color="orange" skill="HTML">
              <Html className="w-3 h-4" />
            </Badge>
            <Badge color="sky" skill="Bootstrap">
              <Bootstrap className="w-3 h-4" />
            </Badge>
            <Badge color="slate" skill="MySQL">
              <Sql />
            </Badge>
            <Badge color="amber" skill="Git">
              <Git />
            </Badge>
          </div>
        </ExperienceCard>
        <ExperienceCard
          date="Apr 2022 - Sep 2022"
          position="Full Stack Developer"
          company="Namastech"
          description="Fixing general bugs of their web application. (4DMOVIN) Development of small tools to imporve web utility. Building WordPress sites, including landing pages, working with woo-commerce."
          side="left"
        >
          <div className="flex flex-wrap justify-start md:justify-end">
            <Badge color="indigo" skill="PHP">
              <Php />
            </Badge>
            <Badge color="red" skill="Angular">
              <Angular />
            </Badge>
            <Badge color="yellow" skill="TypeScript">
              <TypeScript />
            </Badge>
            <Badge color="slate" skill="WordPress">
              <WordPress />
            </Badge>
            <Badge color="orange" skill="HTML">
              <Html />
            </Badge>
            <Badge color="sky" skill="CSS">
              <Css />
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
