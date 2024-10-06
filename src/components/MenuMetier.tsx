"use client"

import { useFilterContext } from '@/context/FilterContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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

  return (
    <div className={hidden ? 'nav-links-metier hidden': 'nav-links-metier'}>
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
          Architecte
          <Image className='group-hover:scale-125 transition' src='/icon_metier/architecte.png' alt="architecte" height={20} width={20} />
        </p>
        </Link> 
        <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between  font-normal hover:font-semibold'>
          Carreleur
          <Image className='group-hover:scale-125 transition' src='/icon_metier/carreleur.png' alt="carreleur" height={20} width={20} />
        </p>
        </Link> 
        <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between  font-normal hover:font-semibold'>
          Charpentier
          <Image className='group-hover:scale-125 transition' src='/icon_metier/charpentier.png' alt="charpentier" height={20} width={20} />
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
          Cuisiniste
          <Image className='group-hover:scale-125 transition' src='/icon_metier/cuisiniste.png' alt="cuisiniste" height={20} width={20} />
        </p>
        </Link> 
      </div>
      
      {/* group 2 */}
      <div className='nav-links-metier-group'>
      <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
          Electricien
          <Image className='group-hover:scale-125 transition' src='/icon_metier/electricien.png' alt="electricien" height={25} width={25} />
        </p> 
        </Link> 
        <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
          Maçonnerie
          <Image className='group-hover:scale-125 transition' src='/icon_metier/macon.svg' alt="macon" height={20} width={20} />
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
          Menuiserie
          <Image className='group-hover:scale-125 transition' src='/icon_metier/menuisier.png' alt="menuisier" height={20} width={20} />
        </p> 
        </Link> 
        <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
          Peintre
          <Image className='group-hover:scale-125 transition' src='/icon_metier/peintre.png' alt="peintre" height={20} width={20} />
        </p> 
        </Link> 
      </div>
      
      {/* group 3 */}
      <div className='nav-links-metier-group'>
        <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
          Plaquiste
          <Image className='group-hover:scale-125 transition' src='/icon_metier/plaquiste.png' alt="plaquiste" height={20} width={20} />
        </p> 
        </Link> 
        <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
          Plombier
          <Image className='group-hover:scale-125 transition' src='/icon_metier/plombier.png' alt="plombier" height={25} width={25} />
        </p> 
        </Link> 
        <Link href='/result'>
        <p onClick={(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {metierSelection(event)}} className='group nav-links-metier-item flex items-center justify-between font-normal hover:font-semibold'>
          Portail/automatisme
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
          Terrassier
          <Image className='group-hover:scale-125 transition' src='/icon_metier/terrassier.png' alt="terrassier" height={20} width={20} />
        </p> 
        </Link> 
      </div>
    </div>
  )
}

export default MenuMetier