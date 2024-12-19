import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const NoArtisans = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center text-3xl text-blueKalipro border rounded-xl bg-white h-96 p-5 w-full'>
        <p>Nous n&apos;avons pas encore de professionel pour cette catégorie dans ce secteur.</p>
        <p className='mt-10 text-2xl'>Décrivez nous votre projet, cliquer ci-dessous</p>
        <Link className='mt-16 px-8 py-2 md:text-base text-xs bg-white text-kalipro font-semibold border-2 border-kalipro rounded-full hover:bg-kalipro hover:text-white' href={'/contact'}>Contact</Link>
    </div>
  )
}

export default NoArtisans