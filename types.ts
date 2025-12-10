export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  isPopular?: boolean;
  tag?: string; // e.g., "Must Try", "Spicy"
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
  note?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number; // 1-5
  date: string;
  content: string;
  source: string; // e.g., "Local Guide"
  ownerResponse?: string;
}

export interface OperatingHours {
  day: string;
  hours: string;
}
