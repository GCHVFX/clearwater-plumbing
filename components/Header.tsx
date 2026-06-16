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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .header-logo-name { display: none; }
        .header-desktop-nav { display: none; }
        .header-desktop-cta { display: none !important; }
        .header-mobile-btn { display: flex; }
        @media (min-width: 640px) {
          .header-logo-name { display: inline; }
        }
        @media (min-width: 768px) {
          .header-desktop-nav { display: flex; }
          .header-desktop-cta { display: inline-block !important; }
          .header-mobile-btn { display: none; }
        }
        .header-nav-link:hover { color: #2E86C1; }
      `}</style>

      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: '#1B3A5C',
        color: '#ffffff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
      }}>
        <div className="container-wide">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '5rem',
          }}>
            {/* Logo */}
            <Link href="/" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              flexShrink: 0,
              color: '#ffffff',
            }}>
              <Image
                src="/icon.png"
                alt="Clearwater Plumbing"
                width={40}
                height={40}
                style={{ width: '2.5rem', height: '2.5rem' }}
              />
              <span className="header-logo-name" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                Clearwater
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="header-desktop-nav" style={{ gap: '2rem' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="header-nav-link"
                  style={{ fontSize: '0.875rem', fontWeight: 500, color: '#ffffff' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <Link href="/contact" className="btn-primary header-desktop-cta">
              Get Quote
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="header-mobile-btn"
              style={{
                padding: '0.5rem',
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Toggle menu"
            >
              <svg
                style={{ width: '1.5rem', height: '1.5rem' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav style={{
              borderTop: '1px solid rgba(46, 134, 193, 0.2)',
              paddingTop: '1rem',
              paddingBottom: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: '#ffffff',
                    padding: '0.375rem 0',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{ marginTop: '0.5rem' }}
              >
                Get Quote
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
