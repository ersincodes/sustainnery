'use client';
import GenericTableComponent from '@/components/datatables/GenericTableComponent';
import { rslManagementData } from '@/lib/data/rslData';

export default function RSLTable() {
    return <GenericTableComponent tabsData={rslManagementData} moduleName="RSL" />;
}
