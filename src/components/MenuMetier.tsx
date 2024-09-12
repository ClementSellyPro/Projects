import React from 'react'

type Props = {
    hidden: boolean
}

const MenuMetier = ({hidden} : Props) => {
  return (
    <div className={hidden ? 'nav-links-metier hidden': 'nav-links-metier'}>

        <div className='nav-links-metier-group'>
          <p className='nav-links-metier-item font-normal hover:font-semibold'>Aménagement ext.</p> 
          <p className='nav-links-metier-item font-normal hover:font-semibold'>Architecte</p> 
          <p className='nav-links-metier-item font-normal hover:font-semibold'>Carreleur</p> 
          <p className='nav-links-metier-item font-normal hover:font-semibold'>Charpentier</p> 
          <p className='nav-links-metier-item font-normal hover:font-semibold'>Climatisation</p> 
          <p className='nav-links-metier-item font-normal hover:font-semibold'>Cuisiniste</p> 
        </div>
        
        <div className='nav-links-metier-group'>
          <p className='nav-links-metier-item font-normal hover:font-semibold'>Electricien</p> 
          <p className='nav-links-metier-item font-normal hover:font-semibold'>Maçonnerie</p> 
          <p className='nav-links-metier-item font-normal hover:font-semibold'>Maison individuelle</p> 
          <p className='nav-links-metier-item font-normal hover:font-semibold'>Maitre d&apos;oeuvre</p> 
          <p className='nav-links-metier-item font-normal hover:font-semibold'>Menuisier</p> 
          <p className='nav-links-metier-item font-normal hover:font-semibold'>Peintre</p> 
        </div>
        
        <div className='nav-links-metier-group'>
          <p className='nav-links-metier-item font-normal hover:font-semibold'>Plaquiste</p> 
          <p className='nav-links-metier-item font-normal hover:font-semibold'>Plombier</p> 
          <p className='nav-links-metier-item font-normal hover:font-semibold'>Portail/automatisme</p> 
          <p className='nav-links-metier-item font-normal hover:font-semibold'>Rénovation</p> 
          <p className='nav-links-metier-item font-normal hover:font-semibold'>Terrassier</p> 
        </div>
    </div>
  )
}

export default MenuMetier