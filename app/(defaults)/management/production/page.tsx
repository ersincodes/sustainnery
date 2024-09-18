import { Suspense } from 'react';
import { Metadata } from 'next';
import ProductionTable from './ProductionTable';

export const metadata: Metadata = {
    title: 'Production Management',
};

export default function ProductionPage() {
    return (
        <Suspense fallback={<div>Loading dashboard...</div>}>
            <ProductionTable />
        </Suspense>
    );
}
