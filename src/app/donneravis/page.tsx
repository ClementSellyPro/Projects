"use client"

import React, { useState } from 'react'

const Donneravis = () => {

    const [isTermAccepted, setIsTermAccepted] = useState(false);

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const newAvis = {
            prenom: formData.get("prenom"),
            nom: formData.get("nom"),
            commune: formData.get("commune"),
            mail: formData.get("email"),
            phone: formData.get("phone"),
            avis: formData.get("avis")
        }

        console.log(formData);
        fetch('http://localhost:3000/api/avis', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newAvis)
        })
    }

    return (
        <div className='md:pl-20 lg:pr-20px pr-5px px-5 py-8  bg-slate-50 relative'>
            <div className='flex justify-between items-center py-8 mb-6 border-b bg-slate-50'>
                <h1 className='md:text-4xl text-2xl font-semibold'>Donner mon avis</h1>
            </div>


            <form onSubmit={handleSubmit} className='flex flex-col md:gap-10 gap-8 md:w-7/12 w-full'>

                <div className='flex flex-col gap-1'>
                <label className='font-semibold text-xl'>Prénom</label>
                <input className='border py-3 pl-4 rounded-lg' name='prenom' type='text' placeholder='Julien' />
                </div>

                <div className='flex flex-col gap-1'>
                <label className='font-semibold text-xl'>Nom</label>
                <input className='border py-3 pl-4 rounded-lg' name="nom" type='text' placeholder='Payet' />
                </div>

                <div className='flex flex-col gap-1'>
                <label className='font-semibold text-xl'>Commune</label>
                <input className='border py-3 pl-4 rounded-lg' name="commune" type='text' placeholder='Saint Denis' />
                </div>

                <div className='flex flex-col gap-1'>
                <label className='font-semibold text-xl'>Email</label>
                <input className='border py-3 pl-4 rounded-lg' name="email" type='text' placeholder='julienpayet@mail.com' />
                </div>

                <div className='flex flex-col gap-1'>
                <label className='font-semibold text-xl'>Téléphone</label>
                <input className='border py-3 pl-4 rounded-lg' name="phone" type='text' placeholder='0692 12 34 56' />
                </div>

                <div className='flex flex-col gap-1'>
                <label className='font-semibold text-xl'>Votre avis <span className='font-normal text-base'>(n&apos;oublier pas de mentionner l&apos;artisan concerné)</span></label>
                <textarea className='px-4 py-2 rounded-lg border resize-none' name="avis" placeholder='' />
                </div>
                
                {/* file selection */}
                <div className='flex flex-col gap-1'>
                <label htmlFor="fileSelection" className='font-semibold text-xl'>Selectionner ma facture:</label>
                <input className='px-4 py-2 rounded-lg border resize-none bg-white' type="file" id="fileSelection" name="fileSelection" accept="image/png, image/jpeg, application/pdf" />
                </div>

                <div className='flex gap-1'>
                <input type='checkbox' onChange={(e) => setIsTermAccepted(e.target.checked)} />
                <p className='ml-2'>J&apos;accepte les <a className='underline cursor-pointer' href='/Condition_general.pdf' target="_blank" rel='noopener noreferrer'>conditions générale d&apos;utilisation</a></p>
                </div>

                <button disabled={!isTermAccepted} className='w-fit py-3 px-10 font-semibold rounded-full bg-blueKalipro hover:opacity-80 text-white' type='submit'>Envoyer</button>

            </form>
        </div>
    )
}

export default Donneravis