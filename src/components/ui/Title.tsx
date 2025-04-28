export default function Button({ label }: { label: string }) {
  return (
    <h2 className="uppercase mb-8 opacity-50 font-semibold tracking-wider text-xl">
      {label}
    </h2>
  );
}
