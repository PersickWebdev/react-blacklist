import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
    industries: Array<string>;
}

const IndustriesSlice = createSlice({
    name: 'industries',
    initialState: {
        industries: [],
    },
    reducers: {
        setIndustries: (state: IInitialState, action: PayloadAction<Array<string>>) => {
            state.industries = action.payload;
        }
    },
});

export default IndustriesSlice.reducer;
export const { setIndustries } = IndustriesSlice.actions;
