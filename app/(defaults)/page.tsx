import ComponentsDashboardAnalytics from '@/components/dashboard/DasboardAnalyticsComponent';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Analytics Admin',
};

const Analytics = () => {
    return <ComponentsDashboardAnalytics />;
};

export default Analytics;
