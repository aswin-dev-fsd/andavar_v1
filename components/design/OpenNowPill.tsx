'use client';

import React, { useEffect, useState } from 'react';
import { getClinicStatus, StatusResult } from '@/lib/clinic-hours';
import { useTranslations } from 'next-intl';

export function OpenNowPill() {
  const t = useTranslations('Status');
  const [status, setStatus] = useState<StatusResult>({ status: 'open' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setStatus(getClinicStatus());
    const interval = setInterval(() => setStatus(getClinicStatus()), 60000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return <div className="h-[34px] w-[120px] rounded-full bg-[var(--color-line-cool)] animate-pulse"></div>;
  }

  const isOpen = status.status === 'open' || status.status === 'closing_soon';
  const bgClass = isOpen ? 'bg-[var(--color-green-wash)]' : 'bg-[var(--color-amber-wash)]';
  const dotClass = isOpen ? 'bg-[var(--color-green)] animate-pulse-ring' : 'bg-[var(--color-amber)]';
  
  let text = t('openNow');
  if (status.status === 'closing_soon') text = t('closingSoon');
  if (status.status === 'closed') text = t('closed');
  if (status.status === 'opens_at' && status.timeString) text = t('opensAt', { time: status.timeString });

  return (
    <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full ${bgClass} text-caption font-semibold text-[var(--color-ink)]`}>
      <div className="relative flex items-center justify-center w-2.5 h-2.5">
        {isOpen && (
          <div className={`absolute inset-0 rounded-full ${dotClass} opacity-40`}></div>
        )}
        <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-[var(--color-green)]' : 'bg-[var(--color-amber)]'}`}></div>
      </div>
      {text}
    </div>
  );
}
