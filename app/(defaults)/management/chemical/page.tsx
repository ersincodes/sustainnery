import { Suspense } from 'react';
import { Metadata } from 'next';
import ChemicalTable from './ChemicalTable';

export const metadata: Metadata = {
    title: 'Chemical Management',
};

export default function EnergyPage() {
    return (
        <Suspense fallback={<div>Loading dashboard...</div>}>
            <ChemicalTable />
        </Suspense>
    );
}
