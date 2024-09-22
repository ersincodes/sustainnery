'use client';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import GenericTableComponent from '@/components/datatables/GenericTableComponent';
import { fetchWasteWater } from '@/store/waste-water/wasteWaterSlice';

export default function WasteWaterTable() {
    const dispatch = useAppDispatch();
    const { data: tabsData, status, error } = useAppSelector((state) => state.wasteWater);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchWasteWater());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error loading waste water data: {error}</div>;
    }

    return <GenericTableComponent tabsData={tabsData} moduleName="Waste Water" />;
}
