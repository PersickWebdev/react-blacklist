import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AdminSlice from './slices/adminSlice';
import CompaniesSlice from './slices/companiesSlice';
import ManagersSlice from './slices/managersSlice';

const RootReducer = combineReducers({
    admin: AdminSlice,
    companies: CompaniesSlice,
    managers: ManagersSlice,
});

export const store = configureStore({
    reducer: RootReducer,
});

export type RootState = ReturnType<typeof RootReducer>;