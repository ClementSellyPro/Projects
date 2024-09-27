"use client"

import Image from 'next/image'
import { useEffect, useRef } from 'react';

type Props = {
    isActive: boolean,
    setIsSecteurActive: React.Dispatch<React.SetStateAction<boolean>>,
    setFilterSecteur: React.Dispatch<React.SetStateAction<string>>,
    setSecteurDisplay: React.Dispatch<React.SetStateAction<string>>,
    refSecteur: React.RefObject<HTMLInputElement>
}

const SearchSecteur = ({isActive, setIsSecteurActive, setFilterSecteur, setSecteurDisplay, refSecteur} : Props) => {

    function secteurSelectionFn(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>){
        const target = event.target as HTMLElement;
        const value = target.innerText;
        
        if(value === "Sur toute l'ile"){
            setFilterSecteur('');
            setSecteurDisplay('');
        }else{
            setFilterSecteur(value);
            setSecteurDisplay(value);
        }
        setIsSecteurActive(false);
    }

    
    // ref to hide search menu when clicking outside
    const compareRef = (e: MouseEvent) => {
        const target = e.target as Node;
        if(isActive){
            if(!refSecteur.current?.contains(target)){
                setIsSecteurActive(false);
            }
        }
    }

    window.addEventListener('click', (e: MouseEvent) => compareRef(e))

    window.removeEventListener('click', (e: MouseEvent) => compareRef(e));

    return (
        <div ref={refSecteur} className={isActive ? 'search-secteur rounded-xl xl:w-80 lg:w-60 w-40' : 'search-secteur hidden'}>

            <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => secteurSelectionFn(event)} className='group search-secteur-item flex justify-between items-center font-normal hover:font-semibold'>
                Nord <Image className='group-hover:scale-125 transition' src='/icon/secteur-nord-icon.png' alt='Secteur Est' width={25} height={25} />
            </p>

            <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => secteurSelectionFn(event)} className='group search-secteur-item flex justify-between items-center font-normal hover:font-semibold'>
                Est <Image className='group-hover:scale-125 transition' src='/icon/secteur-est-icon.png' alt='Secteur Est' width={25} height={25} /> 
            </p>

            <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => secteurSelectionFn(event)} className='group search-secteur-item flex justify-between items-center font-normal hover:font-semibold'>
                Sud <Image className='group-hover:scale-125 transition' src='/icon/secteur-sud-icon.png' alt='Secteur Est' width={25} height={25} />
            </p>

            <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => secteurSelectionFn(event)} className='group search-secteur-item flex justify-between items-center font-normal hover:font-semibold'>
                Ouest <Image className='group-hover:scale-125 transition' src='/icon/secteur-ouest-icon.png' alt='Secteur Est' width={25} height={25} />
            </p>

        </div>
    )
}

export default SearchSecteur