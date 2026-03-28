import { NavItem, SanityNavItem } from "../types/header";
import { DEFAULT_NAV_LINKS } from "../constants/navigation";

export const mapSanityNavData = (navData?: SanityNavItem[]): NavItem[] => {
  if (!navData || navData.length === 0) {
    return DEFAULT_NAV_LINKS;
  }

  return navData
    .map((item: SanityNavItem) => ({
      name: (item.label || item.name || item.title || "").trim(),
      href: item.href || "#",
      hasDropdown: !!item.hasDropdown,
      subLinks: item.subLinks?.map((sub) => ({
        name: (sub.label || sub.name || sub.title || "Link").trim(),
        href: sub.href || "#"
      })).filter(sub => !/^-+$/.test(sub.name))
    }))
    .filter((link: NavItem) => link.name !== "");
};
