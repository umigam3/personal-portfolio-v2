type Props = {
  time: Date;
};

const Time = ({ time }: Props) => {
  return (
    <span className="text-[96px] leading-3 tabular-nums font-poppins uppercase -mb-6 tracking-tight font-semibold">
      {time
        .toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
        })
        .replace(/\./g, "")}
    </span>
  );
};

export default Time;
