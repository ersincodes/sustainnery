import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { TabData } from '@/types/management-types';
import { fetchEnergyData } from '@/services/energy/energyService';

interface EnergyState {
    data: TabData[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: EnergyState = {
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
                title: apiData.title || 'Energy Data',
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

export const fetchEnergy = createAsyncThunk('energy/fetchEnergy', async () => {
    const response = await fetchEnergyData();
    return transformToTabData(response);
});

const energySlice = createSlice({
    name: 'energy',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEnergy.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchEnergy.fulfilled, (state, action: PayloadAction<TabData[]>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchEnergy.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'An unknown error occurred';
            });
    },
});

export default energySlice.reducer;
