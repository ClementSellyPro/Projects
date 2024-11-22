

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className='bg-slate-50 md:px-20 py-2 px-5'>
        <div className='flex flex-col gap-5 justify-center items-center py-10 border rounded-xl'>
            <Image src={'not-found.png'} alt="Cette page n'existe pas" width={400} height={400} />
            <p className='font-semibold text-3xl'>Vous vous êtes égaré ?</p>

            <Link href={'/'} className='mt-10 py-2 px-5 bg-white text-kalipro font-semibold border-2 border-kalipro rounded-full hover:bg-kalipro hover:text-white'><p>Retour à l&apos;accueil</p></Link>
        </div>
    </div>
  )
}

export default NotFound