"use client"

import Image from 'next/image';
import React from 'react'

type Props = {
    isActive: boolean,
    setIsMetierActive: React.Dispatch<React.SetStateAction<boolean>>,
    setMetierSecteur: React.Dispatch<React.SetStateAction<string>>
}

const SearchMetier = ({isActive, setIsMetierActive, setMetierSecteur} : Props) => {
    function metierSelection(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>){
        const target = event.target as HTMLElement;
        const value = target.innerText;

        setMetierSecteur(value);
        setIsMetierActive(false);
    }

  return (
    <div className={isActive ? 'search-secteur rounded-xl xl:w-80 lg:w-64 w-40 h-48 overflow-scroll' : 'search-secteur hidden'}>
        
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Aménagement ext.
        <Image className='group-hover:scale-125 transition' src='/icon_metier/amenagement.png' alt="amenagement exterieur" height={20} width={20} />
        </p> 

        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between  font-normal hover:font-semibold cursor-pointer'>
        Architecte
        <Image className='group-hover:scale-125 transition' src='/icon_metier/architecte.png' alt="architecte" height={20} width={20} />
        </p>
        
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between  font-normal hover:font-semibold cursor-pointer'>
        Carreleur
        <Image className='group-hover:scale-125 transition' src='/icon_metier/carreleur.png' alt="carreleur" height={20} width={20} />
        </p>
        
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between  font-normal hover:font-semibold cursor-pointer'>
        Charpentier
        <Image className='group-hover:scale-125 transition' src='/icon_metier/charpentier.png' alt="charpentier" height={20} width={20} />
        </p>
        
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between  font-normal hover:font-semibold cursor-pointer'>
        Climatisation
        <Image className='group-hover:scale-125 transition' src='/icon_metier/clim.svg' alt="climatisation" height={20} width={20} />
        </p>
        
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between  font-normal hover:font-semibold cursor-pointer'>
        Cuisiniste
        <Image className='group-hover:scale-125 transition' src='/icon_metier/cuisiniste.png' alt="cuisiniste" height={20} width={20} />
        </p>
    
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Electricien
        <Image className='group-hover:scale-125 transition' src='/icon_metier/electricien.png' alt="electricien" height={25} width={25} />
        </p> 
        
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Maçonnerie
        <Image className='group-hover:scale-125 transition' src='/icon_metier/macon.svg' alt="macon" height={20} width={20} />
        </p>
        
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Maison individuelle
        <Image className='group-hover:scale-125 transition' src='/icon_metier/maison.png' alt="maison individuelle" height={20} width={20} />
        </p> 
        
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Maitre d&apos;oeuvre
        <Image className='group-hover:scale-125 transition' src='/icon_metier/maitre.png' alt="maitre d'oeuvre" height={20} width={20} />
        </p> 
        
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Menuisier
        <Image className='group-hover:scale-125 transition' src='/icon_metier/menuisier.png' alt="menuisier" height={20} width={20} />
        </p> 

        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Peintre
        <Image className='group-hover:scale-125 transition' src='/icon_metier/peintre.png' alt="peintre" height={20} width={20} />
        </p>
    
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Plaquiste
        <Image className='group-hover:scale-125 transition' src='/icon_metier/plaquiste.png' alt="plaquiste" height={20} width={20} />
        </p> 
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Plombier
        <Image className='group-hover:scale-125 transition' src='/icon_metier/plombier.png' alt="plombier" height={25} width={25} />
        </p> 
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Portail/automatisme
        <Image className='group-hover:scale-125 transition' src='/icon_metier/portail.png' alt="portail" height={20} width={20} />
        </p> 
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Rénovation
        <Image className='group-hover:scale-125 transition' src='/icon_metier/renovation.png' alt="renovation" height={20} width={20} />
        </p> 
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold cursor-pointer'>
        Terrassier
        <Image className='group-hover:scale-125 transition' src='/icon_metier/terrassier.png' alt="terrassier" height={20} width={20} />
        </p> 

    </div>
  )
}

export default SearchMetier