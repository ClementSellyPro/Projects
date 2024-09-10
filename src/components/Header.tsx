import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MenuSecteur from './MenuSecteur';
import MenuMetier from './MenuMetier';

const Header = () => {
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
                <li className='hover:border-b-2 border-kalipro cursor-pointer font-semibold flex items-center'><Link href={'/'}> Accueil </Link></li>
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
                <li className='hover:border-b-2 border-kalipro cursor-pointer font-semibold flex items-center'><Link href={'/contact'}>Contact </Link></li>
            </ul>
        </nav>
        <Link className='md:hidden font-semibold hover:border-b-2 border-kalipro absolute right-5' href='/contact'>Contact</Link>
    </div>
  )
}

export default Header