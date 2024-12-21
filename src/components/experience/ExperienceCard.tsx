export default function ExperienceCard({
  date,
  position,
  company,
  description,
  side,
  children,
}: {
  date: string;
  position: string;
  company: string;
  description: string;
  side: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative w-full pb-6">
      <div className="absolute ml-2 md:ml-0 bg-secondary w-4 h-4 rounded-full top-4 left-0 md:left-1/2 transform -translate-x-1/2"></div>
      <div
        className={`relative ml-6 md:ml-0 bg-black/20 px-4 py-3 
            ${
              side == "right"
                ? "md:left-[52.5%] md:w-[47.5%] border-r-violet-500/50 border-r-[1px]"
                : "md:w-[47.5%] md:text-right md:border-l-violet-500/50 md:border-l-[1px] md:border-r-0 border-l-0 border-r-violet-500/50 border-r-[1px]"
            }`}
      >
        <span className="block mb-1 text-sm font-light leading-none text-gray-400 dark:text-gray-500">
          {date}
        </span>
        <span className="text-secondary text-lg font-bold mb-1">
          {position}
        </span>
        <h3 className="text-base font-semibold mb-1 text-gray-200">
          {company}
        </h3>
        <p className="text-base mb-2 text-gray-400 dark:text-gray-400">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
}
