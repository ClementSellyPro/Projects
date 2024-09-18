"use client"

import React, { useContext, useEffect, useState } from 'react';
import ResultCard from './resultPage/ResultCard';
import NoArtisans from './resultPage/NoArtisans';
import DataContext from '@/context/DataContext';
import { Artisan } from '@/type/ArtisanType';


type propsType = {
  filterSecteur: string,
  filterMetier: string
}

const SearchResult = ({filterSecteur, filterMetier}: propsType) => {

  const { data } = useContext(DataContext);

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
          dataToDisplay.length > 0 ?
        
          dataToDisplay.map((result: Artisan) => {
              return <ResultCard key={result._id} _id={result._id} name={result.name} domaine_artisan={result.domaine_artisan} phone={result.name} mail={result.mail} location={result.location} secteur={result.secteur} intervention_img={result.intervention_img} disponibilite={result.disponibilite} temps_disponibilite={result.temps_disponibilite} competences={result.competences} presentation={result.presentation} qualifications_assurances={result.qualifications_assurances} photo={result.photo} avis={result.avis} />
          })
          :
          <NoArtisans />
        }
    </>
  )
}

export default SearchResult