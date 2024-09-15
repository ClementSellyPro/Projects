"use client"

import React from 'react'
import MiniInput from '@/components/resultPage/MiniInput'
import SearchResult from '@/components/SearchResult'
import { useFilterContext } from '@/context/FilterContext';

/* Result Page */
const Page =  () => {
  
  const { filterSecteur, filterMetier } = useFilterContext();

  return (
    <div className='Result bg-gradient-to-tr from-subtleKalipro to-slate-50 pb-20 pt-10'>
        
        <MiniInput />

        <h1 className='Result-title md:ml-20 ml-5 md:mt-14 mt-10 font-semibold md:text-3xl text-2xl'>3 professionels recommandés</h1>

        <p className='md:mx-20 mx-5 md:mt-10 mt-6 py-2 px-10 rounded-lg bg-slate-200 text-slate-500 '>Tous les professionels présents sur notre site ont été selectionnés par nos soins.</p>

        <div className='results-section flex justify-between flex-wrap gap-10 md:px-20 px-5 mt-10'>
            <SearchResult filterSecteur={filterSecteur} filterMetier={filterMetier}  />
        </div>
    </div>
  )
}

export default Page