type IconProps = {
  className?: string;
  size?: number;
};

export function SpiderEmblem({ className, size = 14 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-12 -12 24 24"
      aria-hidden
      className={className}
    >
      <g
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M -2 -4 L -8 -8 L -10 -4" />
        <path d="M -3 -1 L -10 -1 L -11 3" />
        <path d="M -3 2  L -10 4 L -10 8" />
        <path d="M -2 5  L -7 9  L -8 11" />
        <path d="M 2 -4 L 8 -8 L 10 -4" />
        <path d="M 3 -1 L 10 -1 L 11 3" />
        <path d="M 3 2  L 10 4 L 10 8" />
        <path d="M 2 5  L 7 9  L 8 11" />
      </g>
      <ellipse cx="0" cy="2" rx="3.4" ry="4.2" fill="currentColor" />
      <circle cx="0" cy="-3" r="2.4" fill="currentColor" />
    </svg>
  );
}

export function WebCorner({
  className,
  size = 140,
  flip = false,
}: IconProps & { flip?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <g
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      >
        <path d="M 0 0 L 100 100" />
        <path d="M 0 0 L 90 30" />
        <path d="M 0 0 L 70 60" />
        <path d="M 0 0 L 30 90" />
        <path d="M 0 0 L 60 70" />
        <path d="M 90 30 Q 60 30 30 90" />
        <path d="M 70 60 Q 50 50 30 90" />
        <path d="M 60 70 Q 50 50 90 30" />
        <path d="M 100 100 Q 80 40 90 30" />
        <path d="M 100 100 Q 40 80 30 90" />
      </g>
    </svg>
  );
}
