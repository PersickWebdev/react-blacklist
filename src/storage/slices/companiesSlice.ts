import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ICompany } from '../../types/interfaces';

interface IInitialState {
    companies: Array<ICompany>
}

const CompaniesSlice = createSlice({
    name: 'companies',
    initialState: {
        companies: []
    },
    reducers: {
        setCompanies: (state: IInitialState, action: PayloadAction<Array<ICompany>>) => {
            state.companies = action.payload;
        }
    }
});

export default CompaniesSlice.reducer;
export const { setCompanies } = CompaniesSlice.actions;