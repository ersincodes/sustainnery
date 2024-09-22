import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import GenericTableComponent from '@/components/datatables/GenericTableComponent';
import { fetchChemical } from '@/store/chemical/chemicalSlice';

export default function ChemicalTable() {
    const dispatch = useAppDispatch();
    const chemicalData = useAppSelector((state) => state.chemical.data);
    const status = useAppSelector((state) => state.energy.status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchChemical());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error loading chemical data</div>;
    }

    return <GenericTableComponent tabsData={chemicalData} moduleName="Chemical" />;
}
