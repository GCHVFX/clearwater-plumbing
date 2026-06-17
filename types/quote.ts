export interface QuoteRequest {
  serviceType: string;
  location: string;
  urgency: string;
  description: string;
  photos: File[];
  customerName: string;
  phone: string;
  email: string;
  address: string;
}

export const SERVICE_TYPES = [
  { id: 'leak', label: 'Leak', icon: '💧' },
  { id: 'drain', label: 'Drain', icon: '🚿' },
  { id: 'water-heater', label: 'Water Heater', icon: '🔥' },
  { id: 'toilet', label: 'Toilet', icon: '🚽' },
  { id: 'faucet', label: 'Faucet', icon: '🔧' },
  { id: 'renovation', label: 'Renovation', icon: '🏠' },
  { id: 'emergency', label: 'Emergency', icon: '🚨' },
  { id: 'other', label: 'Other', icon: '📋' },
] as const;

export const LOCATIONS = [
  { id: 'kitchen', label: 'Kitchen', icon: '🍳' },
  { id: 'bathroom', label: 'Bathroom', icon: '🛁' },
  { id: 'basement', label: 'Basement', icon: '🏗️' },
  { id: 'laundry', label: 'Laundry Room', icon: '👕' },
  { id: 'outside', label: 'Outside', icon: '🌿' },
  { id: 'utility', label: 'Utility Room', icon: '⚡' },
  { id: 'other', label: 'Other', icon: '📍' },
] as const;

export const URGENCY_LEVELS = [
  { id: 'emergency', label: 'Emergency', desc: 'Active flooding, no water, or gas leak', icon: '🔴' },
  { id: 'today', label: 'Today', desc: 'Needs attention as soon as possible', icon: '🟠' },
  { id: 'this-week', label: 'This Week', desc: 'Can wait a day or two', icon: '🟡' },
  { id: 'planning', label: 'Planning Ahead', desc: 'No rush, just getting quotes', icon: '🟢' },
] as const;
