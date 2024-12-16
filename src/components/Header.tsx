export default function Header() {
  return (
    <header className="sticky top-0 bg-black/0 backdrop-blur-2xl z-20">
      <div className="flex justify-center items-center py-5 mx-auto max-w-5xl px-6">
        <nav className="flex justify-center items-center gap-x-7">
          <a
            className="opacity-70 duration-200 transform hover:sm:text-secondary hover:sm:opacity-100 hover:sm:font-semibold"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="opacity-70 duration-200 transform hover:sm:text-secondary hover:sm:opacity-100 hover:sm:font-semibold"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="opacity-70 duration-200 transform hover:sm:text-secondary hover:sm:opacity-100 hover:sm:font-semibold"
            href="#aboutme"
          >
            About
          </a>
          <a
            className="opacity-70 duration-200 transform hover:sm:text-secondary hover:sm:opacity-100 hover:sm:font-semibold"
            href="#contact"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
