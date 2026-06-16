'use client';

import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .ftr-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          padding-bottom: 3rem;
        }
        @media (min-width: 768px) {
          .ftr-grid { grid-template-columns: 2fr 1fr 1.5fr; gap: 4rem; }
        }
        .ftr-bottom {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        @media (min-width: 768px) {
          .ftr-bottom { flex-direction: row; justify-content: space-between; align-items: center; }
        }
        .ftr-link {
          color: rgba(255,255,255,0.6);
          font-size: 14px;
          text-decoration: none;
          transition: color 0.15s;
          display: block;
          padding: 3px 0;
        }
        .ftr-link:hover { color: #ffffff; }
        .ftr-contact-link {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 0.15s;
        }
        .ftr-contact-link:hover { color: #2E86C1; }
      `}</style>

      <footer style={{ backgroundColor: '#1B3A5C', color: '#ffffff' }}>
        <div className="container-wide" style={{ paddingTop: '4rem', paddingBottom: '0' }}>
          <div className="ftr-grid">
            {/* Brand */}
            <div>
              <Link href="/" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
                <Image
                  src="/logo.png"
                  alt="Clearwater Plumbing"
                  width={140}
                  height={40}
                  style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
                />
              </Link>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '280px' }}>
                Fast. Dependable. Professional. Serving the Lower Mainland since 2012.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
                marginBottom: '1rem',
              }}>
                Quick Links
              </h4>
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="ftr-link">
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h4 style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
                marginBottom: '1rem',
              }}>
                Get in Touch
              </h4>
              <a href="tel:6045550123" style={{
                display: 'block',
                fontSize: '1.375rem',
                fontWeight: 700,
                color: '#ffffff',
                textDecoration: 'none',
                marginBottom: '0.625rem',
              }}>
                (604) 555-0123
              </a>
              <a href="mailto:info@clearwaterplumbing.com" className="ftr-contact-link" style={{ fontSize: '14px', display: 'block', marginBottom: '1rem' }}>
                info@clearwaterplumbing.com
              </a>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>Available 24/7 for emergencies</p>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
            <div className="ftr-bottom">
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
                Licensed #L12345 &nbsp;|&nbsp; Insured &nbsp;|&nbsp; Bonded
              </p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
                &copy; {new Date().getFullYear()} Clearwater Plumbing. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
