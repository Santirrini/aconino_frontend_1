"use client";

import React, { createContext, useContext, useState, useMemo, ReactNode } from "react";
import DonationWidget from "@/components/donations/DonationWidget";

interface DonationContextProps {
  isDonationWidgetOpen: boolean;
  selectedCategory: string;
  openDonationWidget: (categoryId?: string) => void;
  closeDonationWidget: () => void;
  handleProcessDonation: (amount: number, categoryId: string) => void;
}

const DonationContext = createContext<DonationContextProps | undefined>(undefined);

export const useDonation = () => {
  const context = useContext(DonationContext);
  if (!context) {
    throw new Error("useDonation must be used within a DonationProvider");
  }
  return context;
};

export const DonationProvider = ({ children }: { children: ReactNode }) => {
  const [isDonationWidgetOpen, setIsDonationWidgetOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("general");

  const openDonationWidget = (categoryId?: string) => {
    if (categoryId) {
      setSelectedCategory(categoryId);
    }
    setIsDonationWidgetOpen(true);
  };
  
  const closeDonationWidget = () => setIsDonationWidgetOpen(false);

  const handleProcessDonation = (amount: number, categoryId: string) => {
    const reference = `${categoryId}_${Date.now()}`;
    const wompiUrl = `https://checkout.wompi.co/p/?amount=${amount}&reference=${reference}`;
    window.open(wompiUrl, '_blank', 'noopener,noreferrer');
  };

  const value = useMemo(() => ({
    isDonationWidgetOpen, 
    selectedCategory,
    openDonationWidget, 
    closeDonationWidget,
    handleProcessDonation
  }), [isDonationWidgetOpen, selectedCategory, openDonationWidget, closeDonationWidget, handleProcessDonation]);

  return (
    <DonationContext.Provider value={value}>
      {children}
      <DonationWidget isOpen={isDonationWidgetOpen} onClose={closeDonationWidget} />
    </DonationContext.Provider>
  );
};
