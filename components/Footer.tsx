'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CONTRACTOR } from '@/lib/contractor';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1B3A5C', color: '#ffffff' }}>
      <div className="container-wide" style={{ paddingTop: '4rem', paddingBottom: '0' }}>
        <div className="ftr-grid">
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
              <Image
                src="/logo.png"
                alt={CONTRACTOR.name}
                width={140}
                height={40}
                style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '280px' }}>
              Fast. Dependable. Professional. Serving the Lower Mainland.
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
            <a href={`tel:${CONTRACTOR.phoneTel}`} style={{
              display: 'block',
              fontSize: '1.375rem',
              fontWeight: 700,
              color: '#ffffff',
              textDecoration: 'none',
              marginBottom: '0.625rem',
            }}>
              {CONTRACTOR.phone}
            </a>
            <a href={`mailto:${CONTRACTOR.email}`} className="ftr-contact-link" style={{ fontSize: '14px', display: 'block', marginBottom: '1rem' }}>
              {CONTRACTOR.email}
            </a>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>Available 24/7 for emergencies</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
          <div className="ftr-bottom">
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
              {CONTRACTOR.serviceAreas.join(' · ')}
            </p>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
              &copy; {new Date().getFullYear()} {CONTRACTOR.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
