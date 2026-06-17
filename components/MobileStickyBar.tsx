'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Icon from '@/components/Icon';

export default function MobileStickyBar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const viewport = window.visualViewport;
    if (!viewport) return;
    const check = () => {
      setHidden(viewport.height < window.innerHeight * 0.75);
    };
    viewport.addEventListener('resize', check);
    return () => viewport.removeEventListener('resize', check);
  }, []);

  if (hidden || pathname === '/contact') return null;

  return (
    <>
      <style>{`
        .mobile-sticky-bar {
          display: flex;
        }
        @media (min-width: 768px) {
          .mobile-sticky-bar { display: none; }
        }
      `}</style>
      <div
        className="mobile-sticky-bar"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          gap: '0.625rem',
          padding: '0.75rem 1rem',
          paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))',
          backgroundColor: '#1B3A5C',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 -2px 12px rgba(0,0,0,0.15)',
        }}
      >
        <a
          href="tel:6045550123"
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '14px 12px',
            minHeight: '50px',
            fontSize: '15px',
            fontWeight: 700,
            color: '#ffffff',
            backgroundColor: 'transparent',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '6px',
            textDecoration: 'none',
            transition: 'background-color 0.15s ease',
          }}
        >
          <Icon name="phone" size={18} color="#ffffff" />
          Call Now
        </a>
        <a
          href="/contact"
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '14px 12px',
            minHeight: '50px',
            fontSize: '15px',
            fontWeight: 700,
            color: '#ffffff',
            backgroundColor: '#2E86C1',
            border: '1px solid #2E86C1',
            borderRadius: '6px',
            textDecoration: 'none',
            transition: 'background-color 0.15s ease',
          }}
        >
          Get a Quote
        </a>
      </div>
    </>
  );
}
