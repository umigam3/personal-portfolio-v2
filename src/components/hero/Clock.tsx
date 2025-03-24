"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Time = dynamic(() => import("./Time"), { ssr: false });

type Props = {
  time: number;
};

export const Clock = ({ time: initial }: Props) => {
  const [time, setTime] = useState(new Date(initial));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="tabular-nums mt-2">
      <Time time={time} />
    </div>
  );
};
