export default function Button({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-primary text-black flex gap-x-2 items-center cursor-pointer font-medium text-md rounded-xl px-4 py-2.5 me-2 mb-2 border-[1px] border-slate-500/20 duration-100 ease-in-out transform">
      {children}
      <a target="_blank" rel="noopener noreferrer" href={href}>
        {label}
      </a>
    </div>
  );
}
