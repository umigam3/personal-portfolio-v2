import Alpine from "@components/icons/Alpine";
import Git from "@components/icons/Git";
import JavaScript from "@components/icons/JavaScript";
import Laravel from "@components/icons/Laravel";
import Livewire from "@components/icons/Livewire";
import React from "@components/icons/React";
import Sql from "@components/icons/Sql";
import Tailwind from "@components/icons/Tailwind";
import TypeScript from "@components/icons/TypeScript";
import Title from "@components/ui/Title";

export default function About() {
  return (
    <section
      id="aboutme"
      className="mb-14 md:mb-20 w-full max-w-[1520px] mx-auto px-6 md:px-[5.5rem]"
    >
      <Title label="About me" />
      <div className="flex flex-col xl:flex-row justify-between gap-8 md:gap-24">
        <div className="xl:w-2/3 w-full text-lg md:text-xl">
          <p className="mb-4">
            Computer Engineer with more than{" "}
            <span className="text-primary font-semibold">
              2 years of experience using PHP
            </span>
            . Worked mainly with Laravel, Livewire, Alpine, JavaScript and SQL.
            Additionally, I have gained proficiency in Angular and TypeScript.
          </p>
          <p className="mb-4">
            My interest in technology started at the age of 15 when I got a
            Raspberry Pi and began experimenting with different projects. This
            experience led me to develop an interest in computer science ever
            since.
          </p>
          <p className="mb-4">
            One of my significant accomplishments includes{" "}
            <span className="text-primary font-semibold">
              working with Spain's first Moodle Premium Partner
            </span>
            , where I developed crucial plugins for well-known clients in the
            e-learning industry.
          </p>
        </div>
        <div className="xl:w-1/3 hidden xl:flex items-center justify-center">
          <img
            src="/gerard-centered.png"
            alt="Gerard Doncel"
            className="w-80"
          />
        </div>
      </div>
    </section>
  );
}
