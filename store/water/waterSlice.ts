import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { TabData } from '@/types/management-types';
import { fetchWaterData } from '@/services/water/waterService';

interface WaterState {
    data: TabData[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: WaterState = {
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
                title: apiData.title || 'Water Data',
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

export const fetchWater = createAsyncThunk('water/fetchWater', async () => {
    const response = await fetchWaterData();
    return transformToTabData(response);
});

const waterSlice = createSlice({
    name: 'water',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWater.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchWater.fulfilled, (state, action: PayloadAction<TabData[]>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchWater.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'An unknown error occurred';
            });
    },
});

export default waterSlice.reducer;
