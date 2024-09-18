'use client';
import GenericTableComponent from '@/components/datatables/GenericTableComponent';
import { wasteManagementData } from '@/lib/data/wasteData';

export default function WasteTable() {
    return <GenericTableComponent tabsData={wasteManagementData} moduleName="Waste" />;
}
