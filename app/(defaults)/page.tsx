import ComponentsDashboardAnalytics from '@/components/dashboard/dashboard-analytics';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Analytics Admin',
};

const Analytics = () => {
    return <ComponentsDashboardAnalytics />;
};

export default Analytics;
