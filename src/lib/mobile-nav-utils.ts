import { NavItem } from "../types/header";

export const isActive = (href: string | undefined, pathname: string, currentHash: string) => {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  try {
    const urlObj = new URL(href, "http://localhost"); 
    const matchesPath = pathname === urlObj.pathname;
    if (urlObj.hash) {
      return matchesPath && currentHash === urlObj.hash;
    }
    if (matchesPath && currentHash !== "") return false; 
    return matchesPath;
  } catch {
    return false;
  }
};

export const isParentActive = (link: NavItem, pathname: string, currentHash: string) => {
  if (isActive(link.href, pathname, currentHash)) return true;
  if (link.subLinks) {
    return link.subLinks.some(sub => isActive(sub.href, pathname, currentHash));
  }
  return false;
};
