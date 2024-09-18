import { Suspense } from 'react';
import { Metadata } from 'next';
import WasteWaterTable from './WasteWaterTable';

export const metadata: Metadata = {
    title: 'Waste Water Management',
};

export default function WaterPage() {
    return (
        <Suspense fallback={<div>Loading dashboard...</div>}>
            <WasteWaterTable />
        </Suspense>
    );
}
