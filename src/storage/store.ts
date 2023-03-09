import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AdminSlice from './slices/adminSlice';
import CompaniesSlice from './slices/companiesSlice';
import IndustriesSlice from './slices/industriesSlice';
import ManagersSlice from './slices/managersSlice';
import ReasonsSlice from './slices/reasonsSlice';

const RootReducer = combineReducers({
    admin: AdminSlice,
    companies: CompaniesSlice,
    industries: IndustriesSlice,
    managers: ManagersSlice,
    reasons: ReasonsSlice,
});

export const store = configureStore({
    reducer: RootReducer,
});

export type RootState = ReturnType<typeof RootReducer>;