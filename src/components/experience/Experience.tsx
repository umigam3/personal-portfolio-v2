import experienceData from "@/data/experience";

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

        {experienceData.map(
          ({ date, position, company, description, skills }, idx) => (
            <ExperienceCard
              key={idx}
              date={date}
              position={position}
              company={company}
              description={description}
              side={idx === 0 || idx % 2 === 0 ? "left" : "right"}
            >
              {skills.map(({ color, skill, Icon }) => (
                <Badge key={skill} color={color} skill={skill}>
                  <Icon />
                </Badge>
              ))}
            </ExperienceCard>
          )
        )}
      </div>
    </section>
  );
}
