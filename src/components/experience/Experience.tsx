import {
  Laravel,
  JavaScript,
  Sql,
  Git,
  React,
  Tailwind,
  Alpine,
  Php,
  Livewire,
  Bootstrap,
  TypeScript,
  WordPress,
  Angular,
  Css,
} from "@/components/icons";

import Badge from "@/components/ui/Badge";
import ExperienceCard from "@/components/experience/ExperienceCard";

import Title from "@/components/ui/Title";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-14 md:mb-20 max-w-[1520px] mx-auto w-full px-5 md:px-[5.5rem]"
    >
      <Title label="Experience" />
      <div className="relative h-full">
        <div className="absolute ml-2 lg:ml-0 left-0 top-4 lg:left-1/2 w-[2px] bg-[#F47B2A] transform -translate-x-1/2 h-[97%] mt-4"></div>

        <ExperienceCard
          date="Oct 2024 - Present"
          position="Backend Developer"
          company="eAgora"
          description="Working with a development team to enhance the main platform, including integrating and refining APIs and endpoints, while also managing a dashboard that allows for a variety of actions."
          side="left"
        >
          <div className="no-scrollbar px-4 flex lg:flex-wrap flex-nowrap overflow-x-auto justify-start lg:justify-end scroll-smooth [mask-image:_linear-gradient(to_right,transparent_0,_black_15px,_black_calc(100%-15px),transparent_100%)]">
            <Badge color="bg-red-500/30" skill="Laravel">
              <Laravel />
            </Badge>
            <Badge color="bg-pink-500/30" skill="Livewire">
              <Livewire />
            </Badge>
            <Badge color="bg-cyan-500/30" skill="AlpineJS">
              <Alpine />
            </Badge>
            <Badge color="bg-yellow-500/30" skill="JavaScript">
              <JavaScript />
            </Badge>
            <Badge color="bg-sky-500/30" skill="Tailwind">
              <Tailwind />
            </Badge>
            <Badge color="bg-slate-500/30" skill="MySQL">
              <Sql />
            </Badge>
            <Badge color="bg-amber-500/30" skill="Git">
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
          <div className="no-scrollbar px-4 flex lg:flex-wrap flex-nowrap overflow-x-auto justify-start scroll-smooth [mask-image:_linear-gradient(to_right,transparent_0,_black_15px,_black_calc(100%-15px),transparent_100%)]">
            <Badge color="bg-indigo-500/30" skill="PHP">
              <Php />
            </Badge>
            <Badge color="bg-yellow-500/30" skill="JavaScript">
              <JavaScript />
            </Badge>
            <Badge color="bg-indigo-500/30" skill="Bootstrap">
              <Bootstrap className="w-3 h-4" />
            </Badge>
            <Badge color="bg-slate-500/30" skill="MySQL">
              <Sql />
            </Badge>
            <Badge color="bg-amber-500/30" skill="Git">
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
          <div className="no-scrollbar px-4 flex lg:flex-wrap flex-nowrap overflow-x-auto justify-start lg:justify-end scroll-smooth [mask-image:_linear-gradient(to_right,transparent_0,_black_15px,_black_calc(100%-15px),transparent_100%)]">
            <Badge color="bg-indigo-500/30" skill="PHP">
              <Php />
            </Badge>
            <Badge color="bg-red-500/30" skill="Angular">
              <Angular />
            </Badge>
            <Badge color="bg-blue-500/30" skill="TypeScript">
              <TypeScript />
            </Badge>
            <Badge color="bg-slate-500/30" skill="WordPress">
              <WordPress />
            </Badge>
            <Badge color="bg-sky-500/30" skill="CSS">
              <Css />
            </Badge>
            <Badge color="bg-slate-500/30" skill="MySQL">
              <Sql />
            </Badge>
            <Badge color="bg-amber-500/30" skill="Git">
              <Git />
            </Badge>
          </div>
        </ExperienceCard>
      </div>
    </section>
  );
}
