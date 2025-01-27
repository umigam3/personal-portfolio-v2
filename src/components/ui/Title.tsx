export default function Button({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 mb-12">
      <h2 className="text-3xl">{label}</h2>
      <hr className="w-52 border-b border-secondary" />
    </div>
  );
}
