import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { TabData } from '@/types/management-types';
import {
    fetchRawLeatherSuppliersData,
    fetchIntermediateGoodsSuppliersData,
    fetchTanningsData,
    fetchRetannageDyeingsData,
    fetchProductionsData,
    fetchChromiumConsumptionsData,
    fetchCr2o3OilTestsData,
} from '@/services/production/productionService';

interface ProductionState {
    rawLeatherSuppliers: TabData;
    intermediateGoodsSuppliers: TabData;
    tannings: TabData;
    retannageDyeings: TabData;
    productions: TabData;
    chromiumConsumptions: TabData;
    cr2o3OilTests: TabData;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ProductionState = {
    rawLeatherSuppliers: { title: 'Raw Leather Suppliers', data: [], columns: [] },
    intermediateGoodsSuppliers: { title: 'Intermediate Goods Suppliers', data: [], columns: [] },
    tannings: { title: 'Tannings', data: [], columns: [] },
    retannageDyeings: { title: 'Retannage Dyeings', data: [], columns: [] },
    productions: { title: 'Productions', data: [], columns: [] },
    chromiumConsumptions: { title: 'Chromium Consumptions', data: [], columns: [] },
    cr2o3OilTests: { title: 'Cr2O3 Oil Tests', data: [], columns: [] },
    status: 'idle',
    error: null,
};

export const fetchRawLeatherSuppliers = createAsyncThunk('production/fetchRawLeatherSuppliers', async () => {
    const response = await fetchRawLeatherSuppliersData();
    return {
        title: 'Raw Leather Suppliers',
        data: response.data,
        columns: [
            { accessor: 'supplierCompanyFullName', title: 'Supplier Company', sortable: true },
            { accessor: 'supplierCode', title: 'Supplier Code', sortable: true },
            { accessor: 'taxID', title: 'Tax ID', sortable: true },
            { accessor: 'country', title: 'Country', sortable: true },
            { accessor: 'warehouseLocationCoordinateX', title: 'Warehouse X', sortable: true },
            { accessor: 'warehouseLocationCoordinateY', title: 'Warehouse Y', sortable: true },
        ],
    } as TabData;
});

export const fetchIntermediateGoodsSuppliers = createAsyncThunk('production/fetchIntermediateGoodsSuppliers', async () => {
    const response = await fetchIntermediateGoodsSuppliersData();
    return {
        title: 'Intermediate Goods Suppliers',
        data: response.data,
        columns: [
            { accessor: 'supplierCompanyFullName', title: 'Supplier Company', sortable: true },
            { accessor: 'supplierCode', title: 'Supplier Code', sortable: true },
            { accessor: 'taxID', title: 'Tax ID', sortable: true },
            { accessor: 'country', title: 'Country', sortable: true },
            { accessor: 'supplierType', title: 'Supplier Type', sortable: true },
            { accessor: 'lwgProductNumber', title: 'LWG Product Number', sortable: true },
            { accessor: 'lwgScore', title: 'LWG Score', sortable: true },
            { accessor: 'lwgScorePercentage', title: 'LWG Score Percentage', sortable: true },
        ],
    } as TabData;
});

export const fetchTannings = createAsyncThunk('production/fetchTannings', async () => {
    const response = await fetchTanningsData();
    return {
        title: 'Tannings',
        data: response.data,
        columns: [
            { accessor: 'date', title: 'Date', sortable: true },
            { accessor: 'tanningBatchNoBNT', title: 'Tanning Batch No', sortable: true },
            { accessor: 'quantity', title: 'Quantity', sortable: true },
            { accessor: 'rawHideWeight', title: 'Raw Hide Weight', sortable: true },
            { accessor: 'squareMeters', title: 'Square Meters', sortable: true },
            { accessor: 'inputType', title: 'Input Type', sortable: true },
            { accessor: 'outputType', title: 'Output Type', sortable: true },
            { accessor: 'tanningType', title: 'Tanning Type', sortable: true },
            { accessor: 'ownOrSubcontracted', title: 'Own/Subcontracted', sortable: true },
            { accessor: 'oilContent', title: 'Oil Content', sortable: true },
            { accessor: 'cr2O3TanningLiquor', title: 'Cr2O3 Tanning Liquor', sortable: true },
            { accessor: 'cr2O3ChromedLeather', title: 'Cr2O3 Chromed Leather', sortable: true },
        ],
        dateField: 'date',
    } as TabData;
});

export const fetchRetannageDyeings = createAsyncThunk('production/fetchRetannageDyeings', async () => {
    const response = await fetchRetannageDyeingsData();
    return {
        title: 'Retannage Dyeings',
        data: response.data,
        columns: [
            { accessor: 'date', title: 'Date', sortable: true },
            { accessor: 'retannageBatchNo', title: 'Retannage Batch No', sortable: true },
            { accessor: 'quantity', title: 'Quantity', sortable: true },
            { accessor: 'squareMeters', title: 'Square Meters', sortable: true },
            { accessor: 'weightKg', title: 'Weight (kg)', sortable: true },
            { accessor: 'productName', title: 'Product Name', sortable: true },
            { accessor: 'tanningBatchNo', title: 'Tanning Batch No', sortable: true },
            { accessor: 'semiFinishedProductType', title: 'Semi-Finished Product Type', sortable: true },
            { accessor: 'ownOrSubcontracted', title: 'Own/Subcontracted', sortable: true },
            { accessor: 'thickness', title: 'Thickness', sortable: true },
            { accessor: 'finalPH', title: 'Final pH', sortable: true },
        ],
        dateField: 'date',
    } as TabData;
});

export const fetchProductions = createAsyncThunk('production/fetchProductions', async () => {
    const response = await fetchProductionsData();
    return {
        title: 'Productions',
        data: response.data,
        columns: [
            { accessor: 'category', title: 'Category', sortable: true },
            { accessor: 'productionStrategy', title: 'Production Strategy', sortable: true },
            { accessor: 'rawHidetoWBLeatherPiece', title: 'Raw Hide to WB Leather (Piece)', sortable: true },
            { accessor: 'rawHidetoWBLeatherWeight', title: 'Raw Hide to WB Leather (Weight)', sortable: true },
            { accessor: 'wbLeatherM2', title: 'WB Leather (m²)', sortable: true },
            { accessor: 'rawHidetoLimedPiece', title: 'Raw Hide to Limed (Piece)', sortable: true },
            { accessor: 'rawHidetoLimedWeight', title: 'Raw Hide to Limed (Weight)', sortable: true },
            { accessor: 'limedHidetoSplitWBLeatherPiece', title: 'Limed Hide to Split WB Leather (Piece)', sortable: true },
            { accessor: 'limedHidetoSplitWBLeatherWeight', title: 'Limed Hide to Split WB Leather (Weight)', sortable: true },
            { accessor: 'splitWBtoCrustLeatherSuedPiece', title: 'Split WB to Crust Leather Sued (Piece)', sortable: true },
            { accessor: 'splitWBtoCrustLeatherSuedWeight', title: 'Split WB to Crust Leather Sued (Weight)', sortable: true },
            { accessor: 'wbGrainLeathertoCrustLeatherPiece', title: 'WB Grain Leather to Crust Leather (Piece)', sortable: true },
            { accessor: 'wbGrainLeathertoCrustLeatherWeight', title: 'WB Grain Leather to Crust Leather (Weight)', sortable: true },
            { accessor: 'nubuckPiece', title: 'Nubuck (Piece)', sortable: true },
            { accessor: 'finishingApplied', title: 'Finishing Applied', sortable: true },
            { accessor: 'totalWB', title: 'Total WB', sortable: true },
            { accessor: 'totalFinished', title: 'Total Finished', sortable: true },
        ],
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

export const fetchCr2o3OilTests = createAsyncThunk('production/fetchCr2o3OilTests', async () => {
    const response = await fetchCr2o3OilTestsData();
    return {
        title: 'Cr2O3 Oil Tests',
        data: response.data,
        columns: [
            { accessor: 'date', title: 'Date', sortable: true },
            { accessor: 'testReportNo', title: 'Test Report No', sortable: true },
            { accessor: 'batchNo', title: 'Batch No', sortable: true },
            { accessor: 'lab', title: 'Lab', sortable: true },
            { accessor: 'sampleDate', title: 'Sample Date', sortable: true },
            { accessor: 'bathTotalChromiumContent_Cr_mg_l', title: 'Bath Total Chromium Content (mg/l)', sortable: true },
            { accessor: 'wbTotalChromiumContentCr_mg_kg_percentage', title: 'WB Total Chromium Content (%)', sortable: true },
            { accessor: 'fatPercentageDetermination', title: 'Fat Percentage', sortable: true },
        ],
        dateField: 'date',
    } as TabData;
});

const productionSlice = createSlice({
    name: 'production',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRawLeatherSuppliers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRawLeatherSuppliers.fulfilled, (state, action: PayloadAction<TabData>) => {
                state.status = 'succeeded';
                state.rawLeatherSuppliers = action.payload;
            })
            .addCase(fetchRawLeatherSuppliers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'An unknown error occurred';
            })
            .addCase(fetchIntermediateGoodsSuppliers.fulfilled, (state, action: PayloadAction<TabData>) => {
                state.intermediateGoodsSuppliers = action.payload;
            })
            .addCase(fetchTannings.fulfilled, (state, action: PayloadAction<TabData>) => {
                state.tannings = action.payload;
            })
            .addCase(fetchRetannageDyeings.fulfilled, (state, action: PayloadAction<TabData>) => {
                state.retannageDyeings = action.payload;
            })
            .addCase(fetchProductions.fulfilled, (state, action: PayloadAction<TabData>) => {
                state.productions = action.payload;
            })
            .addCase(fetchChromiumConsumptions.fulfilled, (state, action: PayloadAction<TabData>) => {
                state.chromiumConsumptions = action.payload;
            })
            .addCase(fetchCr2o3OilTests.fulfilled, (state, action: PayloadAction<TabData>) => {
                state.cr2o3OilTests = action.payload;
            });
    },
});

export default productionSlice.reducer;
