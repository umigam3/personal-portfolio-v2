import Cobe from "@/components/ui/Cobe";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full max-w-[1520px] mx-auto px-5 md:px-[5.5rem] h-[calc(100svh-115px)] relative overflow-clip"
    >
      <SectionTitle label="Contact" />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3 mb-2">
          <span className="font-medium uppercase">Email</span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 font-semibold">
            gerarddoncel41@gmail.com
          </span>
          <div className="h-0.5 w-full bg-gray-600 opacity-50"></div>
        </div>
        <div className="flex flex-col gap-3 mb-2">
          <span className="font-medium uppercase">Phone</span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 font-semibold">
            +34 636 73 97 99
          </span>
          <div className="h-0.5 w-full bg-gray-600 opacity-50"></div>
        </div>
        <div className="flex flex-col gap-3 mb-2">
          <span className="font-medium uppercase">LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/gerarddoncel/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 font-semibold"
          >
            LinkedIn Profile Page
          </a>
          <div className="h-0.5 w-full bg-gray-600 opacity-50"></div>
        </div>
      </div>
      <Cobe />
    </section>
  );
}
