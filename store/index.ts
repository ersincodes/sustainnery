import { configureStore } from '@reduxjs/toolkit';
import themeConfigReducer from './themeConfigSlice';
import energyReducer from './energy/energySlice';
import productionReducer from './production/productionSlice';
import wasteReducer from './waste/wasteSlice';
import waterReducer from './water/waterSlice';
import wasteWaterReducer from './waste-water/wasteWaterSlice';
import chemicalReducer from './chemical/chemicalSlice';
import rslReducer from './rsl/rslSlice';

export const store = configureStore({
    reducer: {
        themeConfig: themeConfigReducer,
        energy: energyReducer,
        production: productionReducer,
        waste: wasteReducer,
        water: waterReducer,
        chemical: chemicalReducer,
        wasteWater: wasteWaterReducer,
        rsl: rslReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
