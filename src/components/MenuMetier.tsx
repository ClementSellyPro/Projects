"use client"

import { useFilterContext } from '@/context/FilterContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { metierList, Metier } from '@/data/metierList'

type Props = {
    hidden: boolean
}

const MenuMetier = ({hidden} : Props) => {

  const { setFilterSecteur, SetFilterMetier } = useFilterContext();

  function metierSelection(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>){
    const target = event.target as HTMLElement;
    const value = target.innerText.trim();
    SetFilterMetier(value);
    setFilterSecteur('');
  }

  function metierSelectionDessin(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>){
    const value = "Dessin";

    SetFilterMetier(value);
    setFilterSecteur('');
  }

  const fullMetierList = (): Metier[] => metierList.map(item => item);
  const getGroupUn: Metier[] = fullMetierList().slice(0, 7);
  const getGroupDeux: Metier[] = fullMetierList().slice(7,14);
  const getGroupTrois: Metier[] = fullMetierList().slice(14, fullMetierList().length);

  const renderMetierLink = (metier: Metier) => (
    <Link key={metier.id} href='/result'>
      <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
        {metier.nameMetier}
        <Image className='group-hover:scale-125 transition' src={metier.iconMetier} alt={metier.nameMetier} height={metier.iconDimension} width={metier.iconDimension} />
      </p> 
    </Link>
  );
  

  return (
    <div className={hidden ? 'nav-links-metier hidden': 'nav-links-metier overflow-x-hidden'}>
      {/* group 1 */}
      <div className='nav-links-metier-group'>
        { getGroupUn.map(renderMetierLink) }
      </div>
      
      {/* group 2 */}
      <div className='nav-links-metier-group'>
        { getGroupDeux.map(renderMetierLink)}
      </div>
      
    {/* group 3 */}
    <div className='nav-links-metier-group'> 
      { getGroupTrois.map(renderMetierLink) }    


      <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
          Autre projet
          <Image className='group-hover:scale-125 transition' src='/icon_metier/autre.png' alt="Autre projet" height={20} width={20} />
        </p> 
      </Link> 
    </div>
  </div>
  )
}

export default MenuMetier