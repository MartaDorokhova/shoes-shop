import { createSlice } from "@reduxjs/toolkit";

export interface ItemState {
id: number;
name:string;
category: string;
price: number;
quantity: number;
}

const initialState:ItemState = {
id:1,
name:"",
category: "",
price: 0,
quantity: 0
}

export const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers:{}

})

export default itemSlice.reducer