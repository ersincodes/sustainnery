import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { TabData } from '@/types/management-types';
import { fetchChemicalSupplierContactsData, fetchChemicalInventoriesData, fetchChemicalChangesData, fetchVocFollowingsData, fetchChromiumConsumptionsData } from '@/services/chemical/chemicalService';

interface ChemicalState {
    chemicalSupplierContacts: TabData;
    chemicalInventories: TabData;
    chemicalChanges: TabData;
    vocFollowings: TabData;
    chromiumConsumptions: TabData;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ChemicalState = {
    chemicalSupplierContacts: { title: 'Chemical Supplier Contacts', data: [], columns: [] },
    chemicalInventories: { title: 'Chemical Inventories', data: [], columns: [] },
    chemicalChanges: { title: 'Chemical Changes', data: [], columns: [] },
    vocFollowings: { title: 'VOC Followings', data: [], columns: [] },
    chromiumConsumptions: { title: 'Chromium Consumptions', data: [], columns: [] },
    status: 'idle',
    error: null,
};

export const fetchChemicalSupplierContacts = createAsyncThunk('chemical/fetchChemicalSupplierContacts', async () => {
    const response = await fetchChemicalSupplierContactsData();
    return {
        title: 'Chemical Supplier Contacts',
        data: response.data,
        columns: [
            { accessor: 'supplierName', title: 'Supplier Name', sortable: true },
            { accessor: 'contactDate', title: 'Contact Date', sortable: true },
            { accessor: 'contactType', title: 'Contact Type', sortable: true },
            { accessor: 'contactPerson', title: 'Contact Person', sortable: true },
            { accessor: 'responseDate', title: 'Response Date', sortable: true },
            { accessor: 'sentBy', title: 'Sent By', sortable: true },
            { accessor: 'acceptanceOrAddition', title: 'Acceptance/Addition', sortable: true },
            { accessor: 'version', title: 'Version', sortable: true },
            { accessor: 'rslMeetDate', title: 'RSL Meet Date', sortable: true },
        ],
        dateField: 'contactDate',
    } as TabData;
});

export const fetchChemicalInventories = createAsyncThunk('chemical/fetchChemicalInventories', async () => {
    const response = await fetchChemicalInventoriesData();
    return {
        title: 'Chemical Inventories',
        data: response.data,
        columns: [
            { accessor: 'chemicalName', title: 'Chemical Name', sortable: true },
            { accessor: 'process', title: 'Process', sortable: true },
            { accessor: 'nature', title: 'Nature', sortable: true },
            { accessor: 'manufacturer', title: 'Manufacturer', sortable: true },
            { accessor: 'vendor', title: 'Vendor', sortable: true },
            { accessor: 'mrslLevel', title: 'MRSL Level', sortable: true },
            { accessor: 'usageAmountDuringAuditPeriodKg', title: 'Usage Amount (kg)', sortable: true },
            { accessor: 'storageLocation', title: 'Storage Location', sortable: true },
        ],
    } as TabData;
});

export const fetchChemicalChanges = createAsyncThunk('chemical/fetchChemicalChanges', async () => {
    const response = await fetchChemicalChangesData();
    return {
        title: 'Chemical Changes',
        data: response.data,
        columns: [
            { accessor: 'reviewDate', title: 'Review Date', sortable: true },
            { accessor: 'process', title: 'Process', sortable: true },
            { accessor: 'chemicalSubstanceInUse', title: 'Chemical In Use', sortable: true },
            { accessor: 'recommendedChemicalSubstance', title: 'Recommended Chemical', sortable: true },
            { accessor: 'changedRecipeNo', title: 'Changed Recipe No', sortable: true },
            { accessor: 'newRecipeNo', title: 'New Recipe No', sortable: true },
            { accessor: 'literatureInformation', title: 'Literature Info', sortable: true },
            { accessor: 'msds', title: 'MSDS', sortable: true },
            { accessor: 'test', title: 'Test', sortable: true },
            { accessor: 'riskAnalysisPerformedBy', title: 'Risk Analysis By', sortable: true },
            { accessor: 'approvedBy', title: 'Approved By', sortable: true },
        ],
        dateField: 'reviewDate',
    } as TabData;
});

export const fetchVocFollowings = createAsyncThunk('chemical/fetchVocFollowings', async () => {
    const response = await fetchVocFollowingsData();
    return {
        title: 'VOC Followings',
        data: response.data,
        columns: [
            { accessor: 'fisinajChemicalName', title: 'Chemical Name', sortable: true },
            { accessor: 'voc', title: 'VOC', sortable: true },
            { accessor: 'date', title: 'Date', sortable: true },
            { accessor: 'total', title: 'Total', sortable: true },
            { accessor: 'pistole', title: 'Pistole', sortable: true },
            { accessor: 'rollerCoat', title: 'Roller Coat', sortable: true },
        ],
        dateField: 'date',
    } as TabData;
});

export const fetchChromiumConsumptions = createAsyncThunk('chemical/fetchChromiumConsumptions', async () => {
    const response = await fetchChromiumConsumptionsData();
    return {
        title: 'Chromium Consumptions',
        data: response.data,
        columns: [
            { accessor: 'date', title: 'Date', sortable: true },
            { accessor: 'tankromAB', title: 'Tankrom AB', sortable: true },
            { accessor: 'tankromSB', title: 'Tankrom SB', sortable: true },
            { accessor: 'kromF24', title: 'Krom F24', sortable: true },
            { accessor: 'ecoltan', title: 'Ecoltan', sortable: true },
            { accessor: 'chromosolB', title: 'Chromosol B', sortable: true },
            { accessor: 'total', title: 'Total', sortable: true },
        ],
        dateField: 'date',
    } as TabData;
});

const chemicalSlice = createSlice({
    name: 'chemical',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchChemicalSupplierContacts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchChemicalSupplierContacts.fulfilled, (state, action: PayloadAction<TabData>) => {
                state.status = 'succeeded';
                state.chemicalSupplierContacts = action.payload;
            })
            .addCase(fetchChemicalSupplierContacts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'An unknown error occurred';
            })
            .addCase(fetchChemicalInventories.fulfilled, (state, action: PayloadAction<TabData>) => {
                state.chemicalInventories = action.payload;
            })
            .addCase(fetchChemicalChanges.fulfilled, (state, action: PayloadAction<TabData>) => {
                state.chemicalChanges = action.payload;
            })
            .addCase(fetchVocFollowings.fulfilled, (state, action: PayloadAction<TabData>) => {
                state.vocFollowings = action.payload;
            })
            .addCase(fetchChromiumConsumptions.fulfilled, (state, action: PayloadAction<TabData>) => {
                state.chromiumConsumptions = action.payload;
            });
    },
});

export default chemicalSlice.reducer;
