import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ICompany } from '../../types/interfaces';

interface IInitialState {
    companies: Array<ICompany>,
    filteredCompanies: Array<ICompany> | [],
}

const CompaniesSlice = createSlice({
    name: 'companies',
    initialState: {
        companies: [],
        filteredCompanies: [],
    },
    reducers: {
        setCompanies: (state: IInitialState, action: PayloadAction<Array<ICompany>>) => {
            state.companies = action.payload;
        },
        setFilteredCompanies: (state: IInitialState, action: PayloadAction<Array<ICompany> | []>) => {
            state.filteredCompanies = action.payload;
        },
    }
});

export default CompaniesSlice.reducer;
export const { setCompanies, setFilteredCompanies } = CompaniesSlice.actions;