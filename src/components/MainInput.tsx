import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import SearchSecteur from './SearchSecteur'

const MainInput = () => {

    const [isSecteurActive, setIsSecteurActive] = useState(false);
    const [secteurSelection, setSecteurSelection] = useState('');
    
    function displaySecteur(){
        setIsSecteurActive(!isSecteurActive);
    }

  return (
    <div className='hero-input-section md:flex items-center bg-white p-1 w-fit lg:h-14 md:h-12 h-10 rounded-full hidden'>
                <input className='rounded-tl-full rounded-bl-full xl:w-80 lg:w-60 w-48 text-sm pl-4 outline-none' type='text' placeholder='Que recherchez-vous?' />
                <div className='relative'>
                    <input onClick={displaySecteur} className='seach-input pl-4 xl:w-80 lg:w-64 w-40 text-sm h-full outline-none border-l-2' type="text" placeholder='Dans quel secteur?' defaultValue={secteurSelection}  />

                    {/* secteur menu display */}
                    <div className='fixed lg:top-96 md:top-80'>
                        <SearchSecteur setIsSecteurActive={setIsSecteurActive} setSecteurSelection={setSecteurSelection} isActive={isSecteurActive} />
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