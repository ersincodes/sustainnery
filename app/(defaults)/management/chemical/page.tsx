import { Suspense } from 'react';
import { Metadata } from 'next';
import ChemicalTable from './ChemicalTable';

export const metadata: Metadata = {
    title: 'Chemical Management',
};

export default function ChemicalPage() {
    return (
        <Suspense fallback={<div>Loading dashboard...</div>}>
            <h1 className="mb-6 text-2xl font-bold">Chemical Management</h1>
            <ChemicalTable />
        </Suspense>
    );
}
