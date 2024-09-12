import { Suspense } from 'react';
import ProductionDashboard from './ProductionDashboard';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Production Management',
};

export default function ProductionPage() {
    return (
        <Suspense fallback={<div>Loading dashboard...</div>}>
            <ProductionDashboard />
        </Suspense>
    );
}
