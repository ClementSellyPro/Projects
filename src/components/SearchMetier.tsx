"use client"

import Image from 'next/image';
import React from 'react'

type Props = {
    isActive: boolean,
    setIsMetierActive: React.Dispatch<React.SetStateAction<boolean>>,
    setMetierSecteur: React.Dispatch<React.SetStateAction<string>>,
    setFilterMetierDisplay: React.Dispatch<React.SetStateAction<string>>
}

const SearchMetier = ({isActive, setIsMetierActive, setMetierSecteur, setFilterMetierDisplay} : Props) => {
    function metierSelection(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>){
      const target = event.target as HTMLElement;
      const value = target.innerText;

      setMetierSecteur(value);
      setFilterMetierDisplay(value);
      setIsMetierActive(false);
    }

  return (
    <div className={isActive ? 'search-metier rounded-xl xl:w-80 lg:w-64 w-40 h-48 overflow-scroll' : 'search-metier hidden'}>
        
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group search-links-metier-item py-1 flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Aménagement ext.
        <Image className='group-hover:scale-125 transition' src='/icon_metier/amenagement.png' alt="amenagement exterieur" height={15} width={15} />
        </p> 

        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group search-links-metier-item py-1 flex items-center justify-between  font-normal hover:font-semibold cursor-pointer'>
        Architecte
        <Image className='group-hover:scale-125 transition' src='/icon_metier/architecte.png' alt="architecte" height={15} width={15} />
        </p>
        
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group search-links-metier-item py-1 flex items-center justify-between  font-normal hover:font-semibold cursor-pointer'>
        Carreleur
        <Image className='group-hover:scale-125 transition' src='/icon_metier/carreleur.png' alt="carreleur" height={15} width={15} />
        </p>
        
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group search-links-metier-item py-1 flex items-center justify-between  font-normal hover:font-semibold cursor-pointer'>
        Charpentier
        <Image className='group-hover:scale-125 transition' src='/icon_metier/charpentier.png' alt="charpentier" height={15} width={15} />
        </p>
        
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group search-links-metier-item py-1 flex items-center justify-between  font-normal hover:font-semibold cursor-pointer'>
        Climatisation
        <Image className='group-hover:scale-125 transition' src='/icon_metier/clim.svg' alt="climatisation" height={15} width={15} />
        </p>
        
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group search-links-metier-item py-1 flex items-center justify-between  font-normal hover:font-semibold cursor-pointer'>
        Cuisiniste
        <Image className='group-hover:scale-125 transition' src='/icon_metier/cuisiniste.png' alt="cuisiniste" height={15} width={15} />
        </p>
    
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group search-links-metier-item py-1 flex items-center justify-between  font-normal hover:font-semibold cursor-pointer'>
        Décorateur intérieur
        <Image className='group-hover:scale-125 transition' src='/icon_metier/decorateur.png' alt="decorateur" height={15} width={15} />
        </p>
        
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group search-links-metier-item py-1 flex items-center justify-between  font-normal hover:font-semibold cursor-pointer'>
        Dessinateur <span className='text-xs ml-2'> (permis construire)</span>
        <Image className='group-hover:scale-125 transition' src='/icon_metier/dessinateur.png' alt="dessinateur" height={15} width={15} />
        </p>

        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group search-links-metier-item py-1 flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Electricien
        <Image className='group-hover:scale-125 transition' src='/icon_metier/electricien.png' alt="electricien" height={20} width={20} />
        </p> 
        
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group search-links-metier-item py-1 flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Maçonnerie
        <Image className='group-hover:scale-125 transition' src='/icon_metier/macon.svg' alt="macon" height={15} width={15} />
        </p>
        
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group search-links-metier-item py-1 flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Maison individuelle
        <Image className='group-hover:scale-125 transition' src='/icon_metier/maison.png' alt="maison individuelle" height={15} width={15} />
        </p> 
        
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group search-links-metier-item py-1 flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Maitre d&apos;oeuvre
        <Image className='group-hover:scale-125 transition' src='/icon_metier/maitre.png' alt="maitre d'oeuvre" height={15} width={15} />
        </p> 
        
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group search-links-metier-item py-1 flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Menuisier
        <Image className='group-hover:scale-125 transition' src='/icon_metier/menuisier.png' alt="menuisier" height={15} width={15} />
        </p> 

        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group search-links-metier-item py-1 flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Peintre
        <Image className='group-hover:scale-125 transition' src='/icon_metier/peintre.png' alt="peintre" height={15} width={15} />
        </p>
    
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group search-links-metier-item py-1 flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Plaquiste
        <Image className='group-hover:scale-125 transition' src='/icon_metier/plaquiste.png' alt="plaquiste" height={15} width={15} />
        </p> 
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group search-links-metier-item py-1 flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Plombier
        <Image className='group-hover:scale-125 transition' src='/icon_metier/plombier.png' alt="plombier" height={20} width={20} />
        </p> 
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group search-links-metier-item py-1 flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Portail/automatisme
        <Image className='group-hover:scale-125 transition' src='/icon_metier/portail.png' alt="portail" height={15} width={15} />
        </p> 
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group search-links-metier-item py-1 flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Rénovation
        <Image className='group-hover:scale-125 transition' src='/icon_metier/renovation.png' alt="renovation" height={15} width={15} />
        </p> 
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group search-links-metier-item py-1 flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Terrassier
        <Image className='group-hover:scale-125 transition' src='/icon_metier/terrassier.png' alt="terrassier" height={15} width={15} />
        </p> 

    </div>
  )
}

export default SearchMetier