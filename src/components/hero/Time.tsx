type Props = {
  time: Date;
};

const Time = ({ time }: Props) => {
  return (
    <span className="text-[96px] leading-3 tabular-nums font-delirium uppercase -mb-6">
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
