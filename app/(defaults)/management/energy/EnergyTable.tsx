'use client';
import GenericTableComponent from '@/components/datatables/GenericTableComponent';
import { energyData } from '@/lib/data/energyData';

export default function EnergyTable() {
    return <GenericTableComponent tabsData={energyData} moduleName="Energy" />;
}
