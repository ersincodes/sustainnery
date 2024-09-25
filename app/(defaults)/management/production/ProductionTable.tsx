'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import {
    fetchRawLeatherSuppliers,
    fetchIntermediateGoodsSuppliers,
    fetchTannings,
    fetchRetannageDyeings,
    fetchProductions,
    fetchChromiumConsumptions,
    fetchCr2o3OilTests,
} from '@/store/production/productionSlice';
import GenericTableComponent from '@/components/datatables/GenericTableComponent';
import Loading from '@/components/layouts/loading';

export default function ProductionTable() {
    const dispatch = useAppDispatch();
    const { rawLeatherSuppliers, intermediateGoodsSuppliers, tannings, retannageDyeings, productions, chromiumConsumptions, cr2o3OilTests, status, error } = useAppSelector(
        (state) => state.production
    );

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchRawLeatherSuppliers());
            dispatch(fetchIntermediateGoodsSuppliers());
            dispatch(fetchTannings());
            dispatch(fetchRetannageDyeings());
            dispatch(fetchProductions());
            dispatch(fetchChromiumConsumptions());
            dispatch(fetchCr2o3OilTests());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <Loading />;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    const tabsData = [rawLeatherSuppliers, intermediateGoodsSuppliers, tannings, retannageDyeings, productions, chromiumConsumptions, cr2o3OilTests];

    return <GenericTableComponent moduleName="Production" data={tabsData} />;
}
