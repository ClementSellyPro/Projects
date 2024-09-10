import React, { MouseEventHandler, useState } from 'react'
import Image from 'next/image'

type Props = {
    isActive: boolean,
    setSecteurSelection: React.Dispatch<React.SetStateAction<string>>
}

const SearchSecteur = ({isActive, setSecteurSelection} : Props) => {

    function secteurSelectionFn(e: MouseEvent){
        const target = e.target as HTMLElement;
        const targetText = target.innerText;
        setSecteurSelection(targetText);
    }

  return (
    <div className={isActive ? 'search-secteur' : 'search-secteur hidden'}>

        <p onClick={() => secteurSelectionFn} className='search-secteur-item flex justify-between items-center font-normal hover:font-semibold'>
            Nord <Image src='/icon/secteur-nord-icon.png' alt='Secteur Est' width={25} height={25} />
        </p>

        <p onClick={() => secteurSelectionFn} className='search-secteur-item flex justify-between items-center font-normal hover:font-semibold'>
            Est <Image src='/icon/secteur-est-icon.png' alt='Secteur Est' width={25} height={25} /> 
        </p>

        <p onClick={() => secteurSelectionFn} className='search-secteur-item flex justify-between items-center font-normal hover:font-semibold'>
            Sud <Image src='/icon/secteur-sud-icon.png' alt='Secteur Est' width={25} height={25} />
        </p>

        <p onClick={() => secteurSelectionFn} className='search-secteur-item flex justify-between items-center font-normal hover:font-semibold'>
            Ouest <Image src='/icon/secteur-ouest-icon.png' alt='Secteur Est' width={25} height={25} />
        </p>

    </div>
  )
}

export default SearchSecteur