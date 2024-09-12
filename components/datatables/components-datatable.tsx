'use client';
import React, { useEffect, useState } from 'react';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import sortBy from 'lodash/sortBy';

interface Column {
    accessor: string;
    title: string;
    sortable: boolean;
    render?: (props: any) => React.ReactNode;
}

interface ComponentsDatatablesRangeSearchProps {
    data: any[];
    columns: Column[];
    minAgeFilter: string;
    maxAgeFilter: string;
}

const ComponentsDatatablesRangeSearch: React.FC<ComponentsDatatablesRangeSearchProps> = ({ data, columns, minAgeFilter, maxAgeFilter }) => {
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(data, 'id'));
    const [recordsData, setRecordsData] = useState(initialRecords);
    const [tempData, setTempData] = useState(initialRecords);
    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'id',
        direction: 'asc',
    });

    const [minAge, setMinAge] = useState('');
    const [maxAge, setMaxAge] = useState('');

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        setInitialRecords(() => {
            return tempData.filter((item) => {
                return columns.some((column) => String(item[column.accessor]).toLowerCase().includes(search.toLowerCase()));
            });
        });
    }, [search, columns, tempData]);

    useEffect(() => {
        const sortedData = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? sortedData.reverse() : sortedData);
        setPage(1);
    }, [sortStatus]);

    useEffect(() => {
        let filteredData = data;
        if (minAge !== '' && minAge !== null) {
            filteredData = filteredData.filter((d) => d[minAgeFilter] >= Number(minAge));
        }
        if (maxAge !== '' && maxAge !== null) {
            filteredData = filteredData.filter((d) => d[maxAgeFilter] <= Number(maxAge));
        }
        if (minAge || maxAge) {
            setInitialRecords(filteredData);
            setTempData(filteredData);
        }
    }, [minAge, maxAge, data, minAgeFilter, maxAgeFilter]);

    const formatDate = (date: string) => {
        if (date) {
            const dt = new Date(date);
            const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
            const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
            return `${day}/${month}/${dt.getFullYear()}`;
        }
        return '';
    };

    return (
        <div className="panel mt-6">
            <div className="mb-4.5 flex flex-col gap-5 md:flex-row md:items-center">
                <div className="flex items-center gap-5">
                    <div className="flex-1 md:flex-auto">
                        <input type="text" value={minAge} onChange={(e) => setMinAge(e.target.value)} className="form-input" placeholder={`Minimum ${minAgeFilter}...`} />
                    </div>
                    <div className="flex-1 md:flex-auto">
                        <input type="text" value={maxAge} onChange={(e) => setMaxAge(e.target.value)} className="form-input" placeholder={`Maximum ${maxAgeFilter}...`} />
                    </div>
                </div>
                <div className="ltr:ml-auto rtl:mr-auto">
                    <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
            <div className="datatables">
                <DataTable
                    highlightOnHover
                    className="table-hover whitespace-nowrap"
                    records={recordsData}
                    columns={columns}
                    totalRecords={initialRecords.length}
                    recordsPerPage={pageSize}
                    page={page}
                    onPageChange={(p) => setPage(p)}
                    recordsPerPageOptions={PAGE_SIZES}
                    onRecordsPerPageChange={setPageSize}
                    sortStatus={sortStatus}
                    onSortStatusChange={setSortStatus}
                    minHeight={200}
                    paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                />
            </div>
        </div>
    );
};

export default ComponentsDatatablesRangeSearch;
