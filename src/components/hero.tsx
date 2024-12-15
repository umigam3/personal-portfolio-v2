import Button from "./ui/button";
import LinkedInIcon from "./icons/linkedin";
import GitHubIcon from "./icons/github";
import ResumeIcon from "./icons/resume";

export default function Hero() {
  return (
    <section id="hero" className="md:pt-12 pt-4 max-w-6xl mx-auto w-full">
      <div className="relative flex flex-col mb-8 lg:mb-52">
        <div className="w-full lg:w-3/4 flex flex-col justify-center lg:mt-0 -mt-14 md:z-10">
          <h1 className=" md:leading-tight md:text-6xl text-4xl font-extrabold bg-gradient-to-r text-c mb-4 text-primary">
            <span className="inline lg:block">Hello! I'm</span>
            <span className="inline lg:block">Gerard Doncel a</span>
            <span className="text-secondary font-extrabold inline lg:block">
              Computer Engineer
            </span>
            <span className="inline lg:block">
              with more than{" "}
              <span className="text-secondary font-extrabold">2 years</span>
            </span>
            <span className="inline lg:block">
              in{" "}
              <span className="text-secondary font-extrabold">
                web development
              </span>
            </span>
            <span className="inline lg:block">
              {" "}
              and solid skills in{" "}
              <span className="text-secondary font-extrabold">PHP</span>
            </span>
          </h1>
          <div className="flex flex-wrap sm:flex-nowrap gap-x-1">
            <Button
              href="https://www.linkedin.com/in/gerard-doncel-gutierrez/"
              label="LinkedIn"
            >
              <LinkedInIcon />
            </Button>
            <Button href="https://github.com/umigam3" label="GitHub">
              <GitHubIcon size={18} />
            </Button>
            <Button href="#" label="Resume">
              <ResumeIcon size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
