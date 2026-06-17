'use client';

import { useState, useEffect } from 'react';

export default function AdminGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/admin/session')
      .then((res) => res.json())
      .then((data) => setAuthed(data.authenticated === true))
      .catch(() => setAuthed(false));
  }, []);

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: password }),
    });
    if (res.ok) {
      setAuthed(true);
    } else {
      setError('Invalid password');
    }
    setLoading(false);
  };

  if (authed === null) return null;

  if (!authed) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F4F8',
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '2.5rem',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          maxWidth: '380px',
          width: '100%',
        }}>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1B3A5C', marginBottom: '0.5rem' }}>
            TradePulse Admin
          </h1>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '1.5rem' }}>
            Enter the admin password to continue.
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleLogin(); }}
            placeholder="Password"
            autoFocus
            style={{
              width: '100%',
              padding: '12px 14px',
              border: '2px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '15px',
              outline: 'none',
              boxSizing: 'border-box',
              marginBottom: '1rem',
            }}
          />
          {error && (
            <p role="alert" style={{ fontSize: '14px', color: '#dc2626', marginBottom: '1rem' }}>{error}</p>
          )}
          <button
            onClick={handleLogin}
            disabled={loading || !password}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '15px',
              fontWeight: 700,
              color: '#ffffff',
              backgroundColor: '#2E86C1',
              border: 'none',
              borderRadius: '8px',
              cursor: loading ? 'wait' : 'pointer',
              opacity: loading || !password ? 0.6 : 1,
            }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
