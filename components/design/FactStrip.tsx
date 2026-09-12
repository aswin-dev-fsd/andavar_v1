import React from 'react';

interface Fact {
  number: string;
  caption: string;
}

interface FactStripProps {
  facts: Fact[];
  className?: string;
}

export function FactStrip({ facts, className = '' }: FactStripProps) {
  return (
    <div className={`border border-[var(--color-line)] rounded-[26px] bg-[var(--color-card)] overflow-hidden ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-line)]">
        {facts.map((fact, index) => (
          <div key={index} className="p-[clamp(24px,3vw,36px)] flex flex-col gap-2 animate-reveal" style={{ animationDelay: `${index * 0.09}s` }}>
            <div className="text-display-2 text-[var(--color-blue)] leading-none">{fact.number}</div>
            <div className="text-caption text-[var(--color-ink-2)] font-medium uppercase tracking-wider">{fact.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
