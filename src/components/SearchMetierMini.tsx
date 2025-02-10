"use client"

import Image from 'next/image';
import React from 'react';
import { metierList, Metier } from '@/data/metierList';

type Props = {
    setIsMetierActive: React.Dispatch<React.SetStateAction<boolean>>,
    setMetierSecteur: React.Dispatch<React.SetStateAction<string>>,
    setFilterMetierDisplay: React.Dispatch<React.SetStateAction<string>>
}

function SearchMetierMini({setIsMetierActive, setMetierSecteur, setFilterMetierDisplay} : Props) {

    const fullMetierList: Metier[] = metierList.map(item => item);
  
    function metierSelection(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>){
        const target = event.target as HTMLElement;
        const value = target.innerText;
  
        setMetierSecteur(value);
        setFilterMetierDisplay(value);
        setIsMetierActive(false);
      }
  
      function metierSelectionDessin(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>){
        const value = "Dessin";
        
        setMetierSecteur(value);
        setFilterMetierDisplay(value);
        setIsMetierActive(false);
      }

      const renderMetierLink = (metier: Metier) => (
          <p key={metier.id} onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group search-links-metier-item py-1 flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
            {metier.nameMetier}
            <Image className='group-hover:scale-125 transition' src={metier.iconMetier} alt={metier.nameMetier} height={metier.iconDimension} width={metier.iconDimension} />
          </p> 
        );
      
  
    return (
      <div className={'search-metier rounded-xl w-64 h-48 overflow-y-scroll'}>
          
          { fullMetierList.map(renderMetierLink) }
  
          
          <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group search-links-metier-item py-1 flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
          Autre projet
          <Image className='group-hover:scale-125 transition' src='/icon_metier/autre.png' alt="Autre projet" height={15} width={15} />
          </p> 
      </div>
    )
}

export default SearchMetierMini