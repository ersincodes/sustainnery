import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import GenericTableComponent from '@/components/datatables/GenericTableComponent';
import { fetchRSL } from '@/store/rsl/rslSlice';

export default function RSLTable() {
    const dispatch = useAppDispatch();
    const { data: tabsData, status, error } = useAppSelector((state) => state.rsl);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchRSL());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error loading RSL data: {error}</div>;
    }

    return <GenericTableComponent tabsData={tabsData} moduleName="RSL" />;
}
