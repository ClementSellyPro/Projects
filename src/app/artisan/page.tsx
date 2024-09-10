import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='bg-slate-50 md:px-20 py-10 px-5'>
        {/* header artisan */}
        <div className='flex justify-between'>
            <div className='pb-14 border-b'>
                <h1 className='font-semibold text-blueKalipro text-5xl'>Electrika</h1>
                <p className='flex items-center gap-1 text-sm'><Image src='/icon/location.png' alt='location icon' width={20} height={20} /> Saint-André</p>
            </div>
            <div>
                <button>Envoyer un mail</button>
            </div>
        </div>

        <div className='md:flex block justify-between py-14 border-b'>
            <div>
                {/* Competence */}
                <div className='mb-10'>
                    <h2 className='font-semibold text-3xl mb-5'>Compétence</h2>
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
                <div className='mb-10'>
                    <h2 className='font-semibold text-3xl mb-5'>Présentation</h2>
                    <p>Electrika est une entreprise failiale et indépendante. </p>
                </div>
                {/* Assurance */}
                <div className='mb-10'>
                    <h2 className='font-semibold text-3xl mb-5'>Qualifications assurances*</h2>
                    <ul>
                        <li>Certification AAA</li>
                        <li>Assurance RCP et décennale</li>
                    </ul>
                    <p className='mt-2 text-sm'>* A charge pour vous de vérifier ces informations en le demandant directement au professionels. </p>
                
                </div>
            </div>
            {/* zone intervention */}
            <div>
                <h2 className='font-semibold text-3xl mb-5'>Zone d&apos;intervention</h2>
                <Image src='/intervention.png' alt='Carte' width={400} height={400} />
            </div>
        </div>

        {/* photos */}
        <div>

        </div>
    </div>
  )
}

export default page