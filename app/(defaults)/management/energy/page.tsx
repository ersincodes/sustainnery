import { Suspense } from 'react';
import { Metadata } from 'next';
import EnergyTable from './EnergyTable';

export const metadata: Metadata = {
    title: 'Energy Management',
};

export default function EnergyPage() {
    return (
        <Suspense fallback={<div>Loading dashboard...</div>}>
            <EnergyTable />
        </Suspense>
    );
}
