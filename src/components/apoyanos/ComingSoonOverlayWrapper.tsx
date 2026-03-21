"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { useComingSoon } from "@/providers/ComingSoonProvider";
import ComingSoonOverlay from "@/components/apoyanos/ComingSoonOverlay";

export default function ComingSoonOverlayWrapper() {
  const pathname = usePathname();
  const { showComingSoon, targetYear, message } = useComingSoon();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use createPortal to render the overlay directly into document.body,
  // escaping any intermediate stacking contexts from parent components.
  // Restricted to specific routes as per user request.
  if (!mounted || pathname !== "/apoyanos") return null;

  return createPortal(
    <ComingSoonOverlay 
      show={showComingSoon} 
      targetYear={targetYear}
      message={message}
    />,
    document.body
  );
}