"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

type Props = {
    disponibilite: boolean,
}

const ResultCard = ({disponibilite}: Props) => {
    
  const router = useRouter();

  return (
    <div onClick={() => router.push('/artisan')} className='ResultCard bg-white cursor-pointer border rounded-lg lg:w-wResultCardLg  w-full p-4 shadow-md hover:shadow-xl'>
        <div className='flex'>
            <div className='w-24 h-24 flex items-center justify-center rounded-full bg-slate-500'>logo</div>

            <div className='info-section ml-5'>
                <p className='text-xl font-semibold'>Elektrica</p>
                <p className='text-xs text-slate-500'>Electricien</p>
                <p className='mt-6 text-base'>Zone intervention: Est, Nord, Ouest</p>
            </div>
        </div>

        <div className='flex justify-between mt-4'>
            <div className={`${disponibilite? 'text-lime-500' : 'text-orange-400'} text-xs flex items-center`}>
                <div className={`h-3 w-3 rounded-full mr-2 ${disponibilite? 'bg-lime-500' : 'bg-orange-400'}`}></div>
                {disponibilite? `Disponible rapidement` : `Disponible dans 2 mois`}
            </div>

            <button className='py-1.5 md:px-8 px-4 font-semibold bg-kalipro hover:opacity-75 text-white rounded-md'> Contacter</button>
        </div>
    </div>
  )
}

export default ResultCard