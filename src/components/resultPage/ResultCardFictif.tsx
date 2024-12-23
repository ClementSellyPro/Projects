"use client"

import Image from 'next/image';
import React from 'react';
import { Artisan } from '@/type/ArtisanType';
import { useRouter } from 'next/router';
import Link from 'next/link';


function ResultCardFictif() {

    const secteur = ["Nord", "Est", "Sud", "Nord"];


    return (
        <Link className='relative ResultCard bg-white cursor-pointer border rounded-lg lg:w-wResultCardLg w-full h-44 p-3 shadow-md hover:shadow-xl' href={`/artisan/525252`}>
        <div>
            <div className='flex items-center'>
                {/* logo */}
                {
                    <Image className='flex items-center justify-center rounded-full border' src={'/logo_example/logo_5.jpg'} alt="Logo" width={80} height={80} /> 
                }
                

                <div className='info-section ml-4'>
                    <p className='text-xl font-semibold'>Architectura <span className='font-medium text-sm'>(Entreprise fictive pour exemple)</span></p>
                    <p className='text-xs text-slate-500'>Architecture</p>
                    <p className='mt-6 text-sm'>Zone intervention: {secteur.map(secteur => secteur + ', ')}</p>
                </div>
            </div>

            <button className='absolute right-3 bottom-3 py-1.5 md:px-8 px-4 font-semibold bg-kalipro hover:opacity-75 text-white rounded-md'> Contacter</button>
        </div>
        </Link>
    )
}

export default ResultCardFictif