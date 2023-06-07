'use client';
import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./Features/Counter/counterSlice"

export const store = configureStore({
    reducer: {
        orders: orderReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type APpDispatch = typeof store.dispatch