"use client"

import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Artisan } from "@/type/ArtisanType";

type valueType = {
    data: Artisan[],
    setData: Dispatch<SetStateAction<Artisan[]>>
}


const DataContext = createContext<valueType>({
    data: [],
    setData: () => {}
});

export default DataContext;

export const DataContextProvider = ({children} : {children: React.ReactNode}) => {

    const [data, setData] = useState<Artisan[]>([]);

    return (
        <DataContext.Provider value={{
            data: data,
            setData: setData
        }}>
            {children}
        </DataContext.Provider>
    )
}