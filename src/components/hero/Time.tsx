type Props = {
  time: Date;
};
const Time = ({ time }: Props) => {
  return (
    <span className="text-[90px] leading-[70px] font-delirium tabular-nums">
      {time.toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })}{" "}
    </span>
  );
};

export default Time;
