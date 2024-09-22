import React, { useEffect } from 'react';
import { fetchEnergy } from '@/store/energy/energySlice';
import GenericTableComponent from '@/components/datatables/GenericTableComponent';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';

export default function EnergyTable() {
    const dispatch = useAppDispatch();
    const productionData = useAppSelector((state) => state.production.data);
    const status = useAppSelector((state) => state.energy.status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchEnergy());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error loading energy data</div>;
    }

    return <GenericTableComponent tabsData={productionData} moduleName="Energy" />;
}
