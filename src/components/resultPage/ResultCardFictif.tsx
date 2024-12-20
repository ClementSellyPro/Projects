"use client"

import Image from 'next/image';
import React from 'react';
import { Artisan } from '@/type/ArtisanType';
import { useRouter } from 'next/router';
import Link from 'next/link';


function ResultCardFictif() {

    // const data : Artisan = [
    //     [
    //         {
    //             "_id": 525252,
    //             "name": "Architectura",
    //             "domaine_artisan": "Architecture",
    //             "phone": "0692123467",
    //             "mail": "architectura@gmail.com",
    //             "location": "Saint Denis",
    //             "secteur": ["Est", "Nord", "Ouest", "Sud"],
    //             "intervention_img": "",
    //             "competences": [
    //                 "Spécialiste dans l'architecture de maison",
    //                 "Plan de maison",
    //                 "Design sur mesure"
    //             ],
    //             "presentation": "Notre cabinet d'architecture conçoit des projets innovants et sur mesure, alliant esthétisme, fonctionnalité et respect de l'environnement. Nous accompagnons nos clients de la conception à la réalisation, pour donner vie à leurs espaces.",
    //             "qualifications_assurances": [
    //                 "Assurance RCP et décennale"
    //             ],
    //             "photo": [],
    //             "logo":"/logo_example/logo_5.jpg",
    //             "note": "4,8",
    //             "avis": [
    //                 {
    //                     "_id": 0,
    //                     "client": "Nicolas Lefevre",
    //                     "secteur": "Saint Denis",
    //                     "avis": "Un travail remarquable du début à la fin, le cabinet a parfaitement compris mes attentes et a su les transformer en un projet architectural unique.",
    //                     "artisan": "Architectura",
    //                     "domaine_artisan": "Architecture",
    //                     "logo":"/logo_example/logo_5.jpg"
    //                 },
    //                 {
    //                     "_id": 1,
    //                     "client": "Jean Dupuis",
    //                     "secteur": "Sainte Marie",
    //                     "avis": "Excellente collaboration, les architectes ont su allier créativité et respect des contraintes techniques. Le résultat est tout simplement magnifique.",
    //                     "artisan": "Architectura",
    //                     "domaine_artisan": "Architecture",
    //                     "logo":"/logo_example/logo_5.jpg"
    //                 },
    //                 {
    //                     "_id": 2,
    //                     "client": "Claire Martin",
    //                     "secteur": "Saint Suzanne",
    //                     "avis": "Je suis très satisfait du projet réalisé, le cabinet a été à l'écoute tout au long du processus et le résultat final est à la hauteur de mes espérances.",
    //                     "artisan": "Architectura",
    //                     "domaine_artisan": "Architecture",
    //                     "logo":"/logo_example/logo_5.jpg"
    //                 },
    //                 {
    //                     "_id": 3,
    //                     "client": "Sophie Bernard",
    //                     "secteur": "Saint Denis",
    //                     "avis": "Une équipe professionnelle et réactive. Leurs idées innovantes ont complètement transformé mon espace, je recommande sans hésitation.",
    //                     "artisan": "Architectura",
    //                     "domaine_artisan": "Architecture",
    //                     "logo":"/logo_example/logo_5.jpg"
    //                 },
    //                 {
    //                     "_id": 4,
    //                     "client": "Thomas Girault",
    //                     "secteur": "Sainte Marie",
    //                     "avis": "Le cabinet d'architecture a su créer un design fonctionnel et esthétique, tout en respectant mon budget. Je ne pouvais pas espérer mieux !",
    //                     "artisan": "Architectura",
    //                     "domaine_artisan": "Architecture",
    //                     "logo":"/logo_example/logo_5.jpg"
    //                 }
    //             ]
    //         }
    //     ]
    // ];

    const secteur = ["Nord", "Est", "Sud", "Nord"];

    //     useEffect(() => {
    //     async function fetchData() {
    //       const response = await fetch('/artisanFictif.json')
    //       const jsonData: Artisan = await response.json()
    //       if(!jsonData){
    //         return console.error("Can't retrieve fictive data")
    //       }
    //       setData(jsonData);
    //       console.log(jsonData);
    //     }

    //     fetchData()
    //   }, [])
  
    // const router = useRouter();onClick={handleClick}

    // function handleClick(){
    //     router.push(`/artisan/${data?._id}`);
    // }

    return (
        <Link className='relative ResultCard bg-white cursor-pointer border rounded-lg lg:w-wResultCardLg w-full h-44 p-3 shadow-md hover:shadow-xl' href={`/artisan/525252`}>
        <div>
            <div className='flex items-center'>
                {/* logo */}
                {
                    <Image className='flex items-center justify-center rounded-full border' src={'/logo_example/logo_5.jpg'} alt="Logo" width={80} height={80} /> 
                }
                

                <div className='info-section ml-4'>
                    <p className='text-xl font-semibold'>Architectura <span className='font-medium text-sm'>(Entreprise fictive pour exemple)</span></p>
                    <p className='text-xs text-slate-500'>Architecture</p>
                    <p className='mt-6 text-sm'>Zone intervention: {secteur.map(secteur => secteur + ', ')}</p>
                </div>
            </div>

            <button className='absolute right-3 bottom-3 py-1.5 md:px-8 px-4 font-semibold bg-kalipro hover:opacity-75 text-white rounded-md'> Contacter</button>
        </div>
        </Link>
    )
}

export default ResultCardFictif