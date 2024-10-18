"use client"

import React, { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { Artisan } from '@/type/ArtisanType'
import FilterContext from '@/context/FilterContext'


const ResultCard = ({_id, name, domaine_artisan, phone, mail, location, secteur, intervention_img, disponibilite, temps_disponibilite, competences, presentation, qualifications_assurances, photo, avis}: Artisan) => {

    const {selectedArtisan, setSelectedArtisan} = useContext(FilterContext);
    const router = useRouter();

    function handleClick(){
        setSelectedArtisan({_id, name, domaine_artisan, phone, mail, location, secteur, intervention_img, disponibilite, temps_disponibilite, competences, presentation, qualifications_assurances, photo, avis});
        router.push(`/artisan/${_id}`);
    }

    return (
        <div onClick={handleClick} className='relative ResultCard bg-white cursor-pointer border rounded-lg lg:w-wResultCardLg w-full h-44 p-4 shadow-md hover:shadow-xl'>
            <div className='flex'>
                <div className='w-24 h-24 flex items-center justify-center rounded-full bg-slate-500'>logo</div>

                <div className='info-section ml-5'>
                    <p className='text-xl font-semibold'>{name}</p>
                    <p className='text-xs text-slate-500'>{domaine_artisan}</p>
                    <p className='mt-6 text-base'>Zone intervention: {secteur.map(secteur => secteur + ', ')}</p>
                </div>
            </div>

            {/* <div className='flex justify-between mt-4'>
                <div className={`${disponibilite? 'text-lime-500' : 'text-orange-400'} text-xs flex items-center`}>
                    <div className={`h-3 w-3 rounded-full mr-2 ${disponibilite? 'bg-lime-500' : 'bg-orange-400'}`}></div>
                    {disponibilite? `Disponible rapidement` : `Disponible dans ${temps_disponibilite} mois`}
                </div>

            </div> */}
            <button className='absolute right-3 bottom-3 py-1.5 md:px-8 px-4 font-semibold bg-kalipro hover:opacity-75 text-white rounded-md'> Contacter</button>
        </div>
    )
}

export default ResultCard