import LinkedIn from "@components/icons/LinkedIn";
import { Clock } from "./Clock";
import GitHub from "@components/icons/GitHub";

export default function Hero() {
  const now = new Date();

  return (
    <section id="hero" className="h-[calc(100vh-96px)] px-20 mb-20">
      <div className="flex flex-col items-center justify-center h-[80%]">
        <h1 className="text-[168px] font-semibold leading-none">Full Stack</h1>
        <h2 className="text-[124px] leading-none font-semibold bg-gradient-to-r from-[#F47B2A] to-[#FFC76B] inline-block text-transparent bg-clip-text">
          Developer.
        </h2>
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
        <div className="flex flex-col items-end justify-end">
          <span className="opacity-50 font-semibold text-2xl">LOCAL TIME</span>
          <Clock time={now.getTime()} />
        </div>
      </div>
    </section>
  );
}
