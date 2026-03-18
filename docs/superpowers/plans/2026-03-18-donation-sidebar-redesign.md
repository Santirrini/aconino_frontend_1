# Donation Sidebar Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the current `DonationWidget` into a professional, modular, and scalable sidebar (`DonationSidebar`) that maximizes conversion through storytelling and impact visualization.

**Architecture:** A sidebar component built with `Framer Motion` for animations, structured into independent sub-components for header (tabs), impact narrative, donation grid, and custom amount input. Data and logic will be centralized in a configuration file.

**Tech Stack:** React (TypeScript), Tailwind CSS, Framer Motion, React Icons.

---

### Task 1: Centralized Data & Constants

**Files:**
- Create: `src/data/donation-options.ts`

- [ ] **Step 1: Define the data schema and export options**

```typescript
import { FaHardHat, FaHandHoldingHeart, FaStethoscope, FaTruck, FaUtensils } from "react-icons/fa";
import { IconType } from "react-icons";

export const MIN_DONATION_AMOUNT = 5000;

export interface DonationItem {
  value: number;
  label: string;
  impact: string;
  icon: IconType;
}

export interface DonationCategory {
  id: string;
  title: string;
  description: string;
  color: string; // Tailwind gradient classes
  items: DonationItem[];
}

export const DONATION_OPTIONS: DonationCategory[] = [
  {
    id: 'construction',
    title: 'Construye el Centro',
    description: 'Ayúdanos a terminar el nuevo Centro Día para adultos con discapacidad.',
    color: 'from-primary to-secondary',
    items: [
      { value: 85000, label: '$85.000', impact: '1 m² de piso para el salón de terapias', icon: FaHardHat },
      { value: 150000, label: '$150.000', impact: '2 bultos de cemento y mano de obra', icon: FaHardHat },
      { value: 500000, label: '$500.000', impact: 'Kit de materiales básicos de construcción', icon: FaHardHat },
    ]
  },
  {
    id: 'padrino',
    title: 'Plan Padrino',
    description: 'Apoya directamente el tratamiento y bienestar de nuestros niños.',
    color: 'from-secondary to-accent',
    items: [
      { value: 20000, label: '$20.000', impact: '1 sesión de transporte para un niño', icon: FaTruck },
      { value: 50000, label: '$50.000', impact: 'Kit nutricional para una semana', icon: FaUtensils },
      { value: 100000, label: '$100.000', impact: '1 sesión integral de fisioterapia', icon: FaStethoscope },
    ]
  }
];

export const calculateImpact = (amount: number, categoryId: string): string => {
  if (categoryId === 'construction') {
    const floors = (amount / 85000).toFixed(1);
    return `${floors} m² de piso para el Centro Día`;
  }
  const sessions = (amount / 20000).toFixed(1);
  return `${sessions} sesiones de transporte o apoyo`;
};
```

- [ ] **Step 2: Commit changes**
```bash
git add src/data/donation-options.ts
git commit -m "feat: add centralized donation options and impact logic"
```

### Task 2: Refactor DonationProvider State

**Files:**
- Modify: `src/providers/DonationProvider.tsx`

- [ ] **Step 1: Add category selection and redirection logic**
Update `openDonationWidget` to accept `categoryId`. Implement a `handleProcessDonation(amount: number)` function that constructs the redirection URL (placeholder for now).

- [ ] **Step 2: Commit changes**
```bash
git add src/providers/DonationProvider.tsx
git commit -m "refactor: update DonationProvider with category and redirection logic"
```

### Task 3: Implement DonationSidebar Sub-components

**Files:**
- Create: `src/components/donations/SidebarHeader.tsx`
- Create: `src/components/donations/ImpactStory.tsx`
- Create: `src/components/donations/DonationGrid.tsx`
- Create: `src/components/donations/CustomAmountInput.tsx`
- Create: `src/components/donations/SidebarFooter.tsx`

- [ ] **Step 1: Create `SidebarHeader.tsx`**
Implement the Tabs for category selection and the close button ("X").

- [ ] **Step 2: Create `ImpactStory.tsx`**
Implement the visual narrative area with a mini progress bar.

- [ ] **Step 3: Create `DonationGrid.tsx`**
Implement the amount selection cards mapping over the category items.

- [ ] **Step 4: Create `CustomAmountInput.tsx`**
Implement the input field with real-time impact calculation using `calculateImpact`.

- [ ] **Step 5: Create `SidebarFooter.tsx`**
Implement the action button and trust badges. Disable button if `amount < MIN_DONATION_AMOUNT`.

- [ ] **Step 6: Commit changes**
```bash
git add src/components/donations/*.tsx
git commit -m "feat: implement modular sidebar sub-components with impact logic"
```

### Task 4: Main DonationSidebar Integration

**Files:**
- Create: `src/components/donations/DonationSidebar.tsx`

- [ ] **Step 1: Assemble sub-components into the main sidebar**
Use `AnimatePresence` and `motion.div` for the slide-in/out effect. Include a semi-transparent backdrop with `onClick` to close.

- [ ] **Step 2: Commit changes**
```bash
git add src/components/donations/DonationSidebar.tsx
git commit -m "feat: assemble final DonationSidebar component with backdrop"
```

### Task 5: Final Provider Integration

**Files:**
- Modify: `src/providers/DonationProvider.tsx`

- [ ] **Step 1: Mount `DonationSidebar` within the provider**
Ensure `DonationSidebar` is rendered inside the `DonationProvider` to have access to the context. Replace `DonationWidget`.

- [ ] **Step 2: Manual verification**
Open the sidebar from various pages and check the responsiveness, animations, and impact calculator.

- [ ] **Step 3: Commit changes**
```bash
git add src/providers/DonationProvider.tsx
git commit -m "feat: integrate DonationSidebar into DonationProvider"
```
