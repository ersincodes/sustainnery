import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { TabData } from '@/types/management-types';
import { fetchChemicalData } from '@/services/chemical/chemicalService';

interface ChemicalState {
    data: TabData[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ChemicalState = {
    data: [],
    status: 'idle',
    error: null,
};

// This function transforms the API data into the TabData format
const transformToTabData = (apiData: any): TabData[] => {
    // Check if apiData is an array (multiple tabs) or an object (single tab)
    if (Array.isArray(apiData)) {
        return apiData.map((tabData) => ({
            title: tabData.title || 'Unnamed Tab',
            data: tabData.data || [],
            columns: tabData.columns || [],
            addEnabled: tabData.addEnabled !== undefined ? tabData.addEnabled : true,
            dateField: tabData.dateField || 'date',
            minAgeFilter: tabData.minAgeFilter,
            maxAgeFilter: tabData.maxAgeFilter,
        }));
    } else {
        // If it's a single object, wrap it in an array
        return [
            {
                title: apiData.title || 'Chemical Data',
                data: apiData.data || [],
                columns: apiData.columns || [],
                addEnabled: apiData.addEnabled !== undefined ? apiData.addEnabled : true,
                dateField: apiData.dateField || 'date',
                minAgeFilter: apiData.minAgeFilter,
                maxAgeFilter: apiData.maxAgeFilter,
            },
        ];
    }
};

export const fetchChemical = createAsyncThunk('chemical/fetchChemical', async () => {
    const response = await fetchChemicalData();
    return transformToTabData(response);
});

const chemicalSlice = createSlice({
    name: 'chemical',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchChemical.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchChemical.fulfilled, (state, action: PayloadAction<TabData[]>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchChemical.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'An unknown error occurred';
            });
    },
});

export default chemicalSlice.reducer;
