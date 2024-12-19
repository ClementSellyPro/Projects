import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  _id: number,
  name: string,
  domaine_artisan: string,
  secteur: string[],
  logo: string,
  competences: string[],
  note: string
}

function NewArtisanCard({_id, name, domaine_artisan, secteur, logo, competences, note}: Props) {
  return (
    <div className='flex-shrink-0 md:w-72 w-52 bg-white rounded-lg border group hover:shadow-md'>

        {/* section artisan */}
        <div className='testimonial-artisan flex'>
            {/* logo */}
            <Link className='w-full overflow-hidden rounded-tr-md rounded-tl-md' href={`/artisan/${_id}`}>
            {
                logo ? <Image className='w-full rounded-tr-md rounded-tl-md transition-transform duration-300 group-hover:scale-110' src={logo} alt="Logo" width={60} height={60} />
                : 
                <div className='w-full rounded-md flex items-center justify-center bg-slate-500'>logo</div>
            }
            </Link>
        </div>

        {/* section information */}
        <div className='info p-3 md:h-48 h-52 relative'>
            <Link href={`/artisan/${_id}`}><p className='md:text-lg text-md font-semibold'>{name}</p>

            {/* section secteur */}
            <div className='flex gap-2'>
              <Image src={'/icon/location.png'} alt='secteur' width={15} height={15} />

              {secteur.map((secteur, index) => {
                return (
                  <p key={index} className='text-xs text-slate-500'>{secteur}</p>
                )
              })}
            </div>

            {/* note */}
            <div className='flex items-center gap-2 mt-1'>
              <Image src={'/icon/etoile.png'} alt='etoile' width={15} height={15} />
              <p className='text-sm'>{note}</p>
            </div>
            
            {/* description */}
            <p className='mt-3'>{competences[0]}</p>

            <p className='absolute bottom-4 text-xs font-semibold text-blueKalipro mt-4 border border-blueKalipro rounded-full w-fit px-4 py-1'>{domaine_artisan}</p></Link>
        </div>
    </div>
  )
}

export default NewArtisanCard