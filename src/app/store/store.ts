import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { hitsAPI, itemAPI } from "api/api";


const rootReducer = combineReducers({
    [itemAPI.reducerPath]: itemAPI.reducer,
    [hitsAPI.reducerPath]: hitsAPI.reducer

})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(itemAPI.middleware)
                .concat(hitsAPI.middleware)

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']