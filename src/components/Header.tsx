export default function Header() {
  return (
    <header className="sticky top-0 bg-black/0 backdrop-blur-xl z-20">
      <div className="flex py-5 mx-auto px-6 justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="font-semibold">GERARD DONCEL</span>
          <span>FULLSTACK DEVELOPER</span>
        </div>
        <nav className="flex justify-end items-center gap-x-10">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#aboutme">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
