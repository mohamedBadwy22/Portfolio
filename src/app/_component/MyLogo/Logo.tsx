

export default function Logo() {
  return (
    <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 125 80"
  className="h-10 w-auto "
  aria-label="Mohamed Badwy"
  role="img"
>
  <defs>
    <linearGradient
      id="emeraldGrad"
      x1="0%"
      y1="0%"
      x2="100%"
      y2="100%"
    >
      <stop offset="0%" stopColor="#34d399" />
      <stop offset="100%" stopColor="#059669" />
    </linearGradient>
  </defs>

  <g transform="translate(8, 5)">
    <path
      d="M 12 65 L 12 15 L 32 42 L 52 15 L 52 65"
      fill="none"
      stroke="#000000"
      strokeWidth="16"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M 12 65 L 12 15 L 32 42 L 52 15 L 52 65"
      fill="none"
      stroke="#f8fafc"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M 52 15 H 70 C 82 15 82 37 70 37 H 52 H 72 C 85 37 85 65 72 65 H 52"
      fill="none"
      stroke="#000000"
      strokeWidth="16"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M 52 15 H 70 C 82 15 82 37 70 37 H 52 H 72 C 85 37 85 65 72 65 H 52"
      fill="none"
      stroke="url(#emeraldGrad)"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </g>
</svg>
  );
}