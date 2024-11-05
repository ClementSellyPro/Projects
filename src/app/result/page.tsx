"use client"

import React, { ChangeEvent, useContext } from 'react'
import MiniInput from '@/components/resultPage/MiniInput'
import SearchResult from '@/components/SearchResult'
import FilterContext from '@/context/FilterContext';
import DataContext from '@/context/DataContext';
import { Artisan } from '@/type/ArtisanType';
import Image from 'next/image';
import Link from 'next/link';


/* Result Page */
const Page = () => {
  
  // recuperation des "filter" pour determiner la liste des metiers a afficher "dataToDisplay". Les filters sont dans un premier temps configurer dans le grand input dans le composant Hero.tsx
  const { filterSecteur, filterMetier, setFilterSecteur, SetFilterMetier } = useContext(FilterContext);
  const { data } = useContext(DataContext);

  let dataToDisplay = data; // initialisation. Ensuite filtrer juste en bas

  if(filterSecteur === ''){
    dataToDisplay = data.filter((data: Artisan) => data.domaine_artisan.includes(filterMetier));
  }else if(filterMetier === ''){
    dataToDisplay = data.filter((data: Artisan) => data.secteur.includes(filterSecteur));
  }else{
    dataToDisplay = data.filter((data: Artisan) => data.secteur.includes(filterSecteur)).filter((data: Artisan) => data.domaine_artisan.includes(filterMetier));
  }

  // possibilite de reatribuer les filters grace au MiniInput.tsx component sur la page actuel (result/page.tsx)
  function secteurSelectionMobile(e: ChangeEvent<HTMLSelectElement>){
      setFilterSecteur(e.target.value);
  }

  function metierSelectionMobile(e: ChangeEvent<HTMLSelectElement>){
      SetFilterMetier(e.target.value)
  }

  return (
    <div className='Result bg-gradient-to-tr from-subtleKalipro to-slate-50 pb-20 pt-10'>
        
        {/* display the Input for larger screen and the select elements for smaller */}
        <div className='hidden md:block'>
          <MiniInput />
        </div>
        <div className='hero-input-section flex flex-col items-end gap-3 md:hidden w-full h-44 px-4 pb-2 mt-5'>
                {/* <input className='bg-white rounded-lg w-full h-20 pl-4 outline-none border' type='text' placeholder='Que recherchez-vous?' /> */}
                <select value={filterMetier} onChange={(e: ChangeEvent<HTMLSelectElement>) => metierSelectionMobile(e)} className='bg-white rounded-lg w-full h-20 pl-4  border' >
                    <option value="">Que recherchez vous?</option>
                    <option value="Aménagement ext.">Aménagement ext.</option>
                    <option value="Architecte">Architecte</option>
                    <option value="Carreleur">Carreleur</option>
                    <option value="Charpentier">Charpentier</option>
                    <option value="Climatisation">Climatisation</option>
                    <option value="Cuisiniste">Cuisiniste</option>
                    <option value="Décorateur intérieur">Décorateur intérieur</option>
                    <option value="Electricien">Electricien</option>
                    <option value="Maçonnerie">Maçonnerie</option>
                    <option value="Maison individuelle">Maison individuelle</option>
                    <option value="Maitre d'oeuvre">Maitre d&apos;oeuvre</option>
                    <option value="Menuisier">Menuisier</option>
                    <option value="Peintre">Peintre</option>
                    <option value="Plaquiste">Plaquiste</option>
                    <option value="Plombier">Plombier</option>
                    <option value="Portail/automatisme">Portail/automatisme</option>
                    <option value="Rénovation">Rénovation</option>
                    <option value="Terrassier">Terrassier</option>
                </select>
                {/* secteur selection */}
                <select value={filterSecteur} onChange={(e: ChangeEvent<HTMLSelectElement>) => secteurSelectionMobile(e)} className='bg-white rounded-lg w-full h-20 pl-4 border'>
                    <option value="" className='opacity-50'>Dans quel secteur?</option>
                    <option value="Nord">Nord</option>
                    <option value="Est">Est</option>
                    <option value="Sud">Sud</option>
                    <option value="Ouest">Ouest</option>
                </select>
                
                <Link href='/result'>
                <button className='group flex items-center bg-blueKalipro hover:opacity-80 w-44 lg:h-16 h-12 
                                text-white text-l lg:text-xl font-semibold py-2 px-7 rounded-full' 
                        type='button'>
                    <Image  src='/icon/search-icon.png' 
                            alt='Arrow'
                            width={20}
                            height={20}
                            className='mr-2'
                            />
                    Rechercher
                </button>
                </Link>
            </div>

        <h1 className='Result-title md:ml-20 ml-5 md:mt-14 mt-10 font-semibold md:text-3xl text-2xl'>{dataToDisplay.length} professionels recommandés</h1>

        <p className='md:mx-20 mx-5 md:mt-10 mt-6 py-2 px-10 rounded-lg bg-slate-200 text-slate-500 '>Tous les professionels présents sur notre site ont été selectionnés par nos soins.</p>

        <div className='results-section flex justify-between flex-wrap gap-10 md:px-20 px-5 mt-10'>
          {/* tous les artisans rechercher sont lister dans SearchResult.tsx */}
            <SearchResult />
        </div>
    </div>
  )
}

export default Page;