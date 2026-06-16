'use client';

import Link from 'next/link';

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
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .footer-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        @media (min-width: 768px) {
          .footer-bottom { flex-direction: row; justify-content: space-between; }
        }
        .footer-link:hover { color: #2E86C1; }
        .footer-contact-link:hover { color: #f59e0b; }
      `}</style>

      <footer className="section-navy">
        <div className="container-wide" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div className="footer-grid">
            {/* Brand */}
            <div>
              <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '1rem' }}>
                Clearwater Plumbing
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#d1d5db', marginBottom: '1rem' }}>
                Fast. Dependable. Professional.
              </p>
              <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                Serving the Lower Mainland since 2012
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '1rem' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link" style={{ color: '#d1d5db' }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '1rem' }}>Get in Touch</h4>
              <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                <span style={{ color: '#d1d5db' }}>Phone: </span>
                <a href="tel:6045550123" className="footer-contact-link" style={{ color: '#2E86C1' }}>
                  (604) 555-0123
                </a>
              </p>
              <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                <span style={{ color: '#d1d5db' }}>Email: </span>
                <a href="mailto:info@clearwaterplumbing.com" className="footer-contact-link" style={{ color: '#2E86C1' }}>
                  info@clearwaterplumbing.com
                </a>
              </p>
              <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '1rem' }}>
                Available 24/7 for emergencies
              </p>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(46, 134, 193, 0.2)', paddingTop: '2rem' }}>
            <div className="footer-bottom">
              <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                Licensed #L12345 | Insured | Bonded
              </p>
              <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                &copy; {new Date().getFullYear()} Clearwater Plumbing. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
