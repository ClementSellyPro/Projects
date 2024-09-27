"use client"

import FilterContext from '@/context/FilterContext';
import React, { useContext, useEffect, useState } from 'react'
import SearchSecteur from '../SearchSecteur';
import SearchMetier from '../SearchMetier';

const MiniInput = () => {

  const { filterMetier, filterSecteur , setFilterSecteur, SetFilterMetier } = useContext(FilterContext);

  const [isSecteurActive, setIsSecteurActive] = useState(false);
  const [isMetierActive, setIsMetierActive] = useState(false);

  const [secteurDisplay, setSecteurDisplay] = useState('');
  const [metierDisplay, setMetierDisplay] = useState('');

  function displaySecteur(){
    setIsSecteurActive(!isSecteurActive);
  }

  function metierSecteur(){
    setIsMetierActive(!isMetierActive);
  }

  useEffect(() => {
    setSecteurDisplay(filterSecteur);
    setMetierDisplay(filterMetier);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='MiniInput flex items-center bg-white border h-10 px-1 w-fit rounded-full m-auto'>
      <div>
      <input onClick={metierSecteur} className='relative cursor-pointer pl-3 md:w-64 w-40 md:text-base text-sm outline-none rounded-l-full' type='text' defaultValue={metierDisplay} placeholder='Que rechezchez-vous?' />
      <div className='absolute top-32'>
      <SearchMetier setFilterMetierDisplay={setMetierDisplay} setIsMetierActive={setIsMetierActive} setMetierSecteur={SetFilterMetier} isActive={isMetierActive} />
      </div>
      </div>

      <div>
      <input onClick={displaySecteur} className='cursor-pointer pl-3 md:w-64 w-36 md:text-base text-sm outline-none border-l' type='text' defaultValue={secteurDisplay} placeholder='Dans quel secteur?' />
      <div className='absolute top-32'>
      <SearchSecteur setSecteurDisplay={setSecteurDisplay} setIsSecteurActive={setIsSecteurActive} setFilterSecteur={setFilterSecteur} isActive={isSecteurActive} />
      </div>
      </div>

        <button className='bg-blueKalipro hover:opacity-75 text-white py-1 px-5 rounded-full' type='button'>Rechercher</button>
    </div>
  )
}

export default MiniInput