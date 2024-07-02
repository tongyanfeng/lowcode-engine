import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        '_sysInfoSlice',
        'ts',
        `
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface ISysState {
    userInfo?: userInfo;
}
export interface userInfo {
    loginId?: string;
    userName?: string;
    role?: Array<string>;
    auth?: Array<string>;
    logoutUrl?: string;
}
const initialState: ISysState = {
    userInfo: {},
};

export const __sysInfoSlice = createSlice({
    name: "__sysInfo",
    initialState,
    reducers: {
    __setUserInfoState: (state, action: PayloadAction<userInfo>) => {
        state.userInfo = action.payload;
    },
    },
    selectors: {
    selectUserInfo: (sys) => sys.userInfo,
    },
});
export const { selectUserInfo } = __sysInfoSlice.selectors;
export const { __setUserInfoState } = __sysInfoSlice.actions;
export const __sysInfo = __sysInfoSlice.reducer;         
    `,
    );
    return [['src', 'models'], file];
}

