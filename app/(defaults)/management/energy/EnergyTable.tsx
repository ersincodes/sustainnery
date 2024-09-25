'use client';
import React, { useEffect } from 'react';
import { fetchEnergy } from '@/store/energy/energySlice';
import GenericTableComponent from '@/components/datatables/GenericTableComponent';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';

export default function EnergyTable() {
    const dispatch = useAppDispatch();
    const { data: tabsData, status, error } = useAppSelector((state) => state.energy);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchEnergy());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error loading Energy data: {error}</div>;
    }

    return <GenericTableComponent data={tabsData} moduleName="Energy" />;
}
