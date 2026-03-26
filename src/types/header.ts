export interface NavItem {
  name?: string;
  href?: string;
  hasDropdown?: boolean;
  subLinks?: { name?: string; href?: string }[];
}

export interface SanityNavItem {
  label?: string;
  name?: string;
  title?: string;
  href?: string;
  hasDropdown?: boolean;
  subLinks?: Array<{ label?: string; name?: string; title?: string; href?: string }>;
}

export interface HeaderSettings {
  phoneNumber?: string;
  mobilePhone?: string;
  email?: string;
  address?: string;
  headerCTA?: string;
}

export interface HeaderProps {
  navData?: SanityNavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  settings?: HeaderSettings;
}
