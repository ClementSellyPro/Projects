"use client"

import FilterContext from '@/context/FilterContext';
import React, { useContext, useEffect, useRef, useState } from 'react'
import SearchMetierMini from '../SearchMetierMini';
import SearchSecteurMini from '../SearchSecteurMini';

const MiniInput = () => {

  const { filterMetier, filterSecteur , setFilterSecteur, SetFilterMetier } = useContext(FilterContext);

  const secteurRef = useRef<HTMLDivElement | null>(null);
  const [isSecteurActive, setIsSecteurActive] = useState(false);
  const [secteurDisplay, setSecteurDisplay] = useState('');

  const metierRef = useRef<HTMLDivElement | null>(null);
  const [isMetierActive, setIsMetierActive] = useState(false);
  const [metierDisplay, setMetierDisplay] = useState('');

  // functions to display and hide Secteur menu
  const displaySecteur = () => {
    setIsSecteurActive((prev) => !prev);
    setIsMetierActive(false);
  }

  // functions to display and hide Metier menu
  const displayMetier = () => {
    setIsMetierActive((prev) => !prev);
    setIsSecteurActive(false);
  }

  const hideMenu = () => {
    setIsMetierActive(false);
    setIsSecteurActive(false);
  }


  useEffect(() => {
    setSecteurDisplay(filterSecteur);
    setMetierDisplay(filterMetier);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if(
            secteurRef.current &&
            !secteurRef.current.contains(event.target as Node) &&
            metierRef.current &&
            !metierRef.current.contains(event.target as Node)
        ){
            hideMenu();
        }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
        document.removeEventListener('click', handleClickOutside);
    }
  }, [])

  return (
    <div className='MiniInput flex items-center bg-white border h-10 px-1 w-fit rounded-full m-auto'>
      <div ref={metierRef}>
      <input onClick={displayMetier} className='relative cursor-pointer pl-3 md:w-64 w-40 md:text-base text-sm outline-none rounded-l-full' type='text' defaultValue={metierDisplay} placeholder='Que rechezchez-vous?' readOnly />
      <div className='absolute top-32'>
        {
          isMetierActive && (
            <SearchMetierMini 
              setFilterMetierDisplay={setMetierDisplay} 
              setIsMetierActive={setIsMetierActive} 
              setMetierSecteur={SetFilterMetier}  />
          )
        }
      
      </div>
      </div>

      <div ref={secteurRef}>
      <input onClick={displaySecteur} className='cursor-pointer pl-3 md:w-64 w-36 md:text-base text-sm outline-none border-l' type='text' defaultValue={secteurDisplay} placeholder='Dans quel secteur?' readOnly />
      <div className='absolute top-32'>
        {
          isSecteurActive && (
            <SearchSecteurMini 
              setSecteurDisplay={setSecteurDisplay} 
              setIsSecteurActive={setIsSecteurActive} 
              setFilterSecteur={setFilterSecteur} />
          )
        }
      
      </div>
      </div>

        <button className='bg-blueKalipro hover:opacity-75 text-white py-1 px-5 rounded-full' type='button'>Rechercher</button>
    </div>
  )
}

export default MiniInput