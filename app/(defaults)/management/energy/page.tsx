import { Suspense } from 'react';
import { Metadata } from 'next';
import EnergyDashBoard from './EnergyDashboard';

export const metadata: Metadata = {
    title: 'Energy Management',
};

export default function EnergyPage() {
    return (
        <Suspense fallback={<div>Loading dashboard...</div>}>
            <EnergyDashBoard />
        </Suspense>
    );
}
