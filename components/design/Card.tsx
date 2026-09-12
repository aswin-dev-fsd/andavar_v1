import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'blue' | 'amber';
  className?: string;
  radius?: 'large' | 'small';
}

export function Card({ children, variant = 'default', className = '', radius = 'large' }: CardProps) {
  let bgClass = 'bg-[var(--color-card)]';
  if (variant === 'blue') bgClass = 'bg-[var(--color-blue-wash)]';
  if (variant === 'amber') bgClass = 'bg-[var(--color-amber-wash)]';

  const radiusClass = radius === 'large' ? 'rounded-[26px]' : 'rounded-[14px]';

  return (
    <div 
      className={`border border-[var(--color-line)] ${bgClass} ${radiusClass} shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:-translate-y-[5px] transition-all duration-350 p-[clamp(26px,3.4vw,38px)] ${className}`}
    >
      {children}
    </div>
  );
}
