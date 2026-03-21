"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useComingSoon } from "@/providers/ComingSoonProvider";
import ComingSoonOverlay from "@/components/apoyanos/ComingSoonOverlay";

export default function ComingSoonOverlayWrapper() {
  const { showComingSoon, targetYear, message } = useComingSoon();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use createPortal to render the overlay directly into document.body,
  // escaping any intermediate stacking contexts from parent components.
  if (!mounted) return null;

  return createPortal(
    <ComingSoonOverlay 
      show={showComingSoon} 
      targetYear={targetYear}
      message={message}
    />,
    document.body
  );
}