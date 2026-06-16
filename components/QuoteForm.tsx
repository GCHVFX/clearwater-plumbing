'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  jobDescription: string;
  address: string;
}

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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!formData.phone.trim()) {
      setError('Please enter your phone number');
      return;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (formData.jobDescription.trim().length < 10) {
      setError('Please describe the job in at least 10 characters');
      return;
    }
    if (!formData.address.trim()) {
      setError('Please enter your address');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit quote request');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        jobDescription: '',
        address: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border-2 border-green-400 rounded-lg p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-green-900 mb-2">
          Quote Request Received
        </h3>
        <p className="text-green-800 text-sm">
          Thanks for reaching out! We'll review your details and contact you
          within 2 hours to confirm the job and discuss pricing.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-600 mb-2 text-dark">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue text-dark"
          placeholder="John Smith"
          disabled={loading}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-600 mb-2 text-dark">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue text-dark"
            placeholder="(604) 555-0100"
            disabled={loading}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-600 mb-2 text-dark">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue text-dark"
            placeholder="john@example.com"
            disabled={loading}
          />
        </div>
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-600 mb-2 text-dark">
          Service Address
        </label>
        <input
          id="address"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue text-dark"
          placeholder="123 Main Street, Vancouver BC"
          disabled={loading}
        />
      </div>

      <div>
        <label htmlFor="jobDescription" className="block text-sm font-600 mb-2 text-dark">
          Describe the Job
        </label>
        <textarea
          id="jobDescription"
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue text-dark resize-none"
          placeholder="Tell us what needs to be fixed or installed. Be as specific as possible (e.g., kitchen sink is leaking under the cabinet, need new faucet installed)."
          disabled={loading}
        />
        <p className="text-xs text-gray-500 mt-1">
          {formData.jobDescription.length}/500 characters
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-300 text-red-800 text-sm px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary bg-blue font-bold text-lg"
      >
        {loading ? 'Sending...' : 'Get Your Free Quote'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We'll respond within 2 hours on weekdays, same day on weekends
      </p>
    </form>
  );
}
