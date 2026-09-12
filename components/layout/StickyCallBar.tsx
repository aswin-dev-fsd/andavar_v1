'use client';

import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { getClinicStatus, StatusResult } from '@/lib/clinic-hours';

export function StickyCallBar() {
  const t = useTranslations('Buttons');
  const [status, setStatus] = useState<StatusResult>({ status: 'open' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setStatus(getClinicStatus());
    const interval = setInterval(() => setStatus(getClinicStatus()), 60000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const isClosed = status.status === 'closed' || status.status === 'opens_at';
  const callText = (isClosed && status.timeString) 
    ? t('callOpensAt', { time: status.timeString }) 
    : t('callHospital');

  // Use a tel link. Assuming a placeholder phone number for now.
  const phoneHref = "tel:+914259000000"; 
  // Map link placeholder
  const mapHref = "https://maps.app.goo.gl/placeholder";

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 860px) {
          body { padding-bottom: calc(56px + env(safe-area-inset-bottom, 20px)); }
        }
      `}} />
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-card)] border-t border-[var(--color-line)] shadow-[0_-4px_14px_rgba(0,0,0,0.05)] pb-[env(safe-area-inset-bottom,0px)] lg:hidden min-[860px]:hidden">
        <div className="flex h-[56px]">
          <a 
            href={phoneHref} 
            className="flex-1 flex justify-center items-center font-semibold text-[15px] border-r border-[var(--color-line)] min-h-[48px] active:bg-[var(--color-ground)] transition-colors text-[var(--color-ink)]"
          >
            {callText}
          </a>
          <a 
            href={mapHref} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex justify-center items-center font-semibold text-[15px] text-[var(--color-blue)] min-h-[48px] active:bg-[var(--color-blue-wash)] transition-colors"
          >
            {t('directions')}
          </a>
        </div>
      </div>
    </>
  );
}
