"use client"

import React from 'react';
import Image from 'next/image';

type Props = {
    setFilterSecteur: React.Dispatch<React.SetStateAction<string>>,
    setSecteurDisplay: React.Dispatch<React.SetStateAction<string>>,
    setIsSecteurActive: React.Dispatch<React.SetStateAction<boolean>>,
}

function SearchSecteurMini({ setFilterSecteur, setSecteurDisplay, setIsSecteurActive} : Props) {
  
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

    return (
        <div className={'search-secteur-mini rounded-xl w-60'}>

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

export default SearchSecteurMini