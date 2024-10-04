"use client"

import DataContext from '@/context/DataContext';
import React, { FormEvent, useContext, useState } from 'react'

const ArtisanMail = ({params}: any) => {

  const id = Number(params.id);
  const { data } = useContext(DataContext);
  const selectedArtisan = data.filter(artisan => artisan._id === id);

  // mail de l'artisan
  const mailArtisan = selectedArtisan[0].mail;

  const [isTermAccepted, SetIsTermAccepted] = useState(false);

  function handleSubmit(e: FormEvent){
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const prenom = formData.get('prenom');
    const nom = formData.get('nom');
    const commune = formData.get('commune');
    const mail = formData.get('mail');
    const phone = formData.get('phone');
    const message = formData.get('message');

    const newMessage = {
      "idArtisan": selectedArtisan[0]._id,
      "prenom": prenom,
      "nom": nom,
      "commune": commune,
      "mail": mail,
      "phone": phone,
      "message": message
    }

    fetch("http://localhost:3000/api/contactArtisan", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newMessage)
    })
    .catch(error => console.log(error));
  }

  return (
    <div className='md:px-20 px-5 py-8 bg-slate-50'>

      <div className='flex justify-between pb-5 border-b'>
        <h1 className='text-4xl font-base'>Envoyer un message à : <strong className='text-blueKalipro'> {selectedArtisan[0].name}</strong></h1>
      </div>


      <form onSubmit={(e: FormEvent) => handleSubmit(e)} className='flex flex-col md:gap-10 gap-8 md:w-7/12 mt-5 w-full'>

        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-xl'>Prénom</label>
          <input className='border py-3 pl-4 rounded-lg' name='prenom' type='text' placeholder='Julien' />
        </div>
        
        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-xl'>Nom</label>
          <input className='border py-3 pl-4 rounded-lg' name='nom' type='text' placeholder='Payet' />
        </div>
        
        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-xl'>Commune</label>
          <input className='border py-3 pl-4 rounded-lg' name='commune' type='text' placeholder='Saint Denis' />
        </div>
        
        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-xl'>Email</label>
          <input className='border py-3 pl-4 rounded-lg' name='mail' type='text' placeholder='julienpayet@mail.com' />
        </div>
        
        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-xl'>Telephone</label>
          <input className='border py-3 pl-4 rounded-lg' name='phone' type='text' placeholder='0692 12 34 56' />
        </div>
        
        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-xl'>Votre message</label>
          <textarea className='px-4 py-2 rounded-lg border resize-none' name='message' placeholder='Bonjour, je recherches un artisan afin de réaliser ...' />
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