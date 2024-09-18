'use client';
import GenericTableComponent from '@/components/datatables/GenericTableComponent';
import { wasteWaterData } from '@/lib/data/wasteWaterData';

export default function WasteWaterTable() {
    return <GenericTableComponent tabsData={wasteWaterData} moduleName="Waste Water" />;
}
