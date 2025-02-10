"use client"

import { useFilterContext } from '@/context/FilterContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { metierList } from '@/data/metierList'

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
  

  return (
    <div className={hidden ? 'nav-links-metier hidden': 'nav-links-metier overflow-x-hidden'}>
      {/* group 1 */}
      <div className='nav-links-metier-group'>
        <Link href='/result'>
          <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
            Aménagement ext.
            <Image className='group-hover:scale-125 transition' src='/icon_metier/amenagement.png' alt="amenagement exterieur" height={20} width={20} />
          </p> 
        </Link>
        <Link href='/result'>
          <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between  font-normal hover:font-semibold'>
            Architecture
            <Image className='group-hover:scale-125 transition' src='/icon_metier/architecte.png' alt="architecte" height={20} width={20} />
          </p>
        </Link> 
        <Link href='/result'>
          <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between  font-normal hover:font-semibold'>
            Carrelage
            <Image className='group-hover:scale-125 transition' src='/icon_metier/carreleur.png' alt="carreleur" height={25} width={25} />
          </p>
        </Link> 
        <Link href='/result'>
          <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between  font-normal hover:font-semibold'>
            Charpente/Couverture
            <Image className='group-hover:scale-125 transition' src='/icon_metier/charpentier.png' alt="charpentier" height={25} width={25} />
          </p>
        </Link> 
        <Link href='/result'>
          <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between  font-normal hover:font-semibold'>
            Climatisation
            <Image className='group-hover:scale-125 transition' src='/icon_metier/clim.svg' alt="climatisation" height={20} width={20} />
          </p>
        </Link> 
        <Link href='/result'>
          <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between  font-normal hover:font-semibold'>
            Cuisine/Dressing
            <Image className='group-hover:scale-125 transition' src='/icon_metier/cuisiniste.png' alt="cuisiniste" height={25} width={25} />
          </p>
        </Link> 
        <Link href='/result'>
          <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
            Décoration intérieur
            <Image className='group-hover:scale-125 transition' src='/icon_metier/decorateur.png' alt="decorateur" height={20} width={20} />
          </p> 
        </Link> 
      </div>
      
      {/* group 2 */}
      <div className='nav-links-metier-group'>
      <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelectionDessin(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
          Dessin <span className='text-xs ml-2'> (permis construire)</span>
          <Image className='group-hover:scale-125 transition' src='/icon_metier/dessinateur.png' alt="dessinateur" height={20} width={20} />
        </p> 
      </Link> 
      <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
          Electricité
          <Image className='group-hover:scale-125 transition' src='/icon_metier/electricien.png' alt="electricien" height={20} width={20} />
        </p> 
      </Link> 
        <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
          Maçonnerie
          <Image className='group-hover:scale-125 transition' src='/icon_metier/macon.svg' alt="macon" height={16} width={16} />
        </p>
      </Link>  
      <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
          Maison individuelle
          <Image className='group-hover:scale-125 transition' src='/icon_metier/maison.png' alt="maison individuelle" height={20} width={20} />
        </p> 
      </Link> 
      <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
          Maitre d&apos;oeuvre
          <Image className='group-hover:scale-125 transition' src='/icon_metier/maitre.png' alt="maitre d'oeuvre" height={20} width={20} />
        </p> 
      </Link>
      <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
          Menuiserie aluminium
          <Image className='group-hover:scale-125 transition' src='/icon_metier/menuisier.png' alt="menuisier" height={20} width={20} />
        </p> 
      </Link>
      <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
          Peinture
          <Image className='group-hover:scale-125 transition' src='/icon_metier/peintre.png' alt="peintre" height={20} width={20} />
        </p> 
      </Link> 
    </div>
      
    {/* group 3 */}
    <div className='nav-links-metier-group'> 
      <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
          Piscine
          <Image className='group-hover:scale-125 transition' src='/icon_metier/pisciniste.png' alt="pisciniste" height={20} width={20} />
        </p> 
      </Link> 
      <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
          Plaquiste
          <Image className='group-hover:scale-125 transition' src='/icon_metier/plaquiste.png' alt="plaquiste" height={20} width={20} />
        </p> 
      </Link> 
      <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
          Plomberie
          <Image className='group-hover:scale-125 transition' src='/icon_metier/plombier.png' alt="plombier" height={25} width={25} />
        </p> 
      </Link> 
      <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
          Portail/Automatisme
          <Image className='group-hover:scale-125 transition' src='/icon_metier/portail.png' alt="portail" height={20} width={20} />
        </p> 
      </Link> 
      <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
          Rénovation
          <Image className='group-hover:scale-125 transition' src='/icon_metier/renovation.png' alt="renovation" height={20} width={20} />
        </p> 
      </Link> 
      <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
          Terrassement
          <Image className='group-hover:scale-125 transition' src='/icon_metier/terrassier.png' alt="terrassier" height={20} width={20} />
        </p> 
      </Link> 


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