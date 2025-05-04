import { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  source: string;
  description: string;
  children?: ReactNode;
  skills: ReactNode;
  buttons: ReactNode;
}

export default function ProjectCard({
  title,
  source,
  description,
  skills,
  buttons,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col mb-8 w-full bg-black/20 rounded-lg">
      <div className="project-image w-full overflow-hidden rounded-t-lg">
        <img
          className="w-full aspect-video object-contain hover:animate-zoomIn"
          loading="lazy"
          src={source}
          alt={title}
        />
      </div>
      <div className="flex flex-col justify-between w-full p-6">
        <div className="flex flex-col">
          <h2 className="opacity-85 text-2xl font-semibold mb-3">{title}</h2>
          <div className="flex flex-wrap mb-2">{skills}</div>
          <p className="text-base mb-4 text-gray-400 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap gap-x-1">{buttons}</div>
      </div>

      <style jsx>{`
        .project-image {
          mask-image: linear-gradient(to bottom, black 60%, transparent);
          -webkit-mask-image: linear-gradient(
            to bottom,
            black 60%,
            transparent
          );
        }
      `}</style>
    </div>
  );
}
