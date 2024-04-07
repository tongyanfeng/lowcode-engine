import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'index',
        'ts',
        `
import storage from "redux-persist/lib/storage";

import { auth } from "./authSlice";
import { counter } from "./counter/counterSlice";
import { __sysInfo } from './_sysInfoSlice';

// global store reducer register
export const storeReducer = {
    auth,
    counter,
    __sysInfo
}

// configure which key we want to persist
export const persistConfig = {
    "auth": {
    key: "auth",
    storage: storage,
    whitelist: ["authState"],
    },
    "counter": {
    key: "counter",
    storage: storage,
    // whitelist: ["value"],
    },
    "__sysInfo": {
    key: "__sysInfo",
    storage: storage,
    whitelist: ["user"],
    },
}           
    `,
    );

    return [['src', 'models'], file];
}

