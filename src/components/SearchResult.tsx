"use client"

import React, { useContext, useEffect, useState } from 'react';
import ResultCard from './resultPage/ResultCard';
import NoArtisans from './resultPage/NoArtisans';
import DataContext from '@/context/DataContext';
import { Artisan } from '@/type/ArtisanType';
import FilterContext from '@/context/FilterContext';
import AutreProjet from './AutreProjet';


const SearchResult = () => {

  const { data } = useContext(DataContext);
  const {filterMetier, filterSecteur} = useContext(FilterContext);

  let dataToDisplay = data;

  if(filterSecteur === ''){
    dataToDisplay = data.filter((data: Artisan) => data.domaine_artisan.includes(filterMetier));
  }else if(filterMetier === ''){
    dataToDisplay = data.filter((data: Artisan) => data.secteur.includes(filterSecteur));
  }else{
    dataToDisplay = data.filter((data: Artisan) => data.secteur.includes(filterSecteur)).filter((data: Artisan) => data.domaine_artisan.includes(filterMetier));
  }

  return (
    <>
        {
          filterMetier === "Autre projet" ? <AutreProjet /> :


          dataToDisplay.length > 0 ?
        
          dataToDisplay.map((result: Artisan) => {
              return <ResultCard key={result._id} _id={result._id} name={result.name} domaine_artisan={result.domaine_artisan} secteur={result.secteur} logo={result.logo} />
          })
          :
          <NoArtisans />
        }
    </>
  )
}

export default SearchResult