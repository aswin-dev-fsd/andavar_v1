'use client';

import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}

export function Reveal({ children, delay = 0, className = '', as: Component = 'div' }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use a JS fallback timeout so content cannot remain invisible if IO fails
    const fallback = setTimeout(() => setIsVisible(true), 2000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(fallback);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.08
      }
    );

    observer.observe(el);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <Component 
      ref={ref} 
      className={`${className} ${isVisible ? 'animate-reveal' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </Component>
  );
}
