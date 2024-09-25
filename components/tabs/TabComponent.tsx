import React, { useState, useMemo } from 'react';
import { Tab } from '@headlessui/react';
import DataTable from '@/components/datatables/DatatableComponent';
import { TabData } from '@/types/management-types';
import DateRangePickerComponent from '@/components/forms/date-picker/DatePickerRangeComponent';

interface TabComponentProps {
    tabsData: TabData[];
    onRowClick?: (rowData: any) => void;
    onAddClick?: (tabData: TabData) => void;
}

interface FilterState {
    dateRange: Date[];
    search: string;
    minAge: string;
    maxAge: string;
}

export default function TabComponent({ tabsData = [], onRowClick, onAddClick }: TabComponentProps) {
    const [selectedTab, setSelectedTab] = useState(0);
    const [filters, setFilters] = useState<FilterState[]>(() =>
        tabsData.map(() => ({
            dateRange: [],
            search: '',
            minAge: '',
            maxAge: '',
        }))
    );

    const handleFilterChange = (tabIndex: number, filterType: keyof FilterState, value: any) => {
        setFilters((prevFilters) => {
            const newFilters = [...prevFilters];
            newFilters[tabIndex] = { ...newFilters[tabIndex], [filterType]: value };
            return newFilters;
        });
    };

    const filteredData = useMemo(() => {
        return tabsData.map((tab, index) => {
            const { dateRange, search, minAge, maxAge } = filters[index] || {};
            let filtered = [...(tab.data || [])];

            if (dateRange && dateRange.length === 2) {
                const startDate = new Date(dateRange[0]);
                const endDate = new Date(dateRange[1]);
                startDate.setHours(0, 0, 0, 0);
                endDate.setHours(23, 59, 59, 999);
                filtered = filtered.filter((item) => {
                    const itemDate = new Date(item[tab.dateField || 'testDate']);
                    return itemDate >= startDate && itemDate <= endDate;
                });
            }

            if (search) {
                filtered = filtered.filter((item) => Object.values(item).some((val) => String(val).toLowerCase().includes(search.toLowerCase())));
            }

            if (tab.minAgeFilter && minAge !== '') {
                filtered = filtered.filter((item) => {
                    const value = Number(item[tab.minAgeFilter!]);
                    return !isNaN(value) && value >= Number(minAge);
                });
            }

            if (tab.maxAgeFilter && maxAge !== '') {
                filtered = filtered.filter((item) => {
                    const value = Number(item[tab.maxAgeFilter!]);
                    return !isNaN(value) && value <= Number(maxAge);
                });
            }

            return filtered;
        });
    }, [tabsData, filters]);

    if (tabsData.length === 0) {
        return <div>No data available</div>;
    }

    return (
        <div className="w-full">
            <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
                <Tab.List className="flex w-full rounded-xl bg-slate-50 p-1">
                    {tabsData.map((tab, index) => (
                        <Tab
                            key={index}
                            className={({ selected }) =>
                                `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                                transition-all duration-200 ease-out
                                ${selected ? 'bg-white text-gray-700 shadow-md' : 'text-gray-600 hover:bg-white/[0.30] hover:text-gray-700'}`
                            }
                        >
                            {tab.title}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels>
                    {tabsData.map((tab, index) => (
                        <Tab.Panel key={index} className="rounded-xl bg-white p-6 shadow-lg">
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-xl font-bold">{tab.title}</h2>
                                {tab.addEnabled && onAddClick && (
                                    <button onClick={() => onAddClick(tab)} className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                                        Ekle
                                    </button>
                                )}
                            </div>
                            <DataTable
                                data={filteredData[index]}
                                columns={tab.columns}
                                minAgeFilter={tab.minAgeFilter}
                                maxAgeFilter={tab.maxAgeFilter}
                                onRowClick={onRowClick}
                                dateField={tab.dateField}
                                filters={filters[index]}
                                onFilterChange={(filterType, value) => handleFilterChange(index, filterType as keyof FilterState, value)}
                            />
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}
