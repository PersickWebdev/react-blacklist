import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AdminSlice from './slices/adminSlice';

const RootReducer = combineReducers({
    admin: AdminSlice,
});

export const store = configureStore({
    reducer: RootReducer,
});

export type RootState = ReturnType<typeof RootReducer>;