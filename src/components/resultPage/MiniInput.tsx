import React from 'react'

const MiniInput = () => {
  return (
    <div className='MiniInput flex items-center bg-white border h-10 px-1 w-fit rounded-full m-auto'>
        <input className='pl-3 md:w-64 w-40 md:text-base text-sm outline-none rounded-l-full' type='text' placeholder='Que rechezchez-vous?' />
        <input className='pl-3 md:w-64 w-36 md:text-base text-sm outline-none border-l' type='text' placeholder='Dans quel secteur?' />
        <button className='bg-blueKalipro hover:opacity-75 text-white py-1 px-5 rounded-full' type='button'>Rechercher</button>
    </div>
  )
}

export default MiniInput