export default function Button({ label }: { label: string }) {
  return (
    <div className="flex justify-center w-full">
      <h2 className="uppercase mb-8 opacity-50 font-semibold tracking-wider text-xl">
        {label}
      </h2>
    </div>
  );
}
