import Button from "@ui/Button";
import LinkedInIcon from "@components/icons/LinkedIn";
import GitHubIcon from "@components/icons/GitHub";
import ResumeIcon from "@components/icons/Resume";
import Carousel from "@components/hero/Carousel";

export default function Hero() {
  return (
    <section id="hero" className="w-full pt-8 mb-72 mt-24">
      <div className="relative flex flex-col mb-16">
        {/* <img
          style={{
            maskImage: "linear-gradient(to bottom, black 50%, transparent)",
          }}
          className="absolute w-[500px] right-14 mask-gradient-to-bottom"
          src="/gerard_alt.png"
        ></img> */}
        <div className="w-full flex flex-col justify-center items-end lg:mt-0 md:z-10">
          <h1 className="md:leading-tight md:text-6xl text-5xl font-extrabold bg-gradient-to-r text-right mb-4 text-primary">
            <span className="inline lg:block text-secondary">
              Full-Stack Developer
            </span>
            <span className="inline lg:block">PHP | Laravel | Next.js</span>
            <span className="text-secondary font-extrabold inline lg:block">
              Computer Engineer{" "}
            </span>{" "}
          </h1>
        </div>
      </div>
    </section>
  );
}
