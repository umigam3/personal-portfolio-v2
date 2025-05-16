type Props = {
  time: Date;
};

const Time = ({ time }: Props) => {
  const formattedTime = time
    .toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replace(/\./g, "")
    .replace(/([AP])\s?M/i, "$1M");

  const timeWithoutAmPm = formattedTime.slice(0, -2);
  const amPm = formattedTime.slice(-2);

  return (
    <span className="flex gap-2 items-start text-7xl tabular-nums font-poppins uppercase font-semibold">
      <span>{timeWithoutAmPm}</span>
      <span className="text-3xl">{amPm}</span>
    </span>
  );
};

export default Time;
