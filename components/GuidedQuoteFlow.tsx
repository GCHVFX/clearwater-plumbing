'use client';

import { useState, useRef, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import type { QuoteRequest } from '@/types/quote';
import { SERVICE_TYPES, LOCATIONS, URGENCY_LEVELS } from '@/types/quote';
import Icon from '@/components/Icon';

const TOTAL_STEPS = 6;
const MAX_PHOTOS = 5;

interface PhotoPreview {
  file: File;
  url: string;
}

const STEP_LABELS = ['Service', 'Location', 'Urgency', 'Photos', 'Details', 'Contact'];

export default function GuidedQuoteFlow() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get('service') || '';
  const hasPreselection = SERVICE_TYPES.some((s) => s.id === preselected);
  const [step, setStep] = useState(hasPreselection ? 2 : 1);
  const [serviceType, setServiceType] = useState(hasPreselection ? preselected : '');
  const [location, setLocation] = useState('');
  const [urgency, setUrgency] = useState('');
  const [photos, setPhotos] = useState<PhotoPreview[]>([]);
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const goNext = () => {
    setError('');
    if (step === 1 && !serviceType) { setError('Please select a service type.'); return; }
    if (step === 2 && !location) { setError('Please select a location.'); return; }
    if (step === 3 && !urgency) { setError('Please select urgency.'); return; }
    if (step === 5 && description.trim().length < 10) { setError('Please describe the problem in at least 10 characters.'); return; }
    if (step === 6) {
      if (!name.trim()) { setError('Please enter your name.'); return; }
      if (!phone.trim()) { setError('Please enter your phone number.'); return; }
      if (!email.trim()) { setError('Please enter your email.'); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Please enter a valid email address.'); return; }
      if (!address.trim()) { setError('Please enter your address.'); return; }
      handleSubmit();
      return;
    }
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };

  const goBack = () => {
    setError('');
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    const request: QuoteRequest = {
      serviceType,
      location,
      urgency,
      description,
      photos: photos.map((p) => p.file),
      customerName: name,
      phone,
      email,
      address,
    };

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: request.customerName,
          phone: request.phone,
          email: request.email,
          address: request.address,
          jobDescription: `[${request.serviceType}] [${request.location}] [${request.urgency}] ${request.description}`,
        }),
      });
      if (!response.ok) throw new Error('Failed to submit');
    } catch {
      // Phase 1: submit silently even if API fails
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  const addPhotos = useCallback((files: FileList | File[]) => {
    const newPhotos: PhotoPreview[] = [];
    const fileArray = Array.from(files);
    for (const file of fileArray) {
      if (photos.length + newPhotos.length >= MAX_PHOTOS) break;
      if (!file.type.startsWith('image/')) continue;
      newPhotos.push({ file, url: URL.createObjectURL(file) });
    }
    setPhotos((prev) => [...prev, ...newPhotos].slice(0, MAX_PHOTOS));
  }, [photos.length]);

  const removePhoto = (index: number) => {
    setPhotos((prev) => {
      const removed = prev[index];
      if (removed) URL.revokeObjectURL(removed.url);
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files) addPhotos(e.dataTransfer.files);
  }, [addPhotos]);

  const getSelectionLabel = (stepNum: number): string | null => {
    if (stepNum === 1 && serviceType) return SERVICE_TYPES.find((s) => s.id === serviceType)?.label || null;
    if (stepNum === 2 && location) return LOCATIONS.find((l) => l.id === location)?.label || null;
    if (stepNum === 3 && urgency) return URGENCY_LEVELS.find((u) => u.id === urgency)?.label || null;
    if (stepNum === 4) return photos.length > 0 ? `${photos.length} photo${photos.length > 1 ? 's' : ''}` : null;
    return null;
  };

  if (submitted) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '3rem 1.5rem',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      }}>
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          backgroundColor: '#ecfdf5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          color: '#16a34a',
        }}>
          <Icon name="check-circle" size={36} color="#16a34a" />
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1B3A5C', marginBottom: '0.75rem' }}>
          Thank You
        </h2>
        <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.7, maxWidth: '420px', margin: '0 auto 1.5rem' }}>
          We&apos;ve received your request. We&apos;ll review the information and contact you shortly.
        </p>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.625rem 1.25rem',
          backgroundColor: '#F0F4F8',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#1B3A5C',
          fontWeight: 600,
        }}>
          <Icon name="phone" size={16} color="#2E86C1" />
          Questions? Call (604) 555-0123
        </div>
      </div>
    );
  }

  const progressPct = ((step - 1) / (TOTAL_STEPS - 1)) * 100;

  const optionCardStyle = (selected: boolean): React.CSSProperties => ({
    padding: '1.125rem 0.75rem',
    borderRadius: '10px',
    border: selected ? '2px solid #2E86C1' : '2px solid #e2e8f0',
    backgroundColor: selected ? '#eff8ff' : '#ffffff',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'all 0.15s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    color: selected ? '#2E86C1' : '#64748b',
    minHeight: '48px',
  });

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    fontSize: '16px',
    color: '#1e293b',
    backgroundColor: '#ffffff',
    outline: 'none',
    boxSizing: 'border-box',
    lineHeight: 1.5,
    transition: 'border-color 0.15s ease',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '14px',
    fontWeight: 700,
    marginBottom: '6px',
    color: '#1B3A5C',
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      overflow: 'hidden',
    }}>
      <style>{`
        .gqf-option-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.625rem;
        }
        @media (min-width: 640px) {
          .gqf-option-grid { grid-template-columns: repeat(4, 1fr); gap: 0.75rem; }
        }
        .gqf-urgency-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.625rem;
        }
        @media (min-width: 640px) {
          .gqf-urgency-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .gqf-photo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.625rem;
        }
        @media (min-width: 640px) {
          .gqf-photo-grid { grid-template-columns: repeat(5, 1fr); gap: 0.75rem; }
        }
        .gqf-contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .gqf-contact-grid { grid-template-columns: 1fr 1fr; }
        }
        .gqf-input:focus {
          border-color: #2E86C1 !important;
          box-shadow: 0 0 0 3px rgba(46,134,193,0.12);
        }
        .gqf-option-card:hover {
          border-color: #2E86C1 !important;
          background-color: #f8fbff !important;
        }
        .gqf-steps-bar {
          display: none;
        }
        @media (min-width: 640px) {
          .gqf-steps-bar { display: flex; }
        }
        .gqf-photo-desktop {
          display: none;
        }
        .gqf-photo-mobile {
          display: flex;
        }
        @media (min-width: 768px) {
          .gqf-photo-desktop { display: flex; }
          .gqf-photo-mobile { display: none; }
        }
        .gqf-mobile-phone {
          display: flex;
        }
        @media (min-width: 1024px) {
          .gqf-mobile-phone { display: none; }
        }
        .gqf-back-btn:hover {
          border-color: #94a3b8 !important;
          color: #1e293b !important;
        }
        .gqf-next-btn {
          min-height: 48px;
        }
      `}</style>

      {/* Progress header */}
      <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #f0f0f0' }}>
        {/* Step dots — desktop */}
        <div className="gqf-steps-bar" style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.75rem',
        }}>
          {STEP_LABELS.map((label, i) => {
            const stepNum = i + 1;
            const isComplete = step > stepNum;
            const isCurrent = step === stepNum;
            const selectionLabel = isComplete ? getSelectionLabel(stepNum) : null;
            return (
              <div key={label} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flex: 1,
              }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: isComplete ? '#2E86C1' : isCurrent ? '#1B3A5C' : '#e2e8f0',
                  color: isComplete || isCurrent ? '#ffffff' : '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  flexShrink: 0,
                  transition: 'all 0.2s ease',
                }}>
                  {isComplete ? <Icon name="check-circle" size={14} color="#ffffff" /> : stepNum}
                </div>
                <div style={{ minWidth: 0 }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: isCurrent ? 700 : 500,
                    color: isCurrent ? '#1B3A5C' : '#94a3b8',
                    display: 'block',
                    lineHeight: 1.2,
                  }}>
                    {label}
                  </span>
                  {selectionLabel && (
                    <span style={{ fontSize: '11px', color: '#2E86C1', fontWeight: 600 }}>
                      {selectionLabel}
                    </span>
                  )}
                </div>
                {i < STEP_LABELS.length - 1 && (
                  <div style={{
                    flex: 1,
                    height: '2px',
                    backgroundColor: isComplete ? '#2E86C1' : '#e2e8f0',
                    margin: '0 0.375rem',
                    transition: 'background-color 0.2s ease',
                  }} />
                )}
              </div>
            );
          })}
        </div>
        {/* Mobile progress */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.375rem' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#1B3A5C' }}>
            Step {step}: {STEP_LABELS[step - 1]}
          </span>
          <span style={{ fontSize: '13px', color: '#94a3b8' }}>{step}/{TOTAL_STEPS}</span>
        </div>
        <div style={{ height: '4px', backgroundColor: '#e2e8f0', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            width: `${progressPct}%`,
            backgroundColor: '#2E86C1',
            borderRadius: '2px',
            transition: 'width 0.3s ease',
          }} />
        </div>
      </div>

      <div style={{ padding: '1.5rem' }}>
        {/* Step 1: Service Type */}
        {step === 1 && (
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1B3A5C', marginBottom: '0.375rem' }}>
              What do you need help with?
            </h3>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '1.25rem' }}>
              Select the option that best describes your issue.
            </p>
            <div className="gqf-option-grid">
              {SERVICE_TYPES.map((s) => (
                <div
                  key={s.id}
                  className="gqf-option-card"
                  onClick={() => setServiceType(s.id)}
                  style={optionCardStyle(serviceType === s.id)}
                >
                  <Icon name={s.icon} size={24} />
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#1e293b' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Location */}
        {step === 2 && (
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1B3A5C', marginBottom: '0.375rem' }}>
              Where is the problem?
            </h3>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '1.25rem' }}>
              This helps us prepare the right tools and parts.
            </p>
            <div className="gqf-option-grid">
              {LOCATIONS.map((loc) => (
                <div
                  key={loc.id}
                  className="gqf-option-card"
                  onClick={() => setLocation(loc.id)}
                  style={optionCardStyle(location === loc.id)}
                >
                  <Icon name={loc.icon} size={24} />
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#1e293b' }}>{loc.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Urgency */}
        {step === 3 && (
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1B3A5C', marginBottom: '0.375rem' }}>
              How urgent is it?
            </h3>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '1.25rem' }}>
              This helps us prioritize your request.
            </p>
            <div className="gqf-urgency-grid">
              {URGENCY_LEVELS.map((u) => (
                <div
                  key={u.id}
                  className="gqf-option-card"
                  onClick={() => setUrgency(u.id)}
                  style={{
                    ...optionCardStyle(urgency === u.id),
                    flexDirection: 'row',
                    textAlign: 'left',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    minHeight: '56px',
                  }}
                >
                  <span style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: u.color,
                    flexShrink: 0,
                    marginTop: '3px',
                  }} />
                  <div>
                    <span style={{ fontSize: '15px', fontWeight: 700, color: '#1e293b', display: 'block' }}>{u.label}</span>
                    <span style={{ fontSize: '13px', color: '#64748b' }}>{u.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Photos */}
        {step === 4 && (
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1B3A5C', marginBottom: '0.375rem' }}>
              Upload Photos
            </h3>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '1.25rem' }}>
              Photos help us provide a more accurate estimate. Up to {MAX_PHOTOS} photos. Optional.
            </p>

            {photos.length < MAX_PHOTOS && (
              <>
                {/* Desktop: drag-drop zone */}
                <div
                  className="gqf-photo-desktop"
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  style={{
                    border: dragOver ? '2px solid #2E86C1' : '2px dashed #cbd5e1',
                    borderRadius: '10px',
                    padding: '2.5rem 1.5rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    backgroundColor: dragOver ? '#eff8ff' : '#fafbfc',
                    transition: 'all 0.15s ease',
                    marginBottom: photos.length > 0 ? '1rem' : 0,
                    minHeight: '140px',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ marginBottom: '0.75rem', color: '#94a3b8' }}>
                    <Icon name="camera" size={36} />
                  </div>
                  <p style={{ fontSize: '15px', fontWeight: 600, color: '#1e293b', marginBottom: '0.25rem' }}>
                    Drag photos here or click to upload
                  </p>
                  <p style={{ fontSize: '13px', color: '#94a3b8' }}>
                    {photos.length}/{MAX_PHOTOS} photos added
                  </p>
                </div>

                {/* Mobile: two distinct buttons */}
                <div
                  className="gqf-photo-mobile"
                  style={{
                    flexDirection: 'column',
                    gap: '0.75rem',
                    marginBottom: photos.length > 0 ? '1rem' : 0,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => cameraInputRef.current?.click()}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.75rem',
                      width: '100%',
                      padding: '1rem',
                      minHeight: '56px',
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#ffffff',
                      backgroundColor: '#2E86C1',
                      border: 'none',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      transition: 'background-color 0.15s ease',
                    }}
                  >
                    <Icon name="camera" size={22} color="#ffffff" />
                    Take Photo
                  </button>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.75rem',
                      width: '100%',
                      padding: '1rem',
                      minHeight: '56px',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#1B3A5C',
                      backgroundColor: '#ffffff',
                      border: '2px solid #e2e8f0',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      transition: 'border-color 0.15s ease',
                    }}
                  >
                    <Icon name="image" size={22} color="#64748b" />
                    Choose from Library
                  </button>
                  <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center' }}>
                    {photos.length}/{MAX_PHOTOS} photos added
                  </p>
                </div>

                {/* Hidden file inputs */}
                <input
                  ref={cameraInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={(e) => { if (e.target.files) addPhotos(e.target.files); e.target.value = ''; }}
                  style={{ display: 'none' }}
                />
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => { if (e.target.files) addPhotos(e.target.files); e.target.value = ''; }}
                  style={{ display: 'none' }}
                />
              </>
            )}

            {photos.length > 0 && (
              <div className="gqf-photo-grid">
                {photos.map((photo, i) => (
                  <div key={i} style={{ position: 'relative', aspectRatio: '1', borderRadius: '8px', overflow: 'hidden' }}>
                    <img
                      src={photo.url}
                      alt={`Upload ${i + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <button
                      onClick={() => removePhoto(i)}
                      style={{
                        position: 'absolute',
                        top: '4px',
                        right: '4px',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        color: '#ffffff',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        lineHeight: 1,
                      }}
                      aria-label={`Remove photo ${i + 1}`}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Step 5: Description */}
        {step === 5 && (
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1B3A5C', marginBottom: '0.375rem' }}>
              Describe the Problem
            </h3>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '1.25rem' }}>
              The more detail you provide, the better our estimate will be.
            </p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className="gqf-input"
              style={{ ...inputStyle, resize: 'none' }}
              placeholder="Example: The water heater is leaking from the bottom and there is water on the floor."
            />
            <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '0.375rem' }}>
              Minimum 10 characters
            </p>
          </div>
        )}

        {/* Step 6: Contact Info */}
        {step === 6 && (
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1B3A5C', marginBottom: '0.375rem' }}>
              Contact Information
            </h3>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '1.25rem' }}>
              We&apos;ll use this to send you the estimate.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="gqf-input"
                  style={inputStyle}
                  placeholder="John Smith"
                  autoComplete="name"
                />
              </div>
              <div className="gqf-contact-grid">
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="gqf-input"
                    style={inputStyle}
                    placeholder="(604) 555-0100"
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="gqf-input"
                    style={inputStyle}
                    placeholder="john@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="gqf-input"
                  style={inputStyle}
                  placeholder="123 Main Street, Vancouver BC"
                  autoComplete="street-address"
                />
              </div>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div style={{
            backgroundColor: '#fef2f2',
            border: '1px solid #fca5a5',
            color: '#991b1b',
            fontSize: '14px',
            padding: '12px 16px',
            borderRadius: '8px',
            marginTop: '1rem',
          }}>
            {error}
          </div>
        )}

        {/* Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: step === 1 ? 'flex-end' : 'space-between',
          alignItems: 'center',
          marginTop: '1.5rem',
          gap: '0.75rem',
        }}>
          {step > 1 && (
            <button
              onClick={goBack}
              className="gqf-back-btn"
              style={{
                padding: '12px 20px',
                fontSize: '15px',
                fontWeight: 600,
                color: '#64748b',
                backgroundColor: 'transparent',
                border: '2px solid #e2e8f0',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                minHeight: '48px',
              }}
            >
              Back
            </button>
          )}
          <button
            onClick={goNext}
            disabled={submitting}
            className="btn-primary gqf-next-btn"
            style={{
              padding: '12px 28px',
              fontSize: '15px',
              borderRadius: '8px',
              flex: step === 6 ? 1 : undefined,
              opacity: submitting ? 0.7 : 1,
            }}
          >
            {submitting ? 'Submitting...' : step === 4 ? (photos.length > 0 ? 'Next' : 'Skip') : step === 6 ? 'Submit Quote Request' : 'Next'}
          </button>
        </div>

        {/* Mobile phone fallback */}
        <div className="gqf-mobile-phone" style={{
          justifyContent: 'center',
          marginTop: '1.25rem',
          paddingTop: '1rem',
          borderTop: '1px solid #f0f0f0',
        }}>
          <a href="tel:6045550123" style={{
            fontSize: '14px',
            color: '#64748b',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.375rem',
          }}>
            <Icon name="phone" size={14} color="#2E86C1" />
            Prefer to call? <span style={{ fontWeight: 700, color: '#1B3A5C' }}>(604) 555-0123</span>
          </a>
        </div>
      </div>
    </div>
  );
}
