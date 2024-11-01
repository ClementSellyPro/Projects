"use client"

import TestimonialCard from "@/components/TestimonialCard";
import { Artisan } from "@/type/ArtisanType";
import Image from "next/image";
import Link from "next/link";
import DataContext from '@/context/DataContext';
import { useContext, useEffect, useState } from "react";
import FilterContext from "@/context/FilterContext";
// import { useRouter } from "next/router";

type avisType = {
    _id: number,
    client: string,
    secteur: string,
    avis: string,
    artisan: string,
    secteur_artisan: string
}

interface paramsType {
    params: {
        id: {
            id: string;
        };
    };
}

const ArtisanDetail = ({ params }: paramsType) => {
    const id = params.id.id;

    // get all data and filter according the params id
    const { data } = useContext(DataContext);
    const dataToDisplay = data.filter(data => (data._id.toString() === id));
    
    const competences = dataToDisplay[0]?.competences.slice(1, dataToDisplay[0]?.competences.length);
    const avisClient = dataToDisplay[0]?.avis.map(avis => avis);

    return (
        <div className='bg-slate-50 md:px-20 py-10 px-5 relative'>
            {/* header artisan */}
            <div className='md:flex block justify-between items-center py-6 bg-slate-50 border-b border-t sticky top-0'>
                <div>
                    <h1 className='font-semibold text-blueKalipro xl:text-5xl lg:text-4xl md:text-3xl text-2xl'>{dataToDisplay[0]?.name}</h1>
                    <p className='flex items-center gap-1 text-sm'><Image src='/icon/location.png' alt='location icon' width={20} height={20} /> {dataToDisplay[0]?.location}</p>
                </div>
                
                {/* header artisan contact */}
                <div className='flex items-center gap-5 mt-5'>
                    {/* change for image */}
                    <div className='lg:h-20 md:h-16 h-10 lg:w-20 md:w-16 w-10 bg-slate-200 rounded-full'></div> 
                    <p className='lg:text-base md:text-sm'>Maxime de {dataToDisplay[0]?.name}<br/>
                    <span className='lg:text-xl md:text-lg'>{dataToDisplay[0]?.phone}</span></p>
                    <Link href={`/artisanMail/${dataToDisplay[0]?._id}`}><button className='flex items-center gap-2 border border-kalipro font-semibold py-2 px-5 rounded-full bg-kalipro text-white hover:opacity-80 md:text-base text-sm'><Image src='/icon/mail-icon.png' alt='mail icon' width={20} height={20} />Envoyer un mail</button></Link>
                </div>
            </div>

            <div className='md:flex block justify-between py-14'>
                <div className='flex flex-col gap-5'>
                    {/* Competence */}
                    <div className='hover:bg-subtleKalipro p-7 border rounded-xl'>
                        <h2 className='font-semibold md:text-2xl text-3xl mb-5'>Compétences</h2>
                        <div>
                            <span className='font-semibold'>{dataToDisplay[0]?.competences[0]} </span> <br />
                            {
                                competences?.map((competence, index) => <p key={index}>{competence}</p>)
                            }
                        </div>
                    </div>
                    {/* Presentation */}
                    <div className='hover:bg-subtleKalipro p-7 border rounded-xl'>
                        <h2 className='font-semibold md:text-2xl text-3xl mb-5'>Présentation</h2>
                        <p className='max-w-md'>{dataToDisplay[0]?.presentation}</p>
                    </div>
                    {/* Assurance */}
                    <div className='hover:bg-subtleKalipro p-7 border rounded-xl'>
                        <h2 className='font-semibold md:text-2xl text-3xl mb-5'>Qualifications assurances*</h2>
                        <ul>
                            <li>Certification AAA</li>
                            <li>Assurance RCP et décennale</li>
                        </ul>
                        <p className='mt-2 text-sm'>* A charge pour vous de vérifier ces informations en le demandant directement au professionels. </p>
                    </div>
                </div>
                {/* zone intervention */}
                <div className='hover:bg-subtleKalipro p-7 border rounded-xl md:mt-0 mt-5 md:ml-5 ml-0'>
                    <h2 className='font-semibold md:text-2xl text-3xl mb-5'>Zone d&apos;intervention</h2>
                    <Image src='/map-est-nord.png' alt='Carte' width={400} height={400} />
                </div>
            </div>

            {/* photos */}
            <div className='mt-10 pb-10 border-b'>
                <h2 className='font-semibold text-3xl mb-5'>Photos</h2>

                <div className='flex flex-wrap gap-5'>
                    <div className='w-52 h-72 bg-slate-200'></div>
                    <div className='w-96 h-72 bg-slate-200'></div>
                    <div className='w-52 h-72 bg-slate-200'></div> 
                    <div className='w-96 h-72 bg-slate-200'></div>
                </div>

                <button className='mt-10 border border-kalipro font-semibold py-2 px-5 rounded-full bg-white text-kalipro hover:bg-subtleKalipro'>Voir plus de photos</button>
            </div>
            
            {/* Avis clients */}
            <div className='mt-10'>
                <h2 className='font-semibold text-3xl mb-5'>Avis clients</h2>

                <div className='flex md:justify-between justify-center flex-wrap gap-5'>
                    {
                        avisClient?.map((avis: avisType) => {
                        return <TestimonialCard key={avis._id} client={avis.client} secteur={avis.secteur} avis={avis.avis} artisan={avis.artisan} secteur_artisan={avis.secteur_artisan} />})
                    }
                </div>

                <button className='mt-10 border border-kalipro font-semibold py-2 px-5 rounded-full bg-white text-kalipro hover:bg-subtleKalipro'>Voir plus d&apos;avis</button>
            </div>
        </div>
    )
}

export default ArtisanDetail