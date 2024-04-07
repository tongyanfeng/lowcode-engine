import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'authSlice',
        'ts',
        `
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IAuthState {
    authState: boolean;
}

const initialState: IAuthState = {
    authState: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
        state.authState = action.payload;
    },
    },
});

export const { setAuthState } = authSlice.actions;
export const auth = authSlice.reducer;         
    `,
    );

    return [['src', 'models'], file];
}

