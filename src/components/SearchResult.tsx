"use client"

import React, { useEffect, useState } from 'react';
import ResultCard from './resultPage/ResultCard';

type dataType = {
  _id: number,
  name: string,
  domaine_artisan: string,
  phone: string,
  mail: string,
  location: string,
  secteur: Array<string>,
  intervention_img: string,
  disponibilite: boolean,
  temps_disponibilite: number,
  competences: Array<string>,
  presentation: string,
  qualifications_assurances: Array<string>,
  photo: Array<string>,
  avis: Array<string>
}

type propsType = {
  filterSecteur: string,
  filteurMetier: string
}

const SearchResult = ({filterSecteur, filteurMetier}: propsType) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/artisans.json');
      const data = await response.json();
      setData(data);
      console.log(data);
    }

    fetchData();
  }, [])

  const dataToDisplay = data.filter((data: dataType) => data.secteur.includes(filterSecteur))

  return (
    <>
        {dataToDisplay.map((result: dataType) => {
            return <ResultCard key={result._id} _id={result._id} name={result.name} domaine_artisan={result.domaine_artisan} phone={result.name} mail={result.mail} location={result.location} secteur={result.secteur} intervention_img={result.intervention_img} disponibilite={result.disponibilite} temps_disponibilite={result.temps_disponibilite} competences={result.competences} presentation={result.presentation} qualifications_assurances={result.qualifications_assurances} photo={result.photo} avis={result.avis} />
        })}
    </>
  )
}

export default SearchResult