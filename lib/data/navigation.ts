import { NavLink, FooterColumn } from "@/lib/types";

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export const AUTH_NAV_LINKS: NavLink[] = [
  { label: "Sign In", href: "/login" },
  { label: "Join Us", href: "/register" },
];

export const FOOTER_NAV_COLUMNS: FooterColumn[] = [
  {
    title: "Browse",
    links: [
      { label: "Featured Courses", href: "/courses" },
      { label: "Featured Categories", href: "/categories" },
      { label: "Business", href: "/category/business" },
      { label: "IT", href: "/category/it" },
      { label: "Design", href: "/category/design" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Development", href: "/category/development" },
      { label: "Marketing", href: "/category/marketing" },
      { label: "Photography", href: "/category/photography" },
      { label: "Finance", href: "/category/finance" },
      { label: "Sport", href: "/category/sport" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Become a Creator", href: "/creator" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];
