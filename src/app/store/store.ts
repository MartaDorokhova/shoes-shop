import {combineReducers, configureStore} from '@reduxjs/toolkit'
import itemReducer from './reducers/ItemSlice'
import { itemAPI } from 'api/api';


const rootReducer = combineReducers({
    itemReducer,
    [itemAPI.reducerPath]: itemAPI.reducer
})

export const setupStore = ()=>{

    return configureStore({
        reducer:rootReducer
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']