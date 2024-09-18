import { Suspense } from 'react';
import { Metadata } from 'next';
import WasteTable from './WasteTable';

export const metadata: Metadata = {
    title: 'Waste Management',
};

export default function WastePage() {
    return (
        <Suspense fallback={<div>Loading dashboard...</div>}>
            <WasteTable />
        </Suspense>
    );
}
