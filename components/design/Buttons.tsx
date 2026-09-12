import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function PrimaryButton({ href, icon, children, className = '', ...props }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center min-h-[58px] px-8 rounded-full bg-[var(--color-blue)] text-white font-semibold transition-transform duration-250 hover:-translate-y-[2px] active:translate-y-0 min-w-[48px]";
  
  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}

export function GhostButton({ href, icon, children, className = '', ...props }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center min-h-[58px] px-8 rounded-full border-[1.5px] border-[var(--color-line)] bg-transparent text-[var(--color-ink)] font-medium transition-transform duration-250 hover:-translate-y-[2px] active:translate-y-0 min-w-[48px]";
  
  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}

export function ArrowLink({ href, children, className = '' }: { href: string, children: React.ReactNode, className?: string }) {
  return (
    <Link 
      href={href} 
      className={`group inline-flex items-center text-[var(--color-blue)] font-semibold gap-[9px] hover:gap-[15px] transition-all duration-300 min-h-[48px] ${className}`}
    >
      {children}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </Link>
  );
}
