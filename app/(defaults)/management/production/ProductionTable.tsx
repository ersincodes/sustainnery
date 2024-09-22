'use client';
import React, { useEffect } from 'react';
import GenericTableComponent from '@/components/datatables/GenericTableComponent';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { fetchProduction } from '@/store/production/productionSlice';

export default function ProductionTable() {
    const dispatch = useAppDispatch();
    const { data: tabsData, status, error } = useAppSelector((state) => state.production);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProduction());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error loading Production data: {error}</div>;
    }

    return <GenericTableComponent tabsData={tabsData} moduleName="Production" />;
}
