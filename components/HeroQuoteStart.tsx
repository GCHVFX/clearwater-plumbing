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
      border: '1px solid rgba(255,255,255,0.12)',
      padding: '1.75rem',
      backdropFilter: 'blur(8px)',
    }}>
      <style>{`
        .hqs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.625rem;
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .hqs-grid { grid-template-columns: repeat(6, 1fr); }
        }
        .hqs-tile {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1.125rem 0.5rem;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.12);
          background-color: rgba(255,255,255,0.04);
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
          color: rgba(255,255,255,0.6);
        }
        .hqs-tile:hover {
          background-color: rgba(46,134,193,0.15);
          border-color: rgba(46,134,193,0.5);
          transform: translateY(-3px);
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        .hqs-tile:active {
          transform: translateY(-1px);
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }
        .hqs-other:hover {
          border-color: rgba(255,255,255,0.3) !important;
          color: rgba(255,255,255,0.8) !important;
        }
      `}</style>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1rem',
      }}>
        <p style={{
          fontSize: '14px',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.5)',
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
          <button
            key={s.id}
            className="hqs-tile"
            onClick={() => router.push(`/contact?service=${s.id}`)}
          >
            <Icon name={s.icon} size={24} />
            <span style={{ fontSize: '12px', fontWeight: 600 }}>{s.label}</span>
          </button>
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
