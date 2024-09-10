import Image from 'next/image'
import React from 'react'
import TestimonialCard from '@/components/TestimonialCard'
import Link from 'next/link'

const page = () => {
  return (
    <div className='bg-slate-50 md:px-20 py-10 px-5 relative'>
        {/* header artisan */}
        <div className='md:flex block justify-between items-center py-6 bg-slate-50 border-b border-t sticky top-0'>
            <div>
                <h1 className='font-semibold text-blueKalipro lg:text-5xl md:text-3xl text-2xl'>Electrika</h1>
                <p className='flex items-center gap-1 text-sm'><Image src='/icon/location.png' alt='location icon' width={20} height={20} /> Saint-André</p>
            </div>

            {/* header artisan contact */}
            <div className='flex items-center gap-5 mt-5'>
                {/* change for image */}
                <div className='lg:h-20 md:h-16 h-10 lg:w-20 md:w-16 w-10 bg-slate-200 rounded-full'></div> 
                <p className='lg:text-base md:text-sm'>John de Electrika<br/>
                <span className='lg:text-xl md:text-lg'>0692 12 34 56</span></p>
                <Link href='/artisanMail'><button className='flex items-center gap-2 border border-kalipro font-semibold py-2 px-5 rounded-full bg-kalipro text-white hover:opacity-80'><Image src='/icon/mail-icon.png' alt='mail icon' width={20} height={20} />Envoyer un mail</button></Link>
            </div>
        </div>

        <div className='md:flex block justify-between py-14 border-b'>
            <div>
                {/* Competence */}
                <div className='pb-10 border-b'>
                    <h2 className='font-semibold md:text-2xl text-3xl mb-5'>Compétences</h2>
                    <p>
                        <span className='font-semibold'>Spécialiste des réseaux électriques </span> <br />
                        Raccordement et dérivation du flux électrique <br />
                        Câblage depuis la source d&apos;énergie <br />
                        Localisation des dysfonctionnements <br />
                        Réalisation d&apos;une phase de test et de mesure <br />
                        Force de proposition sur des solutions alternatives innovantes <br />
                    </p>
                </div>
                {/* Presentation */}
                <div className='py-10 border-b'>
                    <h2 className='font-semibold md:text-2xl text-3xl mb-5'>Présentation</h2>
                    <p>Electrika est une entreprise failiale et indépendante. </p>
                </div>
                {/* Assurance */}
                <div className='py-10'>
                    <h2 className='font-semibold md:text-2xl text-3xl mb-5'>Qualifications assurances*</h2>
                    <ul>
                        <li>Certification AAA</li>
                        <li>Assurance RCP et décennale</li>
                    </ul>
                    <p className='mt-2 text-sm'>* A charge pour vous de vérifier ces informations en le demandant directement au professionels. </p>
                
                </div>
            </div>
            {/* zone intervention */}
            <div>
                <h2 className='font-semibold md:text-2xl text-3xl mb-5'>Zone d&apos;intervention</h2>
                <Image src='/intervention.png' alt='Carte' width={400} height={400} />
            </div>
        </div>

        {/* photos */}
        <div className='mt-10'>
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
                <TestimonialCard client='Johnny' secteur='Saint Denis' avis='Excellent boulot de la part de Electrika' artisan='Electrika' secteur_artisan='Est, Nord' />
                <TestimonialCard client='Johnny' secteur='Saint Denis' avis='Excellent boulot de la part de Electrika' artisan='Electrika' secteur_artisan='Est, Nord' />
                <TestimonialCard client='Johnny' secteur='Saint Denis' avis='Excellent boulot de la part de Electrika' artisan='Electrika' secteur_artisan='Est, Nord' />
                <TestimonialCard client='Johnny' secteur='Saint Denis' avis='Excellent boulot de la part de Electrika' artisan='Electrika' secteur_artisan='Est, Nord' />
                <TestimonialCard client='Johnny' secteur='Saint Denis' avis='Excellent boulot de la part de Electrika' artisan='Electrika' secteur_artisan='Est, Nord' />
            </div>

            <button className='mt-10 border border-kalipro font-semibold py-2 px-5 rounded-full bg-white text-kalipro hover:bg-subtleKalipro'>Voir plus d&apos;avis</button>
        </div>
    </div>
  )
}

export default page