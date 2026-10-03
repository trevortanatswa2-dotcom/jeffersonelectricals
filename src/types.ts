export type ServiceCategory = 'all' | 'residential' | 'commercial' | 'maintenance';

export interface ElectricalService {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'maintenance' | 'industrial';
  description: string;
  features: string[];
  typicalDuration: string;
  badge?: string;
  warranty: string;
}

export interface ProjectWork {
  id: string;
  title: string;
  category: 'wiring' | 'distribution' | 'lighting' | 'commercial' | 'maintenance' | 'repairs';
  categoryLabel: string;
  location: string;
  clientType: 'Commercial' | 'Industrial' | 'Residential';
  image: string;
  description: string;
  metrics: string;
  completionTime: string;
}

export interface QuoteFormState {
  propertyType: 'residential' | 'commercial' | 'industrial';
  serviceType: string;
  sizeSqFt: number;
  urgency: 'standard' | 'priority' | 'emergency';
  includeInspection: boolean;
}

export interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  serviceRequired: string;
  description: string;
  preferredDate: string;
  preferredTime: string;
  address?: string;
}
