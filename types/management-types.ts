export interface Column {
    accessor: string;
    title: string;
    sortable: boolean;
    render?: (props: any) => React.ReactNode;
    options?: string[];
}

export interface TabData {
    title: string;
    data: any[];
    columns: {
        accessor: string;
        title: string;
        sortable: boolean;
    }[];
    addFormFields?: string[];
    addEnabled?: boolean;
    minAgeFilter?: string;
    maxAgeFilter?: string;
    dateField?: string;
}
