import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IReason } from '../../types/interfaces';

interface IInitialState {
    reasons: Array<IReason>;
}

const ReasonsSlice = createSlice({
    name: 'reasons',
    initialState: {
        reasons: [],
    },
    reducers: {
        setReasons: (state: IInitialState, action: PayloadAction<Array<IReason>>) => {
            state.reasons = action.payload;
        }
    },
});

export default ReasonsSlice.reducer;
export const { setReasons } = ReasonsSlice.actions;
