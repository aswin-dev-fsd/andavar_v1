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

  // Trap focus could be added here for full a11y, but for now we rely on standard DOM order and ESC key.
  
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 top-[78px] z-30 bg-[var(--color-ground)] overflow-y-auto lg:hidden"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
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
