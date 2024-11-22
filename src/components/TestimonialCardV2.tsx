import React from 'react';

interface Props {
    key: number,
    client: string,
    secteur: string,
    avis: string,
    artisan: string,
    domaine_artisan: string
}


function TestimonialCardHomeV2({client, secteur, avis, artisan, domaine_artisan}: Props) {
    let avisClient = avis;
  
    return (
    <div className='TestimonialCard border w-full rounded-md bg-white hover:bg-blue-50'>
        {/* section avis client */}
        <div className='testimonial-client h-44 px-5 py-3'>
            <div className='info'>
                <p className='font-semibold text-sm'>{client}</p>
                <p className='text-xs  text-slate-500'>({secteur})</p>
            </div>
            <p className='mt-3 text-sm leading-relaxed'>
                {`"${avisClient}"`}
            </p>
        </div>

        {/* section artisan */}
        <div className='testimonial-artisan flex px-5 py-3 rounded-bl-2xl rounded-br-2xl bg-gradient-to-t from-white to-slate-200'>
            <div className='info'>
                <p className='md:text-lg md:font-normal text-sm font-semibold'>{artisan}</p>
                <p className='text-xs text-slate-500'>{domaine_artisan}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCardHomeV2