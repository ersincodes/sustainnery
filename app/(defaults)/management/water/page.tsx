import { Suspense } from 'react';
import { Metadata } from 'next';
import WasteWaterTable from './WaterTable';

export const metadata: Metadata = {
    title: 'Water Management',
};

export default function WaterPage() {
    return (
        <Suspense fallback={<div>Loading dashboard...</div>}>
            <WasteWaterTable />
        </Suspense>
    );
}
