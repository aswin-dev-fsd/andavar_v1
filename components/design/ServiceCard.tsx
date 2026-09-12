import React from 'react';
import { Card } from './Card';
import { ArrowLink } from './Buttons';
import { Aperture } from './Aperture';

interface ServiceCardProps {
  symptom: string;
  title: string;
  description: string;
  href: string;
  linkText: string;
  className?: string;
}

export function ServiceCard({ symptom, title, description, href, linkText, className = '' }: ServiceCardProps) {
  return (
    <Card className={`group relative overflow-hidden flex flex-col h-full ${className}`}>
      {/* Decorative Aperture */}
      <div className="absolute -top-12 -right-12 transition-transform duration-[350ms] group-hover:scale-110 group-hover:rotate-6">
        <Aperture size={160} ringCount={3} />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <p className="text-eyebrow text-[var(--color-amber)] mb-4">{symptom}</p>
        <h3 className="text-h3 text-[var(--color-ink)] mb-4">{title}</h3>
        <p className="text-body text-[var(--color-ink-2)] mb-8 flex-grow">{description}</p>
        
        <div className="mt-auto">
          <ArrowLink href={href}>{linkText}</ArrowLink>
        </div>
      </div>
    </Card>
  );
}
