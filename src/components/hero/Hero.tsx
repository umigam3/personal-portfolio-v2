import { Clock } from "./Clock";

export default function Hero() {
  const now = new Date();

  return (
    <section
      id="hero"
      className="max-w-5xl mx-auto h-[calc(100vh-60px)] mb-24 px-6 flex items-center justify-center"
    >
      <div className="flex flex-col gap-7 w-full items-start relative">
        <img src="/text/FULLSTACK.svg" alt="Full Stack" className="w-full" />
        <div className="flex justify-between w-full gap-6">
          <img src="/text/DEVELOPER.svg" alt="Full Stack" className="w-[74%]" />
          <div className="flex flex-col gap-2 w-[30%] h-full justify-around">
            <div className="flex items-center justify-between">
              <div className="opacity-50 font-semibold text-xl">LOCAL TIME</div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-xl">BCN</span>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <Clock time={now.getTime()} />
            </div>
            <a
              href="#projects"
              className="bg-primary w-full flex items-center justify-center py-2 rounded-xl hover:cursor-pointer hover:contrast-200"
            >
              <div className="text-3xl font-semibold">Get in touch</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
