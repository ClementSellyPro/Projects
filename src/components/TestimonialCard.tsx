import Image from 'next/image';
import React from 'react';

interface Props {
    key: number,
    client: string,
    secteur: string,
    avis: string,
    artisan: string,
    domaine_artisan: string,
    logo: string
}

const TestimonialCard = ({client, secteur, avis, artisan, domaine_artisan, logo}: Props) => {

    let avisClient = avis;

    if(avis.length > 150){
        avisClient = avis.slice(0, 150) + "...";
    }
  
    return (
    <div className='TestimonialCard border w-80 rounded-2xl bg-white hover:bg-blue-50'>
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
        <div className='testimonial-artisan flex items-center px-5 py-3 rounded-bl-2xl rounded-br-2xl bg-gradient-to-t from-white to-slate-200'>
            {/* logo */}
            {
                logo ? <Image className='rounded-full' src={logo} alt="Logo" width={60} height={60} /> 
                : 
                <div className='w-20 h-20 flex items-center justify-center rounded-full bg-slate-500'>logo</div>
            }
            <div className='info ml-3'>
                <p className='md:text-lg md:font-normal text-sm font-semibold'>{artisan}</p>
                <p className='text-xs text-slate-500'>{domaine_artisan}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard