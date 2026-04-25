export interface Banner {
  id: string;
  branch_id: string | null;
  type: "link" | "normal";
  target: "web" | "app";
  url: string | null;
  image_url: string;
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialism: string;
  image_url: string;
  experience_years: number;
  facebook_url: string | null;
  linkedin_url: string | null;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon_url: string;
  image_url: string;
  is_featured: boolean;
  content?: string;
  faqs?: FAQ[];
}

export interface FAQ {
  id: string;
  sort_order: number;
  question: string;
  answer_html: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  image_url: string;
  is_featured: boolean;
  content?: string;
  created_at?: string;
  faqs?: FAQ[];
}

export interface Settings {
  main_logo: string;
  footer_logo: string;
  phone_code: string;
  phone: string;
  intro_video_embed_link: string;
  years_of_experience: string;
  google_map_embed_link: string;
  telephone: string;
  email: string;
  whatsaap_url: string;
  facebook_url: string;
  intgram_url: string;
  tiktok_url: string;
  youtube_url: string;
  vision: string;
  mission: string;
  our_valus: string;
  address: string;
  overview: string;
}

export interface ApiResponse<T> {
  message: string;
  data: T;
  links?: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta?: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}

