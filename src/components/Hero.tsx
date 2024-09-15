"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// style in the global.css
import MainInput from './MainInput';
import Link from 'next/link';

const Hero = () => {

    const [secteurSelected, setSecteurSelected] = useState('');
    

  return (
    <div className='Hero md:px-20 px-5  bg-gradient-to-tr from-subtleKalipro to-slate-50'>
        <div className='hero-main flex flex-col justify-around gap-10 items-center md:p-24 p-10 rounded-xl'>

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
            <input className='bg-white rounded-lg w-full h-20 pl-4 outline-none border' type='text' placeholder='Que recherchez-vous?' />
            <select className='bg-white rounded-lg w-full h-20 pl-4 outline-none border'>
                <option value="" className='opacity-50'>Dans quel secteur?</option>
                <option value="nord">Nord</option>
                <option value="est">Est</option>
                <option value="sud">Sud</option>
                <option value="ouest">Ouest</option>
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