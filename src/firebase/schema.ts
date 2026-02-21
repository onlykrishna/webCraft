export interface LeadSchema {
  name: string;
  email: string;
  message: string;
  source: 'contact' | 'lead-form';
  createdAt: string;
}

export interface ProjectSchema {
  title: string;
  slug: string;
  summary: string;
  technologies: string[];
  coverImageUrl: string;
  createdAt: string;
}

export interface BlogSchema {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  published: boolean;
  createdAt: string;
}

export interface TestimonialSchema {
  clientName: string;
  company: string;
  quote: string;
  rating: number;
  createdAt: string;
}

export interface PackageSchema {
  name: string;
  priceFrom: number;
  deliverables: string[];
  active: boolean;
}

export interface AuditSchema {
  name: string;
  email: string;
  siteUrl: string;
  goals: string;
  createdAt: string;
}
