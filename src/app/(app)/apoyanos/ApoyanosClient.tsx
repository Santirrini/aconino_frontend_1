"use client";

import { useState, useEffect } from 'react';
import CentroDiaHero from '@/components/apoyanos/CentroDiaHero';
import ConstructionProgress from '@/components/apoyanos/ConstructionProgress';
import BlueprintMap from '@/components/apoyanos/BlueprintMap';
import ZoneDetailModal from '@/components/apoyanos/ZoneDetailModal';
import DonationCatalog from '@/components/apoyanos/DonationCatalog';
import DonationImpact from '@/components/apoyanos/DonationImpact';
import FAQ from '@/components/apoyanos/FAQ';
import FinalCTA from '@/components/apoyanos/FinalCTA';
import TrustBadges from '@/components/apoyanos/TrustBadges';
import { useComingSoon } from '@/providers/ComingSoonProvider';
import { initialProgress } from '@/data/centro-dia-needs';
import { CenterZone } from '@/types/centro-dia';

export default function ApoyanosClient() {
    const [selectedZone, setSelectedZone] = useState<CenterZone | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { setShowComingSoon } = useComingSoon();

    useEffect(() => {
        setShowComingSoon(true);
        return () => setShowComingSoon(false);
    }, [setShowComingSoon]);

    const handleZoneClick = (zone: CenterZone) => {
        setSelectedZone(zone);
        setIsModalOpen(true);
    };

    return (
        <main className="min-h-screen bg-white">
            <CentroDiaHero />
            <ConstructionProgress goal={initialProgress.goal} raised={initialProgress.raised} donors={initialProgress.donors} />
            <TrustBadges />
            <BlueprintMap zones={initialProgress.zones} onZoneClick={handleZoneClick} />
            <DonationCatalog />
            <DonationImpact />
            <FAQ />
            <FinalCTA />
            <ZoneDetailModal zone={selectedZone} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    );
}
