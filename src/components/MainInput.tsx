"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useRef, useState } from 'react'
import SearchSecteur from './SearchSecteur'
import FilterContext from '@/context/FilterContext'
import SearchMetier from './SearchMetier'

const MainInput = () => {

    const { setFilterSecteur, SetFilterMetier } = useContext(FilterContext);

    // secteur state active menu
    const [ isSecteurActive, setIsSecteurActive ] = useState(false);
    const secteurRef = useRef<HTMLDivElement | null>(null);
    // state displaying secteur filter state within the input value
    const [filterSecteurDisplay, setSecteurDisplay] = useState('');
    // functions to display and hide Secteur menu
    const displaySecteur = () => {
        setIsSecteurActive((prev) => !prev);
        setIsMetierActive(false);
    }

    // metier state active menu
    const [isMetierActive, setIsMetierActive] = useState(false);
    const metierRef = useRef<HTMLDivElement | null>(null);
    // state displaying metier filter state within the input value
    const [filterMetierDisplay, setFilterMetierDisplay] = useState('');
    // functions to display and hide Metier menu
    const displayMetier = () => {
        setIsMetierActive((prev) => !prev);
        setIsSecteurActive(false);
    }

    const hideMenu = () => {
        setIsMetierActive(false);
        setIsSecteurActive(false);
    }

    // reset the input values when click on Search button
    function resetFilterDisplay(){
        setFilterMetierDisplay('');
        setSecteurDisplay('');
    }

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
        <div className='hero-input-section md:flex items-center bg-white p-1 w-fit lg:h-14 md:h-12 h-10 rounded-full hidden'>
            {/* metier menu  */}
            <div ref={metierRef} className='relative'>
                <input onClick={displayMetier} className='seach-input pl-4 xl:w-80 lg:w-64 w-48 text-sm h-full outline-none' type="text" placeholder='Que recherchez-vous?' defaultValue={filterMetierDisplay} readOnly />

                {/* secteur menu display */}
                <div className='fixed lg:top-96 md:top-80'>
                    {
                        isMetierActive && (
                        <SearchMetier 
                            setIsMetierActive={setIsMetierActive} 
                            setMetierSecteur={SetFilterMetier} 
                            setFilterMetierDisplay={setFilterMetierDisplay}
                        />
                        )
                    }
                    
                </div>
            </div>
        

            {/* secteur menu */}
            <div ref={secteurRef} className='relative'>
                <input onClick={displaySecteur} className='seach-input pl-4 xl:w-80 lg:w-64 w-40 text-sm h-full outline-none border-l-2' type="text" placeholder='Dans quel secteur?' defaultValue={filterSecteurDisplay}  readOnly/>

                {/* secteur menu display */}
                <div className='fixed lg:top-96 md:top-80'>
                    {
                        isSecteurActive && (
                        <SearchSecteur 
                            setFilterSecteur={setFilterSecteur} 
                            setSecteurDisplay={setSecteurDisplay} 
                            setIsSecteurActive={setIsSecteurActive}
                        />
                        )
                    }
                    
                </div>
            </div>

            {/* search button */}
            <Link onClick={resetFilterDisplay} href='/result'>
            <button className='group flex gap-3 items-center bg-blueKalipro hover:opacity-80 
                            text-white text-l lg:text-xl font-semibold lg:py-2.5 py-2 px-7 rounded-full' 
                    type='button'>
                <Image  src='/icon/search-icon.png' 
                        alt='Arrow'
                        width={20}
                        height={20}
                        />
                Rechercher
            </button>
            </Link>
        </div>
    )
}

export default MainInput