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
  fontSize: '0.875rem',
  fontWeight: 600,
  marginBottom: '0.5rem',
  color: '#374151',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  border: '1px solid #d1d5db',
  borderRadius: '0.5rem',
  fontSize: '1rem',
  color: '#374151',
  outline: 'none',
  boxSizing: 'border-box',
  backgroundColor: '#ffffff',
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

    if (!formData.name.trim()) { setError('Please enter your name'); return; }
    if (!formData.phone.trim()) { setError('Please enter your phone number'); return; }
    if (!formData.email.trim()) { setError('Please enter your email'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address'); return;
    }
    if (formData.jobDescription.trim().length < 10) {
      setError('Please describe the job in at least 10 characters'); return;
    }
    if (!formData.address.trim()) { setError('Please enter your address'); return; }

    setLoading(true);
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to submit quote request');
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', jobDescription: '', address: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div style={{
        backgroundColor: '#f0fdf4',
        border: '2px solid #4ade80',
        borderRadius: '0.5rem',
        padding: '2rem',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>✓</div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#14532d', marginBottom: '0.5rem' }}>
          Quote Request Received
        </h3>
        <p style={{ color: '#166534', fontSize: '0.875rem' }}>
          Thanks for reaching out! We'll review your details and contact you within 2 hours to confirm the job and discuss pricing.
        </p>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .quote-form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          .quote-form-row { grid-template-columns: 1fr 1fr; }
        }
        .quote-input:focus {
          border-color: #2E86C1;
          box-shadow: 0 0 0 3px rgba(46, 134, 193, 0.2);
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
            className="quote-input"
            style={inputStyle}
            placeholder="John Smith"
            disabled={loading}
          />
        </div>

        <div className="quote-form-row">
          <div>
            <label htmlFor="phone" style={labelStyle}>Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="quote-input"
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
              className="quote-input"
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
            className="quote-input"
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
            className="quote-input"
            style={{ ...inputStyle, resize: 'none' }}
            placeholder="Tell us what needs to be fixed or installed. Be as specific as possible (e.g., kitchen sink is leaking under the cabinet, need new faucet installed)."
            disabled={loading}
          />
          <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
            {formData.jobDescription.length}/500 characters
          </p>
        </div>

        {error && (
          <div style={{
            backgroundColor: '#fef2f2',
            border: '1px solid #fca5a5',
            color: '#991b1b',
            fontSize: '0.875rem',
            padding: '0.75rem 1rem',
            borderRadius: '0.5rem',
          }}>
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-primary"
          style={{ width: '100%', fontSize: '1.125rem', fontWeight: 700, padding: '1rem' }}
        >
          {loading ? 'Sending...' : 'Get Your Free Quote'}
        </button>

        <p style={{ fontSize: '0.75rem', color: '#6b7280', textAlign: 'center' }}>
          We'll respond within 2 hours on weekdays, same day on weekends
        </p>
      </form>
    </>
  );
}
