type Props = {
  time: Date;
};

const Time = ({ time }: Props) => {
  // Obtén el string de tiempo con AM/PM (sin espacios extra)
  const formattedTime = time
    .toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replace(/\./g, "") // eliminar puntos
    .replace(/([AP])\s?M/i, "$1M"); // corregir espacio entre A M o P M

  // Separar el "AM" o "PM" del resto
  const timeWithoutAmPm = formattedTime.slice(0, -2); // todo menos últimos 2 caracteres
  const amPm = formattedTime.slice(-2); // últimos 2 caracteres (AM o PM)

  return (
    <span className="flex gap-2 items-start text-7xl tabular-nums font-poppins uppercase font-semibold">
      <span>{timeWithoutAmPm}</span>
      <span className="text-3xl">{amPm}</span>
    </span>
  );
};

export default Time;
