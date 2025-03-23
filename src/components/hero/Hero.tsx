export default function Hero() {
  return (
    <section
      id="hero"
      className="max-w-5xl mx-auto h-[calc(100vh-60px)] mb-24 px-6 flex items-center justify-center"
    >
      <div className="flex flex-col gap-4 w-full items-start relative">
        <img src="/text/FULLSTACK.svg" alt="Full Stack" className="w-full" />
        <div className="flex justify-between w-full gap-6">
          <img src="/text/DEVELOPER.svg" alt="Full Stack" className="w-2/3" />
          <div className="relative flex items-center gap-4 w-1/3 rounded-3xl overflow-hidden">
            <img src="/Barcelona.svg" className="h-full" />
            <img src="/location.svg" className="absolute top-4 left-4" />
            <div className="absolute rounded-full bottom-4 right-4 bg-primary px-4 py-2 text-sm">
              Spain, Barcelona
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
