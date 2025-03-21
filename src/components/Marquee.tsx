"use client"

import FilterContext from "@/context/FilterContext";
import { useContext, useEffect } from "react";

// style in the global.css

export default function Marquee(){
    
    const { filterMetier, filterSecteur, setFilterSecteur, SetFilterMetier } = useContext(FilterContext);

    useEffect(() => {
        setFilterSecteur(() => '');
        SetFilterMetier(() => '');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);    

    return(
        <div className='Marquee md:px-20 md:pt-8 h-16 pt-10 px-10 bg-gradient-to-r from-subtleKalipro to-subtleKaliproTwo'>
            <div className='marquee-text pt-5 .fadeout-horizontal'>
                <div className='marquee-text-track select-none'>
                    <p>Architecte</p>
                    <p>Terrassier</p>
                    <p>Maçonnerie</p>
                    <p>Electricien</p>
                    <p>Plombier</p>
                    <p>Charpentier</p>
                    <p>Menuisier</p>
                    <p>Plaquiste</p>
                    <p>Carreleur</p>
                    <p>Peintre</p>
                    <p>Cuisiniste</p>
                    <p>Aménagement ext.</p>
                    <p>Rénovation</p>
                    <p>Maison individuelle</p>
                    {/* <p>Décorateur intérieur</p>
                    <p>Dessinateur</p> */}
                    
                    <p aria-hidden="true">Architecte</p>
                    <p aria-hidden="true">Terrassier</p>
                    <p aria-hidden="true">Maçonnerie</p>
                    <p aria-hidden="true">Electricien</p>
                    <p aria-hidden="true">Plombier</p>
                    <p aria-hidden="true">Charpentier</p>
                    <p aria-hidden="true">Menuisier</p>
                    <p aria-hidden="true">Plaquiste</p>
                    <p aria-hidden="true">Carreleur</p>
                    <p aria-hidden="true">Peintre</p>
                    <p aria-hidden="true">Cuisiniste</p>
                    <p aria-hidden="true">Aménagement ext.</p>
                    <p aria-hidden="true">Rénovation</p>
                    <p aria-hidden="true">Maison individuelle</p>
                    {/* <p aria-hidden="true">Décorateur intérieur</p>
                    <p aria-hidden="true">Dessinateur</p> */}
                </div>
            </div>
        </div>
    )
}