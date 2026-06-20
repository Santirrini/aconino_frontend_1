import { NavItem, SanityNavItem } from "../types/header";
import { DEFAULT_NAV_LINKS } from "../constants/navigation";

// Enlaces que NO se muestran en el nav (vengan de Sanity o del default)
const HIDDEN_HREFS = ["/app", "/blog"];

export const mapSanityNavData = (navData?: SanityNavItem[]): NavItem[] => {
  const links: NavItem[] = (!navData || navData.length === 0)
    ? DEFAULT_NAV_LINKS
    : navData
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

  return links.filter((link) => !HIDDEN_HREFS.includes(link.href));
};
