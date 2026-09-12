'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'ta' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button 
      onClick={toggleLocale}
      className="flex items-center justify-center font-medium text-[var(--color-ink)] hover:text-[var(--color-blue)] transition-colors min-h-[48px] min-w-[48px]"
      aria-label="Toggle language"
    >
      <span className={locale === 'en' ? 'font-bold' : ''}>EN</span>
      <span className="mx-1 opacity-50">/</span>
      <span className={locale === 'ta' ? 'font-bold text-[18px]' : 'text-[18px]'}>த</span>
    </button>
  );
}
