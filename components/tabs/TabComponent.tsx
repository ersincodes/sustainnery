'use client';
import { Tab } from '@headlessui/react';
import DataTable from '@/components/datatables/Datatable';
import { TabData } from '@/lib/dataSet';

interface TabComponentProps {
    tabsData: TabData[];
}

export default function TabComponent({ tabsData }: TabComponentProps) {
    return (
        <div className=" p-8">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-gray-200 p-1">
                    {tabsData.map((tab, index) => (
                        <Tab
                            key={index}
                            className={({ selected }) =>
                                `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-500
                ring-white ring-opacity-60  transition-all duration-200
                ease-out focus:outline-none focus:ring-2
                ${selected ? 'bg-white bg-opacity-[0.95] shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]' : 'text-gray-700 hover:bg-white/[0.30] hover:text-gray-700'}`
                            }
                        >
                            {tab.title}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-4">
                    {tabsData.map((tab, index) => (
                        <Tab.Panel
                            key={index}
                            className={`rounded-xl bg-white p-6
                shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.9)]
                transition-all duration-300 ease-out
                focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-60 focus:ring-offset-2 focus:ring-offset-gray-100`}
                        >
                            <DataTable data={tab.data} columns={tab.columns} minAgeFilter={tab.minAgeFilter} maxAgeFilter={tab.maxAgeFilter} />
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}
