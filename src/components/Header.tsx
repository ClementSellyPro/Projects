"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import MenuSecteur from './MenuSecteur';
import MenuMetier from './MenuMetier';
import DataContext from '@/context/DataContext';

const Header = () => {

  const { setData } = useContext(DataContext);
 
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/artisans.json');
      const data = await response.json();
      setData(data);
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='Header flex md:flex-row flex-col md:items-center items-start lg:px-20 md:px-14 px-5 py-3 static bg-slate-50'>
      {/* Logo */}
        <Link href={'/'}>
          <Image 
          className='lg:w-52 md:w-40 w-32'
          src='/logo.png' 
          alt='KALIPRO'
          width={200}
          height={80}
          priority={true} />
        </Link>

        {/* navigation bar */}
        <nav className='lg:ml-10 ml-5 h-18 md:block hidden'>
            <ul className='nav-links flex gap-5 lg:text-xl text-lg h-20'>
                <Link className='flex items-center hover:border-b-2 border-kalipro cursor-pointer' href={'/'}><li className='font-semibold'> Accueil </li></Link>

                <li className='nav-link-metier hover:border-b-2 border-kalipro cursor-pointer font-semibold flex items-center'>
                  Metiers 
                  {/* Metiers dropdown menu */}
                  <MenuMetier hidden={true} />
                </li>
                
                <li className='nav-link-secteur hover:border-b-2 border-kalipro cursor-pointer font-semibold flex items-center'>
                  Secteurs
                  {/* Secteurs dropdown menu */}
                  <MenuSecteur hidden={true} />
                </li>

                <Link className='flex items-center hover:border-b-2 border-kalipro cursor-pointer ' href={'/contact'}>
                  <li className='font-semibold'>Contact </li>
                </Link>
            </ul>
        </nav>

        {/* boutton donner avis - large screen*/}
        <div className='md:flex flex-col items-center lg:w-fit w-40  md:absolute lg:right-20 md:right-14 hidden'>

          <Link href={'/donneravis'} className='px-5 py-2 lg:text-sm md:text-xs bg-white text-kalipro font-semibold border-2 border-kalipro rounded-full hover:bg-kalipro hover:text-white'>
            Donner mon avis pour un artisan
          </Link>
        </div>


        {/* boutton donner avis - little screen*/}
        <div className='md:hidden flex justify-between items-center w-full'>
          <Link className='md:hidden font-semibold hover:border-b-2 border-kalipro text-sm' href='/contact'>Contact</Link>

          <Link href={'/donneravis'} className='px-5 py-2 md:text-base text-xs bg-white text-kalipro font-semibold border-2 border-kalipro rounded-full hover:bg-kalipro hover:text-white'>
            Donner mon avis pour un artisan
          </Link>
        </div>
    </div>
  )
}

export default Header