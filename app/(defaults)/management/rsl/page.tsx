import { Suspense } from 'react';
import { Metadata } from 'next';
import RSLTable from './RSLTable';

export const metadata: Metadata = {
    title: 'RSL Management',
};

export default function EnergyPage() {
    return (
        <Suspense fallback={<div>Loading dashboard...</div>}>
            <h1 className="mb-6 text-2xl font-bold">RSL Management</h1>
            <RSLTable />
        </Suspense>
    );
}
