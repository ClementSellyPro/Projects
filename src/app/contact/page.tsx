import React from 'react'

const page = () => {
  return (
    <div className='md:pl-20 lg:pr-20px pr-5px px-5 py-8  bg-slate-50'>
        <div className='flex justify-between relative'>
          <h1 className='text-4xl font-semibold'>Contacter <strong className='text-kalipro'>KALIPRO</strong></h1>

          <div className='flex flex-col justify-center items-center text-center font-semibold p-5 rounded-xl w-64 border sticky top-10 bg-white shadow-xl'>
            N&apos;hesiter a nous contacter directement par telephone
            <button className='mt-5 py-2 px-8 rounded-full border border-kalipro hover:bg-kalipro text-kalipro hover:text-black w-fit'>Nous appeler</button>
          </div>
        </div>


        <form className='flex flex-col md:gap-10 gap-8 md:w-7/12 w-full'>

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
            <textarea className='px-4 py-2 rounded-lg border resize-none' placeholder='Bonjour, ' />
          </div>

          <div className='flex gap-1'>
            <input type='checkbox' />
            <p className='ml-2'>J&apos;accepte les <span className='underline cursor-pointer'>conditions generale d&apos;utilisation</span></p>
          </div>

          <button className='w-fit py-3 px-10 font-semibold rounded-full bg-blueKalipro hover:opacity-80 text-white' type='submit'>Envoyer</button>
        </form>
    </div>
  )
}

export default page