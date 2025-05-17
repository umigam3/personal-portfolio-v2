import experienceData from "@/data/experience";

import Badge from "@/components/ui/Badge";
import ExperienceCard from "@/components/experience/ExperienceCard";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionTitle label="Experience" />
      <div className="relative h-full">
        <div className="hidden lg:block absolute ml-2 lg:ml-0 left-0 top-4 lg:left-1/2 w-[2px] bg-[#F47B2A] transform -translate-x-1/2 h-[97%] mt-4"></div>

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
    </Section>
  );
}
