import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IManager } from '../../types/interfaces';

interface IInitialState {
    managers: Array<IManager>;
}

const ManagersSlice = createSlice({
    name: 'managers',
    initialState: {
        managers: [],
    },
    reducers: {
        setManagers: (state: IInitialState, action: PayloadAction<Array<IManager>>) => {
            state.managers = action.payload;
        }
    },
});

export default ManagersSlice.reducer;
export const { setManagers } = ManagersSlice.actions;
