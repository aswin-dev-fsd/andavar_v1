'use client';

import React, { useEffect, useRef } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations('Navigation');
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div 
      className={`fixed inset-0 top-[78px] z-30 bg-[var(--color-ground)] overflow-y-auto lg:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
    >
      <nav className="flex flex-col p-[clamp(20px,5vw,40px)] gap-6">
        <Link href="/treatments" onClick={onClose} className="text-h3 text-[var(--color-ink)] min-h-[48px] flex items-center">{t('treatments')}</Link>
        <div className="w-full h-px bg-[var(--color-line)] opacity-50" />
        <Link href="/our-surgeon" onClick={onClose} className="text-h3 text-[var(--color-ink)] min-h-[48px] flex items-center">{t('ourSurgeon')}</Link>
        <div className="w-full h-px bg-[var(--color-line)] opacity-50" />
        <Link href="/schemes" onClick={onClose} className="text-h3 text-[var(--color-ink)] min-h-[48px] flex items-center">{t('schemes')}</Link>
        <div className="w-full h-px bg-[var(--color-line)] opacity-50" />
        <Link href="/visit-us" onClick={onClose} className="text-h3 text-[var(--color-ink)] min-h-[48px] flex items-center">{t('visitUs')}</Link>
        <div className="w-full h-px bg-[var(--color-line)] opacity-50" />
        <Link href="/about" onClick={onClose} className="text-h3 text-[var(--color-ink)] min-h-[48px] flex items-center">{t('about')}</Link>
      </nav>
    </div>
  );
}
