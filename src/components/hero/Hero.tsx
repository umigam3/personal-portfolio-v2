import LinkedIn from "@components/icons/LinkedIn";
import { Clock } from "./Clock";
import GitHub from "@components/icons/GitHub";

export default function Hero() {
  const now = new Date();

  return (
    <section id="hero" className="h-[calc(100vh-96px)] px-8 mb-20">
      <div className="flex items-center justify-between h-[80%]">
        <span className="w-fit rotate-90 -ml-5">SCROLL</span>
        <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-[172px] font-semibold leading-none">
            Full Stack
          </h1>
          <h2 className="text-[132px] leading-none font-semibold bg-gradient-to-r from-[#F47B2A] to-[#FFC76B] inline-block text-transparent bg-clip-text">
            Developer.
          </h2>
        </div>
        <span className="w-fit -mr-5 rotate-90">SCROLL</span>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 w-[400px]">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="flex gap-2 items-center">
            <span>Learn more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-move-right-icon lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </div>
        </div>
        <div className="flex gap-4 items-end">
          <a className="bg-[#191919] p-4 rounded-full cursor-pointer hover:bg-primary duration-200">
            <GitHub className="w-5 h-5" />
          </a>
          <a className="bg-[#191919] p-4 rounded-full cursor-pointer hover:bg-primary duration-200">
            <LinkedIn className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
