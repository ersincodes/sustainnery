'use client';
import GenericTableComponent from '@/components/datatables/GenericTableComponent';
import { productionData } from '@/lib/data/productionData';

export default function ProductionTable() {
    return <GenericTableComponent tabsData={productionData} moduleName="Production" />;
}
