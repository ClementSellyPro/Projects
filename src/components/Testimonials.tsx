import React from 'react';
import { promises as fs } from 'fs';
import TestimonialCard from './TestimonialCard';

type dataType = {
    _id: number,
    client: string,
    secteur: string,
    avis: string,
    artisan: string,
    secteur_artisan: string
}

export default async function Testimonials(){
    const file = await fs.readFile(process.cwd() + '/src/app/testimonials.json', 'utf8');
    const data = JSON.parse(file);

    return(
        <div className='Testimonials md:p-20 p-5 bg-gradient-to-br from-subtleKalipro to-white'>
            <h1 className='Testimonials-title mt-10 md:text-5xl text-2xl font'>Ils sont passés par KALIPRO</h1>

            <div className='testimonial-part flex justify-around flex-wrap md:gap-20 gap-10 md:mt-20 mt-10 w-full'>
                {data.map((testimonial: dataType) => {
                    return <TestimonialCard 
                                key={testimonial._id} 
                                client={testimonial.client}
                                secteur={testimonial.secteur}
                                avis={testimonial.avis}
                                artisan={testimonial.artisan}
                                secteur_artisan={testimonial.secteur_artisan} />
                })}
            </div>
        </div>
    )
}
