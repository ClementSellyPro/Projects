"use client"

import React, { useContext } from 'react'
import NewArtisanCard from './NewArtisanCard'
import DataContext from '@/context/DataContext'
import Rejoins from './Rejoins';

function NewArtisans() {

  const {data} = useContext(DataContext);

  const dataToDisplay = data.slice(0, 10);

  return (
    // pb-20 when adding the Rejoins.tsx part
    <div className='bg-gradient-to-r from-subtleKalipro to-subtleKaliproTwo md:pt-36 pt-16 md:px-20 px-5 pb-1'> 
      <h1 className='md:text-5xl text-3xl'>Trouver des artisans de <span className='font-semibold'>KALITÉ</span></h1>

      <div className='flex items-center gap-4 overflow-x-auto mt-8 h-fit bg-slate-50 p-4 border rounded-2xl'>
        {dataToDisplay.map((artisan) => {
          return (
          <NewArtisanCard 
            key={artisan._id} 
            _id={artisan._id}
            name={artisan.name}
            secteur={artisan.secteur}
            domaine_artisan={artisan.domaine_artisan}
            logo={artisan.logo}
            competences={artisan.competences}
            note={artisan.note} />
          )
        })}   
      </div>
    </div>
  )
}

export default NewArtisans