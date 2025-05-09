import LinkedIn from "@components/icons/LinkedIn";
import Title from "@components/ui/Title";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-[1520px] mx-auto w-full px-5 md:px-[5.5rem] h-[calc(100dvh-96px)] flex flex-col items-center justify-center"
    >
      <img
        src="/gerard-centered.png"
        alt="Gerard Doncel"
        className="w-56 mb-10"
      />
      <span className="text-7xl font-bold mb-10 bg-gradient-to-r from-[#F47B2A] to-[#FFC76B] inline-block text-transparent bg-clip-text">
        Let's connect!
      </span>
      <div className="flex gap-4 items-center mb-5">
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
          className="lucide lucide-mail-icon lucide-mail"
        >
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          <rect x="2" y="4" width="20" height="16" rx="2" />
        </svg>
        <span className="text-2xl">gerarddoncel41@gmail.com</span>
      </div>
      <div className="flex gap-4 items-center mb-5">
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
          className="lucide lucide-phone-icon lucide-phone"
        >
          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
        </svg>
        <span className="text-2xl">+34 636 73 97 99</span>
      </div>
      <div className="flex gap-4 items-center mb-5">
        <LinkedIn className="w-6 h-6" />
        <a
          href="https://www.linkedin.com/in/gerarddoncel/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl"
        >
          LinkedIn profile page
        </a>
      </div>
    </section>
  );
}
