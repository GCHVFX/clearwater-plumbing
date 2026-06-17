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
  { id: 'leak', label: 'Leak', icon: 'droplet' },
  { id: 'drain', label: 'Drain', icon: 'drain' },
  { id: 'water-heater', label: 'Water Heater', icon: 'flame' },
  { id: 'toilet', label: 'Toilet', icon: 'toilet' },
  { id: 'faucet', label: 'Faucet', icon: 'wrench' },
  { id: 'renovation', label: 'Renovation', icon: 'house' },
  { id: 'emergency', label: 'Emergency', icon: 'alert-triangle' },
  { id: 'other', label: 'Other', icon: 'clipboard' },
] as const;

export const LOCATIONS = [
  { id: 'kitchen', label: 'Kitchen', icon: 'kitchen' },
  { id: 'bathroom', label: 'Bathroom', icon: 'bath' },
  { id: 'basement', label: 'Basement', icon: 'stairs' },
  { id: 'laundry', label: 'Laundry Room', icon: 'shirt' },
  { id: 'outside', label: 'Outside', icon: 'tree' },
  { id: 'utility', label: 'Utility Room', icon: 'bolt' },
  { id: 'other', label: 'Other', icon: 'map-pin' },
] as const;

export const URGENCY_LEVELS = [
  { id: 'emergency', label: 'Emergency', desc: 'Active flooding, no water, or gas leak', color: '#ef4444' },
  { id: 'today', label: 'Today', desc: 'Needs attention as soon as possible', color: '#f97316' },
  { id: 'this-week', label: 'This Week', desc: 'Can wait a day or two', color: '#eab308' },
  { id: 'planning', label: 'Planning Ahead', desc: 'No rush, just getting quotes', color: '#22c55e' },
] as const;
