import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  return (
    <section
      id={id}
      className="mb-14 md:mb-20 w-full max-w-[1520px] mx-auto px-5 md:px-[5.5rem]"
    >
      {children}
    </section>
  );
}
