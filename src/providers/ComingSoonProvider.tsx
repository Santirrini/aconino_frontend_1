"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ComingSoonContextType {
  showComingSoon: boolean;
  setShowComingSoon: (show: boolean) => void;
  targetYear: number;
  setTargetYear: (year: number) => void;
  message: string;
  setMessage: (message: string) => void;
}

const ComingSoonContext = createContext<ComingSoonContextType | undefined>(undefined);

export function ComingSoonProvider({ children }: { children: ReactNode }) {
  const [showComingSoon, setShowComingSoon] = useState(true);
  const [targetYear, setTargetYear] = useState(2027);
  const [message, setMessage] = useState("Centro Día para Adultos");

  return (
    <ComingSoonContext.Provider 
      value={{ 
        showComingSoon, 
        setShowComingSoon, 
        targetYear, 
        setTargetYear,
        message,
        setMessage
      }}
    >
      {children}
    </ComingSoonContext.Provider>
  );
}

export function useComingSoon() {
  const context = useContext(ComingSoonContext);
  if (context === undefined) {
    throw new Error("useComingSoon must be used within a ComingSoonProvider");
  }
  return context;
}