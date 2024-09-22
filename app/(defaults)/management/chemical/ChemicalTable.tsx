'use client';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import GenericTableComponent from '@/components/datatables/GenericTableComponent';
import { fetchChemical } from '@/store/chemical/chemicalSlice';

export default function ChemicalTable() {
    const dispatch = useAppDispatch();
    const { data: tabsData, status, error } = useAppSelector((state) => state.chemical);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchChemical());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error loading Chemical data: {error}</div>;
    }

    return <GenericTableComponent tabsData={tabsData} moduleName="Chemical" />;
}
