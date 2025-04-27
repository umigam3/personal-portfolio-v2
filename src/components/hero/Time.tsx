type Props = {
  time: Date;
};

const Time = ({ time }: Props) => {
  return (
    <span className="text-[96px] leading-none tabular-nums font-delirium uppercase">
      {time
        .toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
        .replace(/\./g, "")}
    </span>
  );
};

export default Time;
