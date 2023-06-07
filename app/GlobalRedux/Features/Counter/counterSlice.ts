'use client';
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { stat } from "fs";
export interface CounterState {
    
    value: { product: Product , amount : number }[]
}

const initialState: CounterState = { 
    value: []
}

export const CounterSlice = createSlice({
    name: 'counter', 
    initialState: initialState,
    reducers: {
        addOrder: (state, action) => {
            for (let i = 0; i <= state.value.length - 1; i++){
                if (state.value[i].product.id == action.payload.id ) {
                    state.value[i].amount += 1;
                    console.log(state.value);
                    return
                }
            }
            state.value.push({ product: action.payload, amount: 1 })
                    console.log(state.value);
        },
        removeOne: (state , action) => {
            for (let i = 0; i <= state.value.length - 1; i++){
                if (state.value[i].product.id == action.payload.id ) {
                    state.value[i].amount -= 1;
                    if (state.value[i].amount == 0) {
                        state.value.splice(i, 1)
                        return
                    }
                    return
                }
                
            }
        },
    }
})

export const { addOrder , removeOne } = CounterSlice.actions
export const selectCount = (state: RootState) => state.orders.value
export default CounterSlice.reducer;