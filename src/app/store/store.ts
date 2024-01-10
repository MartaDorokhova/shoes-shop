import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { baseAPI} from "api/api";
import { hitsAPI, itemAPI, сategoriesAPI } from "features";



const rootReducer = combineReducers({
    [baseAPI.reducerPath]: baseAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(baseAPI.middleware)
                .concat(itemAPI.middleware)
                .concat(hitsAPI.middleware)
                .concat(сategoriesAPI.middleware)

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']