import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Rejoins() {
  return (
    <div className='bg-gradient-to-r from-subtleKalipro to-subtleKaliproTwo'>
      
      <div className='flex flex-col md:gap-4 gap-8 md:flex-row items-center justify-around md:pt-36 pt-16 pb-16 md:mx-20 mx-5 border rounded-xl bg-slate-50 '>
      {/* image  */}
      <Image src={'/rejoins.png'} alt='Rejoindre Kalipro' width={500} height={500}  />

      {/* message */}
      <div className='flex flex-col items-end md:w-5/12  px-6 border rounded-lg py-14 bg-subtleKaliproTwo mx-4'>
        <p className='lg:text-4xl md:text-3xl text-2xl mb-10 md:leading-relaxed leading-snug'>Vous êtes artisan, et vous souhaitez rejoindre KALIPRO, contactez nous dès maintenant.</p>

        <Link className='w-fit px-5 py-2 md:text-lg text-md bg-white text-kalipro font-semibold border-2 border-kalipro rounded-full hover:bg-kalipro hover:text-white' href={'/contact'}><button >Nous Contacter</button></Link>
      </div>
      </div>
        
    </div>
  )
}

export default Rejoins