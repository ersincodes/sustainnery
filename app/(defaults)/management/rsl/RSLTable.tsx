'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { fetchRSLTests, fetchProductLines, fetchCustomers, fetchCustomerContacts, fetchCr6Tests } from '@/store/rsl/rslSlice';
import GenericTableComponent from '@/components/datatables/GenericTableComponent';
import Loading from '@/components/layouts/loading';

export default function RSLTable() {
    const dispatch = useAppDispatch();
    const { rslTests, productLines, customers, customerContacts, cr6Tests, status, error } = useAppSelector((state) => state.rsl);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchRSLTests());
            dispatch(fetchProductLines());
            dispatch(fetchCustomers());
            dispatch(fetchCustomerContacts());
            dispatch(fetchCr6Tests());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <Loading />;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    const tabsData = [rslTests, productLines, customers, customerContacts, cr6Tests];

    return <GenericTableComponent moduleName="RSL" data={tabsData} />;
}
