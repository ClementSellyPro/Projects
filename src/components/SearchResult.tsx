"use client";

import React, { useContext } from "react";
import ResultCard from "./resultPage/ResultCard";
import NoArtisans from "./resultPage/NoArtisans";
import DataContext from "@/context/DataContext";
import { Artisan } from "@/type/ArtisanType";
import FilterContext from "@/context/FilterContext";
import AutreProjet from "./AutreProjet";

const SearchResult = () => {
  const { data } = useContext(DataContext);
  const { filterMetier, filterSecteur } = useContext(FilterContext);

  let dataToDisplay = data;

  if (filterSecteur === "") {
    dataToDisplay = data.filter((data: Artisan) =>
      data.domaine_artisan.includes(filterMetier)
    );
  } else if (filterMetier === "") {
    dataToDisplay = data.filter((data: Artisan) =>
      data.secteur.includes(filterSecteur)
    );
  } else {
    dataToDisplay = data
      .filter((data: Artisan) => data.secteur.includes(filterSecteur))
      .filter((data: Artisan) => data.domaine_artisan.includes(filterMetier));
  }

  return (
    <>
      {
        // If filterMetier "Autre projet" affiche <AutreProjet />
        filterMetier === "Autre projet" ? (
          <AutreProjet />
        ) : // Else if display les artisans
        dataToDisplay.length > 0 ? (
          dataToDisplay.map((result: Artisan) => {
            return (
              <ResultCard
                key={result._id}
                _id={result._id}
                name={result.name}
                domaine_artisan={result.domaine_artisan}
                secteur={result.secteur}
                logo={result.logo}
                note={result.note}
              />
            );
          })
        ) : (
          // Else prevent there is no artisan yet for this categorie or secteur.
          <NoArtisans />
        )
      }
    </>
  );
};

export default SearchResult;
