import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import SearchSecteur from './SearchSecteur'
import FilterContext from '@/context/FilterContext'
import SearchMetier from './SearchMetier'

const MainInput = () => {

    const { filterSecteur, filterMetier, setFilterSecteur, SetFilterMetier } = useContext(FilterContext);
    // secteur state active menu
    const [isSecteurActive, setIsSecteurActive] = useState(false);

    function displaySecteur(){
        setIsSecteurActive(!isSecteurActive);
    }

    // metier state active menu
    const [isMetierActive, setIsMetierActive] = useState(false);

    function displayMetier(){
        setIsMetierActive(!isMetierActive)
    }

  return (
    <div className='hero-input-section md:flex items-center bg-white p-1 w-fit lg:h-14 md:h-12 h-10 rounded-full hidden'>
                {/* metier menu  */}
                <div className='relative'>
                    <input onClick={displayMetier} className='seach-input pl-4 xl:w-80 lg:w-64 w-40 text-sm h-full outline-none' type="text" placeholder='Dans quel secteur?' defaultValue={filterMetier}  />

                    {/* secteur menu display */}
                    <div className='fixed lg:top-96 md:top-80'>
                        <SearchMetier setIsMetierActive={setIsMetierActive} setMetierSecteur={SetFilterMetier} isActive={isMetierActive} />
                    </div>
                </div>
               

                {/* secteur menu */}
                <div className='relative'>
                    <input onClick={displaySecteur} className='seach-input pl-4 xl:w-80 lg:w-64 w-40 text-sm h-full outline-none border-l-2' type="text" placeholder='Dans quel secteur?' defaultValue={filterSecteur}  />

                    {/* secteur menu display */}
                    <div className='fixed lg:top-96 md:top-80'>
                        <SearchSecteur setIsSecteurActive={setIsSecteurActive} setFilterSecteur={setFilterSecteur} isActive={isSecteurActive} />
                    </div>
                </div>

                {/* search button */}
                <Link href='/result'>
                <button className='group flex items-center bg-blueKalipro hover:opacity-80 
                                text-white text-l lg:text-xl font-semibold lg:py-2.5 py-2 px-7 rounded-full ' 
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