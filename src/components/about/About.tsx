import Title from "@components/ui/Title";

export default function Experience() {
  return (
    <section id="aboutme" className="mb-20 max-w-7xl mx-auto w-full">
      <Title label="About me" />
      <div className="flex justify-between gap-10">
        <div className="w-1/2 text-2xl">
          <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </p>
          <p className="mb-4">
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged.
          </p>
          <p className="mb-4">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <div className="w-1/2 p-6">{/* Skills component */}</div>
      </div>
    </section>
  );
}
