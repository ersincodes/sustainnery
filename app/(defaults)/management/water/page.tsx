import { Suspense } from 'react';
import { Metadata } from 'next';
import WaterDashboard from './WaterDashboard';

export const metadata: Metadata = {
    title: 'Water Management',
};

export default function WaterPage() {
    return (
        <Suspense fallback={<div>Loading dashboard...</div>}>
            <WaterDashboard />
        </Suspense>
    );
}
