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
      <div className="hidden lg:block absolute ml-2 lg:ml-0 bg-secondary w-4 h-4 rounded-full top-4 left-0 lg:left-1/2 transform -translate-x-1/2"></div>
      <div
        className={`relative ml-0 bg-black/20 p-6 rounded-tl-xl rounded-bl-xl lg:rounded-none
            ${
              side == "right"
                ? "lg:left-[52.5%] lg:w-[47.5%] border-r-violet-500/50 border-r-[1px]"
                : "lg:w-[47.5%] lg:text-right lg:border-l-violet-500/50 lg:border-l-[1px] lg:border-r-0 border-l-0 border-r-violet-500/50 border-r-[1px]"
            }`}
      >
        <span className="block mb-1 text-sm leading-none text-gray-400 dark:text-gray-500">
          {date}
        </span>
        <span className="text-secondary text-xl font-bold mb-1">
          {position}
        </span>
        <h3 className="text-lg font-semibold mb-1 text-gray-200">{company}</h3>
        <p className="md:text-lg mb-4 text-gray-400 dark:text-gray-400">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
}
