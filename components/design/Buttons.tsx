import React from 'react';
import { Link } from '@/i18n/routing';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  target?: string;
  icon?: React.ReactNode;
}

export function PrimaryButton({ href, onClick, children, className = '', target, icon }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center min-h-[58px] px-8 rounded-full bg-[var(--color-blue)] text-[var(--color-surface)] font-semibold transition-transform duration-[250ms] hover:-translate-y-[2px] active:translate-y-0 min-w-[48px] text-body";
  
  if (href) {
    if (href.startsWith('http') || href.startsWith('tel:')) {
      return (
        <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={`${baseClasses} ${className}`.trim()}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={`${baseClasses} ${className}`.trim()}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`.trim()}>
      {children}
    </button>
  );
}

export function GhostButton({ href, onClick, children, className = '', target, icon }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center min-h-[58px] px-8 rounded-full bg-[var(--color-line)] text-[var(--color-ink)] font-semibold transition-transform duration-[250ms] hover:-translate-y-[2px] active:translate-y-0 text-body";
  
  if (href) {
    if (href.startsWith('http') || href.startsWith('tel:')) {
      return (
        <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={`${baseClasses} ${className}`.trim()}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={`${baseClasses} ${className}`.trim()}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`.trim()}>
      {children}
    </button>
  );
}

export function ArrowLink({ href, children, className = '', target }: ButtonProps) {
  const baseClasses = "inline-flex items-center gap-2 text-[var(--color-blue)] font-semibold transition-transform duration-[250ms] hover:translate-x-1 group text-body";
  
  const content = (
    <>
      {children}
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform duration-[250ms] group-hover:translate-x-1">
        <path d="M4.16669 10H15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 4.16666L15.8333 9.99999L10 15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </>
  );

  if (href?.startsWith('http') || href?.startsWith('tel:')) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={`${baseClasses} ${className}`.trim()}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href || "#"} className={`${baseClasses} ${className}`.trim()}>
      {content}
    </Link>
  );
}
