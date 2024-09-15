"use client"
import React from 'react'
import Image from 'next/image'
import { useFilterContext } from '@/context/FilterContext';
import Link from 'next/link';

type Props = {
    hidden: boolean
}


const MenuSecteur = ({hidden} : Props) => {
    
    const { setFilterSecteur } = useFilterContext();

    function secteurSelection(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) {
        const target = event.target as HTMLElement;
        const value = target.innerText.trim();

        setFilterSecteur(value);
        console.log(value);
    }

    return (
        <div className={hidden ? 'nav-links-secteur hidden' : 'nav-links-secteur'}>

            <Link href='/result'>
            <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => secteurSelection(event)} className='nav-links-secteur-item group flex justify-between items-center font-normal hover:font-semibold'>
                Nord <Image className='group-hover:scale-125 transition' src='/icon/secteur-nord-icon.png' alt='Secteur Est' width={25} height={25} />
            </p>
            </Link>

            <Link href='/result'>
            <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => secteurSelection(event)} className='nav-links-secteur-item group flex justify-between items-center font-normal hover:font-semibold'>
                Est <Image className='group-hover:scale-125 transition' src='/icon/secteur-est-icon.png' alt='Secteur Est' width={25} height={25} /> 
            </p>
            </Link>

            <Link href='/result'>
            <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => secteurSelection(event)} className='nav-links-secteur-item group flex justify-between items-center font-normal hover:font-semibold'>
                Sud <Image className='group-hover:scale-125 transition' src='/icon/secteur-sud-icon.png' alt='Secteur Est' width={25} height={25} />
            </p>
            </Link>

            <Link href='/result'>
            <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => secteurSelection(event)} className='nav-links-secteur-item group flex justify-between items-center font-normal hover:font-semibold'>
                Ouest <Image className='group-hover:scale-125 transition' src='/icon/secteur-ouest-icon.png' alt='Secteur Est' width={25} height={25} />
            </p>
            </Link>

        </div>
    )
}

export default MenuSecteur