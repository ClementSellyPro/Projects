import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

interface ContextType {
    filterSecteur: string,
    setFilterSecteur: Dispatch<SetStateAction<string>>,
    filterMetier: string,
    SetFilterMetier: Dispatch<SetStateAction<string>>
}

const FilterContext = createContext<ContextType>({
    filterSecteur: '',
    setFilterSecteur: () => {},
    filterMetier: '',
    SetFilterMetier: () => {}
});

export default FilterContext;

export const FilterContextProvider = ({children} : {children: React.ReactNode}) => {
    
    const [filterSecteur, setFilterSecteur] = useState<string>('');
    const [filterMetier, SetFilterMetier] = useState<string>('');

    return(
        <FilterContext.Provider value={{
                filterSecteur,
                setFilterSecteur,
                filterMetier,
                SetFilterMetier
            }}>
            {children}
        </FilterContext.Provider>
    )
};

export const useFilterContext = () => {
    return useContext(FilterContext)
};