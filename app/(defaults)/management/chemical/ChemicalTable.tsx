'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { fetchChemicalSupplierContacts, fetchChemicalInventories, fetchChemicalChanges, fetchVocFollowings, fetchChromiumConsumptions } from '@/store/chemical/chemicalSlice';
import GenericTableComponent from '@/components/datatables/GenericTableComponent';
import Loading from '@/components/layouts/loading';

export default function ChemicalTable() {
    const dispatch = useAppDispatch();
    const { chemicalSupplierContacts, chemicalInventories, chemicalChanges, vocFollowings, chromiumConsumptions, status, error } = useAppSelector((state) => state.chemical);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchChemicalSupplierContacts());
            dispatch(fetchChemicalInventories());
            dispatch(fetchChemicalChanges());
            dispatch(fetchVocFollowings());
            dispatch(fetchChromiumConsumptions());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <Loading />;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    const tabsData = [chemicalSupplierContacts, chemicalInventories, chemicalChanges, vocFollowings, chromiumConsumptions];

    return <GenericTableComponent moduleName="Chemical" data={tabsData} />;
}
