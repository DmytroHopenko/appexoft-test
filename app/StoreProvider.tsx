"use client";

import { store } from "@/lib/store";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({children}: {children: React.ReactNode}){
    const storeRef = useRef(store);

    return <Provider store={storeRef.current}>{children}</Provider>
}