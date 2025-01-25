import Button from "@ui/Button";
import LinkedInIcon from "@components/icons/LinkedIn";
import GitHubIcon from "@components/icons/GitHub";
import ResumeIcon from "@components/icons/Resume";
import Carousel from "@components/hero/Carousel";

export default function Hero() {
  return (
    <section id="hero" className="w-full h-[calc(100vh-60px)] mb-24">
      <div className="flex items-end justify-between h-full">
        <div className="font-delirium select-none">
          <h1 className="text-[400px] -mb-60 text-transparent font-outline-4">
            FULLSTACK
          </h1>
          <h1 className="text-[300px] -mb-24 text-secondary">DEVELOPER</h1>
        </div>
        <div className="text-2xl text-indent-lg indent-[8rem] mb-16 max-w-lg">
          {" "}
          Computer Engineer with more than 2 years in web development and solid
          skills in PHP.
        </div>
      </div>
    </section>
  );
}
