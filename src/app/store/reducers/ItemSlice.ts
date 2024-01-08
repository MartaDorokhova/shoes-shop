import { createSlice } from "@reduxjs/toolkit";

export interface ItemState {
    title: string;
    price: number;
    images: Array<string>;
    id: number;
    category: number ;
}

const initialState:ItemState = {
id:1,
title:"",
category: 1,
price: 0,
images:[],
}

export const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers:{}

})

export default itemSlice.reducer