"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import DonationWidget from "../components/donations/DonationWidget";
import FloatingDonateCTA from "../components/FloatingDonateCTA";

interface DonationContextProps {
  isDonationWidgetOpen: boolean;
  openDonationWidget: () => void;
  closeDonationWidget: () => void;
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

  const openDonationWidget = () => setIsDonationWidgetOpen(true);
  const closeDonationWidget = () => setIsDonationWidgetOpen(false);

  return (
    <DonationContext.Provider value={{ isDonationWidgetOpen, openDonationWidget, closeDonationWidget }}>
      {children}
      <DonationWidget isOpen={isDonationWidgetOpen} onClose={closeDonationWidget} />
      <FloatingDonateCTA onOpen={openDonationWidget} />
    </DonationContext.Provider>
  );
};
