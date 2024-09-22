import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import GenericTableComponent from '@/components/datatables/GenericTableComponent';
import { fetchWater } from '@/store/water/waterSlice';

export default function WaterTable() {
    const dispatch = useAppDispatch();
    const { data: tabsData, status, error } = useAppSelector((state) => state.water);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchWater());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error loading water data: {error}</div>;
    }

    return <GenericTableComponent tabsData={tabsData} moduleName="Water" />;
}
