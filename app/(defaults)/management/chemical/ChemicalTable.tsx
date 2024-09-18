'use client';
import GenericTableComponent from '@/components/datatables/GenericTableComponent';
import { chemicalManagementData } from '@/lib/data/chemicalData';

export default function ChemicalTable() {
    return <GenericTableComponent tabsData={chemicalManagementData} moduleName="Chemical" />;
}
