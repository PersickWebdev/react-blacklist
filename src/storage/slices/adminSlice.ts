import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
    isAdmin: boolean;
}

const AdminSlice = createSlice({
    name: 'admin',
    initialState: {
        isAdmin: false,
    },
    reducers: {
        setAdmin: (state: IInitialState, action: PayloadAction<boolean>) => {
            state.isAdmin = action.payload;
        }
    },
});

export default AdminSlice.reducer;
export const { setAdmin } = AdminSlice.actions;
