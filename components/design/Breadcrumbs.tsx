import React from 'react';
import { Link } from '@/i18n/routing';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumbs" className={`flex flex-wrap items-center gap-2 text-caption text-[var(--color-ink-3)] font-medium ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {index > 0 && <span className="text-[var(--color-ink-3)] opacity-60">/</span>}
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-[var(--color-blue)] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--color-ink)]" aria-current={isLast ? 'page' : undefined}>
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
