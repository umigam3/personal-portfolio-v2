export default function Alpine({
  className,
  size = 16,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
    >
      <path
        fill="#77c1d2"
        fillRule="evenodd"
        d="M98.444 35.562 126 62.997 98.444 90.432 70.889 62.997z"
        clipRule="evenodd"
      />
      <path
        fill="#2d3441"
        fillRule="evenodd"
        d="m29.556 35.562 57.126 56.876H31.571L2 62.997z"
        clipRule="evenodd"
      />
    </svg>
  );
}
