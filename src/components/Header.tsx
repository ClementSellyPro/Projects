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
    <div className='Header flex items-center md:px-20 px-5 py-5 static bg-slate-50'>
      {/* Logo */}
        <Link href={'/'}>
          <Image 
          className='md:w-52 w-32'
          src='/logo.png' 
          alt='KALIPRO'
          width={200}
          height={80} />
        </Link>

        {/* navigation bar */}
        <nav className='ml-10 h-18 md:block hidden'>
            <ul className='nav-links flex gap-5 text-xl h-20'>
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

                <Link className='flex items-center hover:border-b-2 border-kalipro cursor-pointer ' href={'/contact'}><li className='font-semibold'>Contact </li></Link>
            </ul>
        </nav>
        <Link className='md:hidden font-semibold hover:border-b-2 border-kalipro absolute right-5' href='/contact'>Contact</Link>
    </div>
  )
}

export default Header