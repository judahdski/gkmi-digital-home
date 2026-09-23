export type Language = 'id' | 'en';

export type PageRoute = 
  | 'home'
  | 'about'
  | 'visit'
  | 'pastor'
  | 'resources'
  | 'article'
  | 'events'
  | 'pastoral-care'
  | 'prayer'
  | 'counseling';

export type ArticleCategory = 
  | 'all'
  | 'devotional'
  | 'reflection'
  | 'prayer'
  | 'faith-life'
  | 'sermon'
  | 'exploring-faith';

export interface Article {
  id: string;
  slug: string;
  title: {
    id: string;
    en: string;
  };
  category: ArticleCategory;
  isExploringFaith?: boolean;
  excerpt: {
    id: string;
    en: string;
  };
  scriptureRef?: string;
  scriptureText?: {
    id: string;
    en: string;
  };
  reflection: {
    id: string;
    en: string;
  };
  application?: {
    id: string;
    en: string;
  };
  todayPrayer?: {
    id: string;
    en: string;
  };
  date: string;
  readTime: string;
  author: string;
  image: string;
  tags: string[];
}

export interface ChurchEvent {
  id: string;
  title: {
    id: string;
    en: string;
  };
  date: string;
  timePlaceholder: string;
  locationPlaceholder: string;
  description: {
    id: string;
    en: string;
  };
  category: 'worship' | 'prayer' | 'study' | 'community' | 'youth';
  isRecurring?: boolean;
}

export interface Ministry {
  id: string;
  name: {
    id: string;
    en: string;
  };
  audience: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  schedulePlaceholder: string;
}

export interface FAQItem {
  id: string;
  question: {
    id: string;
    en: string;
  };
  answer: {
    id: string;
    en: string;
  };
}

export interface PrayerSubmission {
  id: string;
  name?: string;
  contact?: string;
  request: string;
  allowContact: boolean;
  preferredMethod?: 'whatsapp' | 'phone' | 'email';
  createdAt: string;
}

export interface CounselingSubmission {
  id: string;
  name: string;
  contact: string;
  topic: string;
  preferredMethod: 'in-person' | 'whatsapp' | 'phone' | 'online';
  preferredTime: string;
  message?: string;
  createdAt: string;
}
