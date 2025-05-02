import SocialsMobile from "@components/SocialsMobile";
import { Clock } from "./Clock";

export default function Hero() {
  const now = new Date();

  return (
    <section
      id="hero"
      className="h-[calc(100svh-96px)] px-8 py-4 md:px-[5.5rem] mb-16 md:mb-24 flex flex-col gap-6 md:gap-0 md:justify-between"
    >
      <div className="flex flex-col items-start md:items-center md:justify-center md:h-[80%]">
        <h1 className="text-6xl sm:text-[96px] lg:text-[142px] font-semibold leading-none whitespace-nowrap">
          Full Stack
        </h1>
        <h2 className="text-4xl sm:text-[68px] lg:text-[112px] font-medium leading-none bg-gradient-to-r from-[#F47B2A] to-[#FFC76B] inline-block text-transparent bg-clip-text">
          Developer.
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-end md:h-auto h-full">
        <div>
          <div className="flex flex-col gap-4 md:gap-6 sm:w-96 lg:w-[400px] mb-8 md:mb-0">
            <p className="text-lg">
              With over 2 years of experience crafting web applications with
              PHP, I’m dedicated to building{" "}
              <span className="font-semibold text-primary whitespace-nowrap">
                high-quality
              </span>{" "}
              and efficient solutions.
            </p>
            <a href="#aboutme" className="flex gap-3 items-center group w-fit">
              <span>More about me</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-move-right-icon lucide-move-right group-hover:translate-x-1 duration-300"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </a>
          </div>
          <SocialsMobile />
        </div>
        <div className="flex flex-col items-end justify-end">
          <img
            src="/gerard-centered.png"
            alt="Gerard Doncel"
            className="w-14 mb-3"
          />
          <span className="opacity-50 font-semibold text-xl mb-10">
            LOCAL TIME
          </span>
          <Clock time={now.getTime()} />
        </div>
      </div>
    </section>
  );
}
