import React, { useState, useEffect } from 'react';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import sortBy from 'lodash/sortBy';
import DateRangePickerComponent from '../forms/date-picker/DatePickerRangeComponent';

interface Column {
    accessor: string;
    title: string;
    sortable: boolean;
    render?: (props: any) => React.ReactNode;
}

interface Filters {
    dateRange: Date[];
    search: string;
    minAge: string;
    maxAge: string;
}

interface DatatableComponentProps {
    data: Record<string, any>[];
    columns: Column[];
    minAgeFilter?: string;
    maxAgeFilter?: string;
    onRowClick?: (rowData: Record<string, any>) => void;
    dateField?: string;
    filters: Filters;
    onFilterChange: (filterType: string, value: any) => void;
}

const DatatableComponent: React.FC<DatatableComponentProps> = ({ data, columns, minAgeFilter, maxAgeFilter, onRowClick, dateField, filters, onFilterChange }) => {
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: columns[0]?.accessor || 'id',
        direction: 'asc',
    });

    const [selectedRecords, setSelectedRecords] = useState<any[]>([]);

    const sortedData = React.useMemo(() => {
        const sorted = sortBy(data, sortStatus.columnAccessor);
        return sortStatus.direction === 'desc' ? sorted.reverse() : sorted;
    }, [data, sortStatus]);

    const paginatedData = React.useMemo(() => {
        const start = (page - 1) * pageSize;
        return sortedData.slice(start, start + pageSize);
    }, [sortedData, page, pageSize]);

    const handleDateRangeChange = (dates: Date[]) => {
        onFilterChange('dateRange', dates);
    };

    useEffect(() => {
        setPage(1);
    }, [data, pageSize]);

    return (
        <div className="panel mt-6">
            <div className="mb-4.5 flex flex-wrap items-center justify-between">
                <div className="flex w-full flex-wrap items-center">
                    <div className="mb-2 mr-4 flex-grow">
                        <input type="text" className="form-input w-full" placeholder="Search..." value={filters.search} onChange={(e) => onFilterChange('search', e.target.value)} />
                    </div>
                    {minAgeFilter && (
                        <div className="mb-2 mr-4">
                            <input type="number" value={filters.minAge} onChange={(e) => onFilterChange('minAge', e.target.value)} className="form-input" placeholder={`Minimum ${minAgeFilter}...`} />
                        </div>
                    )}
                    {maxAgeFilter && (
                        <div className="mb-2 mr-4">
                            <input type="number" value={filters.maxAge} onChange={(e) => onFilterChange('maxAge', e.target.value)} className="form-input" placeholder={`Maximum ${maxAgeFilter}...`} />
                        </div>
                    )}
                    {dateField && (
                        <div className="mb-2 ml-auto">
                            <DateRangePickerComponent onChange={handleDateRangeChange} value={filters.dateRange} />
                        </div>
                    )}
                </div>
            </div>
            <div className="datatables">
                <DataTable
                    highlightOnHover
                    className="table-hover whitespace-nowrap"
                    records={paginatedData}
                    columns={columns}
                    totalRecords={data.length}
                    recordsPerPage={pageSize}
                    page={page}
                    onPageChange={(p) => setPage(p)}
                    recordsPerPageOptions={PAGE_SIZES}
                    onRecordsPerPageChange={setPageSize}
                    sortStatus={sortStatus}
                    onSortStatusChange={setSortStatus}
                    minHeight={200}
                    paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                    onRowClick={onRowClick ? ({ record }) => onRowClick(record) : undefined}
                    selectedRecords={selectedRecords}
                    onSelectedRecordsChange={setSelectedRecords}
                />
            </div>
        </div>
    );
};

export default DatatableComponent;
