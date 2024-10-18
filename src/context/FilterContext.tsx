"use client"

import { Artisan } from "@/type/ArtisanType";
import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

interface ContextType {
    filterSecteur: string,
    setFilterSecteur: Dispatch<SetStateAction<string>>,
    filterMetier: string,
    SetFilterMetier: Dispatch<SetStateAction<string>>,
    selectedArtisan: Artisan | null,
    setSelectedArtisan: Dispatch<SetStateAction<Artisan | null>>
}

const FilterContext = createContext<ContextType>({
    filterSecteur: '',
    setFilterSecteur: () => {},
    filterMetier: '',
    SetFilterMetier: () => {},
    selectedArtisan: null,
    setSelectedArtisan: () => {}
});

export default FilterContext;

export const FilterContextProvider = ({children} : {children: React.ReactNode}) => {
    
    const [filterSecteur, setFilterSecteur] = useState<string>('');
    const [filterMetier, SetFilterMetier] = useState<string>('');
    const [selectedArtisan, setSelectedArtisan] = useState<Artisan | null>(null);

    return(
        <FilterContext.Provider value={{
                filterSecteur,
                setFilterSecteur,
                filterMetier,
                SetFilterMetier,
                selectedArtisan,
                setSelectedArtisan
            }}>
            {children}
        </FilterContext.Provider>
    )
};

export const useFilterContext = () => {
    return useContext(FilterContext)
};