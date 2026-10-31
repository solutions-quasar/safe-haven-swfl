export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  checklist?: string[];
  icon: string;
  image: string;
  badge?: string;
  popular?: boolean;
}

export interface LocationItem {
  id: string;
  name: string;
  county: 'Sarasota County' | 'Charlotte County';
  description: string;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Home Watch' | 'Storm' | 'Services' | 'General';
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  propertyAddress: string;
  serviceNeeded: string;
  propertyType: string;
  frequency: string;
  message: string;
  _gotcha: string; // Honeypot field for anti-spam security
}
