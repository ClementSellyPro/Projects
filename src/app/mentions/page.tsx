import React from 'react'

function Mention() {
  return (
    <div className='md:pt-10 pt-10 md:px-20 px-5 pb-20'>
        <h2 className='font-semibold text-xl mb-10'>Mentions légales</h2>

        <p className='mb-4'>Le site est édité par SARL KALIPRO Réunion</p>

        <div className='flex flex-col gap-2'>
          <p><span className='font-semibold'>Immatriculation au registre:</span> 934 451 147</p>
          <p><span className='font-semibold'>Siège social:</span> 98 LOT les manguiers - 97440 Saint André</p>
          <p><span className='font-semibold'>Hébergeur du site:</span> Hostinger. Le siège d&apos;Hostinger est situé à Kaunas, en Lituanie</p>
        </div>
    </div>
  )
}

export default Mention