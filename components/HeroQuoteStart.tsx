'use client';

import { useRouter } from 'next/navigation';
import Icon from '@/components/Icon';

const services = [
  { id: 'leak', label: 'Leak', icon: 'droplet' },
  { id: 'drain', label: 'Drain', icon: 'drain' },
  { id: 'water-heater', label: 'Water Heater', icon: 'flame' },
  { id: 'toilet', label: 'Toilet', icon: 'toilet' },
  { id: 'faucet', label: 'Faucet', icon: 'wrench' },
  { id: 'emergency', label: 'Emergency', icon: 'alert-triangle' },
];

export default function HeroQuoteStart() {
  const router = useRouter();

  return (
    <div style={{
      backgroundColor: 'rgba(255,255,255,0.07)',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.15)',
      padding: '1.75rem',
      backdropFilter: 'blur(8px)',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1rem',
      }}>
        <p style={{
          fontSize: '14px',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.55)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}>
          What&apos;s the problem?
        </p>
        <span style={{
          fontSize: '11px',
          fontWeight: 600,
          color: 'rgba(46,134,193,0.7)',
          letterSpacing: '0.02em',
        }}>
          Select one
        </span>
      </div>
      <div className="hqs-grid">
        {services.map((s) => (
          s.id === 'emergency' ? (
            <a
              key={s.id}
              href="tel:6045550123"
              className="hqs-tile"
              style={{ textDecoration: 'none' }}
            >
              <Icon name={s.icon} size={28} />
              <span style={{ fontSize: '12px', fontWeight: 600 }}>Call Now</span>
            </a>
          ) : (
            <button
              key={s.id}
              className="hqs-tile"
              onClick={() => router.push(`/contact?service=${s.id}`)}
            >
              <Icon name={s.icon} size={28} />
              <span style={{ fontSize: '12px', fontWeight: 600 }}>{s.label}</span>
            </button>
          )
        ))}
      </div>
      <button
        onClick={() => router.push('/contact')}
        className="hqs-other"
        style={{
          display: 'block',
          width: '100%',
          marginTop: '0.75rem',
          padding: '10px',
          fontSize: '13px',
          fontWeight: 600,
          color: 'rgba(255,255,255,0.45)',
          backgroundColor: 'transparent',
          border: '1px dashed rgba(255,255,255,0.15)',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
      >
        Something else &rarr;
      </button>
    </div>
  );
}
