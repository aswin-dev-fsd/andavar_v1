import React from 'react';

interface ApertureProps {
  className?: string;
  size?: number;
  ringCount?: number;
}

export function Aperture({ className = '', size = 200, ringCount = 6 }: ApertureProps) {
  const center = size / 2;
  const gap = center / (ringCount + 1);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`absolute pointer-events-none ${className}`}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: ringCount }).map((_, i) => {
        const radius = gap * (i + 1);
        let stroke = 'var(--color-line)';
        let opacity = 1;
        let fill = 'none';

        if (i === 1) {
          // One blue ring at approx 45% opacity
          stroke = 'var(--color-blue)';
          opacity = 0.45;
        }

        if (i === 0) {
          // Innermost ring may use blue wash
          fill = 'var(--color-blue-wash)';
          stroke = 'var(--color-blue-wash)';
        }

        return (
          <circle
            key={i}
            cx={center}
            cy={center}
            r={radius}
            stroke={stroke}
            strokeWidth="1"
            fill={fill}
            opacity={opacity}
          />
        );
      })}
    </svg>
  );
}
