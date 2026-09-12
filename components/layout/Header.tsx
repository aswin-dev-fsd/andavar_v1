'use client';

import React, { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Aperture } from '../design/Aperture';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const t = useTranslations('Navigation');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`sticky top-0 z-40 w-full min-h-[78px] transition-all duration-300 flex flex-col justify-center ${
          scrolled ? 'border-b border-[var(--color-line)] shadow-sm' : 'border-b border-transparent'
        }`}
        style={{
          backgroundColor: 'rgba(251, 248, 243, 0.86)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)'
        }}
      >
        <div className="max-w-[1180px] w-full mx-auto px-[clamp(20px,5vw,40px)] flex items-center justify-between">
          
          {/* Brand - Left */}
          <Link href="/" className="flex items-center gap-3 relative shrink z-50 min-h-[48px]">
            <div className="relative overflow-hidden shrink-0 w-[28px] h-[28px] min-[430px]:w-[36px] min-[430px]:h-[36px]">
              <Aperture size={72} ringCount={3} className="-top-4 -left-4 opacity-70" />
            </div>
            <div className="flex flex-col shrink">
              <span className="font-bold text-[19px] leading-tight text-[var(--color-ink)] whitespace-nowrap truncate">Shri Andavar</span>
              <span className="text-[11px] font-semibold text-[var(--color-ink-3)] tracking-wider uppercase whitespace-nowrap truncate hidden min-[430px]:block">Eye Care & Retina Centre</span>
            </div>
          </Link>

          {/* Nav - Center (Desktop only) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 mx-auto">
            <Link href="/treatments" className="font-medium text-[var(--color-ink-2)] hover:text-[var(--color-blue)] transition-colors min-h-[48px] flex items-center whitespace-nowrap">{t('treatments')}</Link>
            <Link href="/schemes" className="font-medium text-[var(--color-ink-2)] hover:text-[var(--color-blue)] transition-colors min-h-[48px] flex items-center whitespace-nowrap">{t('schemes')}</Link>
            <Link href="/visit-us" className="font-medium text-[var(--color-ink-2)] hover:text-[var(--color-blue)] transition-colors min-h-[48px] flex items-center whitespace-nowrap">{t('visitUs')}</Link>
            <Link href="/about" className="font-medium text-[var(--color-ink-2)] hover:text-[var(--color-blue)] transition-colors min-h-[48px] flex items-center whitespace-nowrap">{t('about')}</Link>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2 shrink-0 z-50">
            <LanguageSwitcher />
            
            <button 
              className="lg:hidden flex items-center justify-center w-[48px] h-[48px] text-[var(--color-ink)]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
