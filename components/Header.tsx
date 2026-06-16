'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .hdr-tagline { display: none; }
        .hdr-nav-links { display: none; }
        .hdr-nav-cta { display: none !important; }
        .hdr-hamburger { display: flex; }
        @media (min-width: 768px) {
          .hdr-tagline { display: block; }
          .hdr-nav-links { display: flex; }
          .hdr-nav-cta { display: inline-block !important; }
          .hdr-hamburger { display: none; }
        }
        .hdr-nav-link {
          color: rgba(255,255,255,0.85);
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          letter-spacing: 0.01em;
          padding: 4px 0;
          transition: color 0.15s;
        }
        .hdr-nav-link:hover { color: #ffffff; }
        .hdr-phone-link {
          color: #1B3A5C;
          font-weight: 700;
          font-size: 1.25rem;
          text-decoration: none;
          display: block;
          line-height: 1.2;
          transition: color 0.15s;
        }
        .hdr-phone-link:hover { color: #2E86C1; }
      `}</style>

      <header style={{ position: 'sticky', top: 0, zIndex: 50 }}>
        {/* White top bar — logo + phone */}
        <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
          <div className="container-wide" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '60px',
          }}>
            <Link href="/" style={{ display: 'block', flexShrink: 0 }}>
              <Image
                src="/logo.png"
                alt="Clearwater Plumbing"
                width={180}
                height={48}
                style={{ height: '46px', width: 'auto', objectFit: 'contain' }}
                priority
              />
            </Link>

            <div style={{ textAlign: 'right' }}>
              <a href="tel:6045550123" className="hdr-phone-link">
                (604) 555-0123
              </a>
              <span className="hdr-tagline" style={{ fontSize: '12px', color: '#64748b', display: 'block' }}>
                Available 24/7
              </span>
            </div>
          </div>
        </div>

        {/* Navy nav bar */}
        <div style={{ backgroundColor: '#1B3A5C' }}>
          <div className="container-wide" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '48px',
          }}>
            {/* Desktop nav */}
            <nav className="hdr-nav-links" style={{ gap: '2.5rem', alignItems: 'center' }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hdr-nav-link">
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hdr-hamburger"
              style={{
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '8px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Toggle navigation"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hdr-nav-cta btn-primary"
              style={{ padding: '8px 20px', fontSize: '14px' }}
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="container-wide" style={{ padding: '0.75rem 1.5rem 1.25rem' }}>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: 'block',
                      color: 'rgba(255,255,255,0.88)',
                      fontSize: '15px',
                      fontWeight: 500,
                      padding: '11px 0',
                      borderBottom: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary"
                  style={{ display: 'block', textAlign: 'center', marginTop: '1rem' }}
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
