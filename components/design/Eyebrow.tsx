import React from 'react';

export function Eyebrow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col gap-[14px] ${className}`}>
      <div className="w-[26px] h-[3px] bg-[var(--color-blue)]"></div>
      <h2 className="text-eyebrow text-[var(--color-ink)]">{children}</h2>
    </div>
  );
}
