export default function Php({
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
      viewBox="0 0 48 48"
    >
      <defs>
        <clipPath id="2">
          <path
            transform="matrix(15.33333 0 0 11.5 415-125.5)"
            d="m-24 13c0 1.105-.672 2-1.5 2-.828 0-1.5-.895-1.5-2 0-1.105.672-2 1.5-2 .828 0 1.5.895 1.5 2"
            fill="#1890d0"
          />
        </clipPath>
        <linearGradient
          y1="545.8"
          x2="0"
          y2="517.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3889e9" />
          <stop offset="1" stopColor="#5ea5fb" />
        </linearGradient>
        <linearGradient
          id="1"
          gradientUnits="userSpaceOnUse"
          y1="653.96"
          x2="0"
          y2="301.3"
        >
          <stop stopColor="#4965b6" />
          <stop offset="1" stopColor="#8d9dcc" />
        </linearGradient>
        <linearGradient
          id="0"
          y1="653.96"
          x2="0"
          y2="301.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0a80fd" />
          <stop offset="1" stopColor="#56c5fa" />
        </linearGradient>
      </defs>
      <g transform="matrix(.11136 0 0 .11136 59.899-26.03)">
        <circle
          r="173.45"
          cy="478.75"
          cx="-325.89"
          fill="url(#1)"
          transform="matrix(1.24254 0 0 1.24254 82.65-144.23)"
        />
        <g
          clipPath="url(#2)"
          fill="#fff"
          fillOpacity=".847"
          transform="matrix(9.99174 0 0 9.99174-565.81 219.28)"
        >
          <g fill="#fff" fillOpacity=".847">
            <path
              d="m10 29.801l2.207-10.785h5.105c2.207.137 3.309 1.199 3.309 3.063 0 3.195-2.621 5.05-4.965 4.926h-2.484l-.555 2.797h-2.621m3.727-4.793l.691-3.992h1.793c.969 0 1.656.398 1.656 1.199-.141 2.262-1.242 2.66-2.484 2.793"
              fillRule="evenodd"
            />
            <path d="m19.797 27l2.207-10.781h2.621l-.551 2.793h2.484c2.207.137 3.035 1.199 2.758 2.531l-.965 5.457h-2.762l.969-4.926c.137-.664.137-1.066-.832-1.066h-2.066l-1.242 5.988h-2.621" />
            <path
              d="m28.13 29.801l2.211-10.785h5.105c2.207.137 3.309 1.199 3.309 3.063 0 3.195-2.621 5.05-4.969 4.926h-2.484l-.551 2.797m1.105-4.793l.691-3.992h1.793c.965 0 1.652.398 1.652 1.199-.137 2.262-1.238 2.66-2.484 2.793"
              fillRule="evenodd"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
