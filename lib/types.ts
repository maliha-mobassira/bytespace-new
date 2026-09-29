/**
 * Shared TypeScript type definitions for ByteSpace application.
 */

export interface Course {
  id: string;
  title: string;
  author: string;
  rating: number;
  level: string;
  price: string;
  period: string;
  image: string;
  lessons: string;
  duration: string;
  comments: string;
  studentCount: string;
}

export interface Category {
  id: string;
  name: string;
  isSpecial?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  cardHeightClass?: string;
  offsetClass?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface LearningPath {
  id: string;
  title: string;
  category: string;
  coursesCount: string;
  duration: string;
  level: string;
  iconName: string;
  isPopular?: boolean;
}
