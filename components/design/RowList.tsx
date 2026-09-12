import React from 'react';

export function Tick() {
  return (
    <div className="w-[30px] h-[30px] rounded-full bg-[var(--color-green-wash)] flex items-center justify-center shrink-0">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
}

interface RowItemProps {
  number?: string | number;
  title: string;
  description?: string;
  isLast?: boolean;
}

export function RowItem({ number, title, description, isLast = false }: RowItemProps) {
  return (
    <div className={`py-6 flex gap-6 ${isLast ? '' : 'border-b border-[var(--color-line)]'}`}>
      {number !== undefined && (
        <div className="text-h4 text-[var(--color-blue)] font-mono tabular-nums shrink-0">
          {typeof number === 'number' && number < 10 ? `0${number}` : number}
        </div>
      )}
      <div className="flex flex-col gap-2">
        <h4 className="text-h4 text-[var(--color-ink)]">{title}</h4>
        {description && <p className="text-body text-[var(--color-ink-2)]">{description}</p>}
      </div>
    </div>
  );
}

export function RowList({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {children}
    </div>
  );
}
