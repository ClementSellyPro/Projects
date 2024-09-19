"use client"
import Image from 'next/image';
import React, { ChangeEvent, useContext } from 'react';
import { motion } from 'framer-motion';
// style in the global.css
import MainInput from './MainInput';
import Link from 'next/link';
import FilterContext from '@/context/FilterContext';

const Hero = () => {

    const { setFilterSecteur, SetFilterMetier } = useContext(FilterContext);

    function secteurSelectionMobile(e: ChangeEvent<HTMLSelectElement>){
        setFilterSecteur(e.target.value);
    }

    function metierSelectionMobile(e: ChangeEvent<HTMLSelectElement>){
        SetFilterMetier(e.target.value)
    }
    
    return (
        <div className='Hero lg:px-20 md:px-14 px-5  bg-gradient-to-tr from-subtleKalipro to-slate-50'>
            <div className='hero-main flex flex-col justify-around items-center md:p-24 p-10 rounded-xl'>

                {/* Images section*/}
                <div className='hero-images-section flex'>
                    <Image className='image-artisan basis-1/3 object-cover' src='/images/image1.png' alt='Artisans' height={600} width={400} />
                    <Image className='image-artisan basis-1/3 object-cover' src='/images/image2.png' alt='Artisans' height={600} width={400} />
                    <Image className='image-artisan basis-1/3 object-cover' src='/images/image3.png' alt='Artisans' height={600} width={400} />
                </div>

                {/* Home message */}
                    <div className='hero-message lg:text-6xl md:text-5xl sm:text-3xl text-xl text-center text-white'>
                        <motion.div
                        initial={{opacity: 0, y:20}}
                        animate={{opacity: 1, y:0}}
                        transition={{delay: 0.2}}>

                            Rechercher des <strong className='text-kalipro md:font-normal font-semibold'>artisans de qualité</strong> à <strong className='text-kalipro md:font-normal font-semibold'>proximité</strong> <span className='underline'>de chez vous</span>.
                        
                        </motion.div>
                    </div>

                {/* Input section */}
                <MainInput />
                
            </div>
            {/* Input section for little screen */}
            <div className='hero-input-section flex flex-col justify-items-end gap-3 md:hidden w-full h-44 py-2 mt-5'>
                {/* <input className='bg-white rounded-lg w-full h-20 pl-4 outline-none border' type='text' placeholder='Que recherchez-vous?' /> */}
                <select onChange={(e: ChangeEvent<HTMLSelectElement>) => metierSelectionMobile(e)} className='bg-white rounded-lg w-full h-20 pl-4  border'>
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
                <select onChange={(e: ChangeEvent<HTMLSelectElement>) => secteurSelectionMobile(e)} className='bg-white rounded-lg w-full h-20 pl-4 border'>
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
        </div>
    )
}

export default Hero