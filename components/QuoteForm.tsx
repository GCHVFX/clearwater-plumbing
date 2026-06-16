'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  jobDescription: string;
  address: string;
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '14px',
  fontWeight: 700,
  marginBottom: '6px',
  color: '#1B3A5C',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px',
  border: '1px solid #cbd5e1',
  borderRadius: '4px',
  fontSize: '15px',
  color: '#1e293b',
  backgroundColor: '#ffffff',
  outline: 'none',
  boxSizing: 'border-box',
  lineHeight: 1.5,
  transition: 'border-color 0.15s ease',
};

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    jobDescription: '',
    address: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) { setError('Please enter your name.'); return; }
    if (!formData.phone.trim()) { setError('Please enter your phone number.'); return; }
    if (!formData.email.trim()) { setError('Please enter your email.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address.'); return;
    }
    if (formData.jobDescription.trim().length < 10) {
      setError('Please describe the job in at least 10 characters.'); return;
    }
    if (!formData.address.trim()) { setError('Please enter your service address.'); return; }

    setLoading(true);
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to submit quote request.');
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', jobDescription: '', address: '' });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div style={{
        border: '2px solid #16a34a',
        borderRadius: '4px',
        padding: '2.5rem',
        textAlign: 'center',
        backgroundColor: '#f0fdf4',
      }}>
        <p style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✓</p>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#14532d', marginBottom: '0.5rem' }}>
          Quote Request Received
        </h3>
        <p style={{ color: '#166534', fontSize: '0.9375rem', lineHeight: 1.7 }}>
          Thanks for reaching out. We'll review your details and contact you within 2 hours to discuss the job and pricing.
        </p>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .qf-two-col {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 640px) {
          .qf-two-col { grid-template-columns: 1fr 1fr; }
        }
        .qf-input:focus {
          border-color: #2E86C1;
          box-shadow: 0 0 0 3px rgba(46,134,193,0.15);
        }
      `}</style>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <label htmlFor="name" style={labelStyle}>Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="qf-input"
            style={inputStyle}
            placeholder="John Smith"
            disabled={loading}
          />
        </div>

        <div className="qf-two-col">
          <div>
            <label htmlFor="phone" style={labelStyle}>Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="qf-input"
              style={inputStyle}
              placeholder="(604) 555-0100"
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="email" style={labelStyle}>Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="qf-input"
              style={inputStyle}
              placeholder="john@example.com"
              disabled={loading}
            />
          </div>
        </div>

        <div>
          <label htmlFor="address" style={labelStyle}>Service Address</label>
          <input
            id="address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="qf-input"
            style={inputStyle}
            placeholder="123 Main Street, Vancouver BC"
            disabled={loading}
          />
        </div>

        <div>
          <label htmlFor="jobDescription" style={labelStyle}>Describe the Job</label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            rows={5}
            className="qf-input"
            style={{ ...inputStyle, resize: 'none' }}
            placeholder="Tell us what needs to be fixed or installed. Be as specific as possible — e.g., kitchen sink leaking under cabinet, need new faucet installed."
            disabled={loading}
          />
          <p style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>
            {formData.jobDescription.length}/500 characters
          </p>
        </div>

        {error && (
          <div style={{
            backgroundColor: '#fef2f2',
            border: '1px solid #fca5a5',
            color: '#991b1b',
            fontSize: '14px',
            padding: '12px 16px',
            borderRadius: '4px',
          }}>
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-primary"
          style={{ width: '100%', fontSize: '16px', fontWeight: 700, padding: '16px', textAlign: 'center' }}
        >
          {loading ? 'Sending...' : 'Get Your Free Quote'}
        </button>

        <p style={{ fontSize: '13px', color: '#64748b', textAlign: 'center' }}>
          We respond within 2 hours on weekdays, same day on weekends.
        </p>
      </form>
    </>
  );
}
