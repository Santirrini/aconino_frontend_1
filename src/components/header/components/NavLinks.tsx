import { useActiveLink } from "@/hooks/useActiveLink";
import { NavLink } from "@/types/navigation";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Dropdown from "./Dropdown";
import { staggerItem } from "@/animations/variants/staggerChildren";

interface NavLinksProps {
  navLinks: NavLink[];
}

export default function NavLinks({ navLinks }: NavLinksProps) {
  const { isParentActive } = useActiveLink();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const navItems = useMemo(() => {
    return navLinks.map((link, idx) => {
      const parentActive = isParentActive(link);
      const isHovered = hoveredIdx === idx;
      return { link, idx, parentActive, isHovered };
    });
  }, [navLinks, hoveredIdx, isParentActive]);

  return (

    <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] xl:text-[14px] font-bold">
      {navItems.map(({ link, idx, parentActive, isHovered }) => (
          <motion.div
            key={link.name}
            className="relative"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            variants={staggerItem}
          >
            {/* Glow backdrop on hover */}
            <motion.div
              className="absolute inset-0 bg-accent/10 blur-lg rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1.2 : 0.8 }}
              transition={{ duration: 0.3 }}
            />

            <Link
              href={link.href || "#"}
              onClick={(e) => {
                if (link.hasDropdown) {
                  if (link.href === "#" || link.href === "" || !link.href) {
                    e.preventDefault();
                  }
                  setHoveredIdx(hoveredIdx === idx ? null : idx);
                }
              }}
              className={`relative flex items-center gap-1 py-4 px-2 transition-all duration-300 z-10 ${
                parentActive ? 'text-accent' : 'text-primary hover:text-accent'
              }`}
            >
              <motion.span
                className="relative"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
              </motion.span>

              {link.hasDropdown && (
                <motion.div
                  animate={{ rotate: isHovered ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className={`text-[10px] ${parentActive ? 'text-accent' : 'text-gray-400'}`} />
                </motion.div>
              )}

              {/* Animated underline */}
              <motion.span
                className="absolute bottom-0 left-0 h-[3px] rounded-t-full"
                style={{ backgroundColor: '#f8b719' }}
                initial={{ width: 0, boxShadow: '0 0 0px rgba(248,183,25,0)' }}
                animate={{
                  width: parentActive || isHovered ? '100%' : '0%',
                  boxShadow: parentActive || isHovered
                    ? '0 -4px 12px rgba(248,183,25,0.4)'
                    : '0 0 0px rgba(248,183,25,0)',
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </Link>

            {link.hasDropdown && link.subLinks && (
              <Dropdown subLinks={link.subLinks} isOpen={isHovered} />
            )}
          </motion.div>
        ))}
    </nav>
  );
}
