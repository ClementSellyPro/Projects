"use client"

import DataContext from '@/context/DataContext';
import React, { useContext, useState } from 'react'

const ArtisanMail = ({params}: any) => {

    const id = Number(params.id);
    const { data } = useContext(DataContext);
    const selectedArtisan = data.filter(artisan => artisan._id === id);

    const [isTermAccepted, SetIsTermAccepted] = useState(false);

  return (
    <div className='md:px-20 px-5 py-8 bg-slate-50'>

      <div className='flex justify-between pb-5 border-b'>
        <h1 className='text-4xl font-base'>Envoyer un message à : <strong className='text-blueKalipro'> {selectedArtisan[0].name}</strong></h1>
      </div>


      <form className='flex flex-col md:gap-10 gap-8 md:w-7/12 mt-5 w-full'>

        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-xl'>Prénom</label>
          <input className='border py-3 pl-4 rounded-lg' type='text' placeholder='Julien' />
        </div>
        
        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-xl'>Nom</label>
          <input className='border py-3 pl-4 rounded-lg' type='text' placeholder='Payet' />
        </div>
        
        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-xl'>Commune</label>
          <input className='border py-3 pl-4 rounded-lg' type='text' placeholder='Saint Denis' />
        </div>
        
        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-xl'>Email</label>
          <input className='border py-3 pl-4 rounded-lg' type='text' placeholder='julienpayet@mail.com' />
        </div>
        
        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-xl'>Telephone</label>
          <input className='border py-3 pl-4 rounded-lg' type='text' placeholder='0692 12 34 56' />
        </div>
        
        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-xl'>Votre message</label>
          <textarea className='px-4 py-2 rounded-lg border resize-none' placeholder='Bonjour, je recherches un artisan afin de réaliser ...' />
        </div>

        <div className='flex gap-1'>
          <input onChange={(e) => SetIsTermAccepted(e.target.checked)} type='checkbox' />
          <p className='ml-2'>J&apos;accepte les <a className='underline cursor-pointer' href='/Condition_general.pdf' target="_blank" rel='noopener noreferrer'>conditions générale d&apos;utilisation</a></p>
        </div>

        <button disabled={!isTermAccepted} className='w-fit py-3 px-10 font-semibold rounded-full bg-blueKalipro hover:opacity-80 text-white' type='submit'>Envoyer</button>
      </form>
    </div>
  )
}

export default ArtisanMail