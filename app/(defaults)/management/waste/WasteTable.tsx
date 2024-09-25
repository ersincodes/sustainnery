'use client';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import GenericTableComponent from '@/components/datatables/GenericTableComponent';
import { fetchWaste } from '@/store/waste/wasteSlice';

export default function WasteTable() {
    const dispatch = useAppDispatch();
    const { data: tabsData, status, error } = useAppSelector((state) => state.waste);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchWaste());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error loading waste data: {error}</div>;
    }

    return <GenericTableComponent data={tabsData} moduleName="Waste" />;
}
