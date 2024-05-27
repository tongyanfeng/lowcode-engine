import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        '_store',
        'ts',
        `
import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { storeReducer, persistConfig } from "@/models/index";

import { persistReducer } from "redux-persist";

const iterate = (reducer:any, config:any) => {
    let iterateReducer:any = {};
    for (let i in reducer) {
    iterateReducer[i] = config[i] ? persistReducer(config[i], reducer[i]) : reducer[i]
    }
    return iterateReducer;
}

const rootReducer = combineReducers(iterate(storeReducer, persistConfig));

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    RootState,
    unknown,
    Action
>;        
    `,
    );

    return [['src', 'lib'], file];
}

