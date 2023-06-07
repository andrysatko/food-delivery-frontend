'use client';
import { Provider } from "react-redux/es/exports";
import { store } from "./store";
import { ReactNode } from "react";

export interface ProviderProps { 
    children : ReactNode
}
export function Providers({ children }:ProviderProps) {
    return (
        <Provider store={store}>
            {children}    
        </Provider>    )
}