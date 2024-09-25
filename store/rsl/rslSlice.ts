import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { TabData, RSLTest, ProductLine, Customer, CustomerContact, Cr6Test } from '@/types/management-types';
import { fetchRSLTestsData, fetchProductLinesData, fetchCustomersData, fetchCustomerContactsData, fetchCr6TestsData } from '@/services/rsl/rslService';

interface RSLState {
    rslTests: TabData;
    productLines: TabData;
    customers: TabData;
    customerContacts: TabData;
    cr6Tests: TabData;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: RSLState = {
    rslTests: { title: 'RSL Tests', data: [], columns: [] },
    productLines: { title: 'Product Lines', data: [], columns: [] },
    customers: { title: 'Customers', data: [], columns: [] },
    customerContacts: { title: 'Customer Contacts', data: [], columns: [] },
    cr6Tests: { title: 'Cr6 Tests', data: [], columns: [] },
    status: 'idle',
    error: null,
};

export const fetchRSLTests = createAsyncThunk('rsl/fetchRSLTests', async () => {
    const response = await fetchRSLTestsData();
    return {
        title: 'RSL Tests',
        data: response.data as RSLTest[],
        columns: [
            { accessor: 'reportNo', title: 'Report No', sortable: true },
            { accessor: 'testDate', title: 'Test Date', sortable: true },
            { accessor: 'testingLab', title: 'Testing Lab', sortable: true },
            { accessor: 'result', title: 'Result', sortable: true },
            { accessor: 'recipeNo', title: 'Recipe No', sortable: true },
            { accessor: 'material', title: 'Material', sortable: true },
        ],
        dateField: 'testDate',
    } as TabData;
});

export const fetchProductLines = createAsyncThunk('rsl/fetchProductLines', async () => {
    const response = await fetchProductLinesData();
    return {
        title: 'Product Lines',
        data: response.data as ProductLine[],
        columns: [
            { accessor: 'productName', title: 'Product Name', sortable: true },
            { accessor: 'color', title: 'Color', sortable: true },
            { accessor: 'thickness', title: 'Thickness', sortable: true },
            { accessor: 'retannageCount', title: 'Retannage Count', sortable: true },
            { accessor: 'producedSquareMeters', title: 'Produced Square Meters', sortable: true },
        ],
    } as TabData;
});

export const fetchCustomers = createAsyncThunk('rsl/fetchCustomers', async () => {
    const response = await fetchCustomersData();
    return {
        title: 'Customers',
        data: response.data as Customer[],
        columns: [
            { accessor: 'customerName', title: 'Customer Name', sortable: true },
            { accessor: 'customerType', title: 'Customer Type', sortable: true },
            { accessor: 'authorizedPerson', title: 'Authorized Person', sortable: true },
            { accessor: 'contactMethod', title: 'Contact Method', sortable: true },
            { accessor: 'email', title: 'Email', sortable: true },
        ],
    } as TabData;
});

export const fetchCustomerContacts = createAsyncThunk('rsl/fetchCustomerContacts', async () => {
    const response = await fetchCustomerContactsData();
    return {
        title: 'Customer Contacts',
        data: response.data as CustomerContact[],
        columns: [
            { accessor: 'contactDate', title: 'Contact Date', sortable: true },
            { accessor: 'contactType', title: 'Contact Type', sortable: true },
            { accessor: 'contactPerson', title: 'Contact Person', sortable: true },
            { accessor: 'responseDate', title: 'Response Date', sortable: true },
            { accessor: 'rslAcceptanceOrAddition', title: 'RSL Acceptance', sortable: true },
        ],
        dateField: 'contactDate',
    } as TabData;
});

export const fetchCr6Tests = createAsyncThunk('rsl/fetchCr6Tests', async () => {
    const response = await fetchCr6TestsData();
    return {
        title: 'Cr6 Tests',
        data: response.data as Cr6Test[],
        columns: [
            { accessor: 'reportNo', title: 'Report No', sortable: true },
            { accessor: 'testDate', title: 'Test Date', sortable: true },
            { accessor: 'testingLab', title: 'Testing Lab', sortable: true },
            { accessor: 'resultWithAging', title: 'Result with Aging', sortable: true },
            { accessor: 'article', title: 'Article', sortable: true },
        ],
        dateField: 'testDate',
    } as TabData;
});

const rslSlice = createSlice({
    name: 'rsl',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRSLTests.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRSLTests.fulfilled, (state, action: PayloadAction<TabData>) => {
                state.status = 'succeeded';
                state.rslTests = action.payload;
            })
            .addCase(fetchRSLTests.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'An unknown error occurred';
            })
            .addCase(fetchProductLines.fulfilled, (state, action: PayloadAction<TabData>) => {
                state.productLines = action.payload;
            })
            .addCase(fetchCustomers.fulfilled, (state, action: PayloadAction<TabData>) => {
                state.customers = action.payload;
            })
            .addCase(fetchCustomerContacts.fulfilled, (state, action: PayloadAction<TabData>) => {
                state.customerContacts = action.payload;
            })
            .addCase(fetchCr6Tests.fulfilled, (state, action: PayloadAction<TabData>) => {
                state.cr6Tests = action.payload;
            });
    },
});

export default rslSlice.reducer;
