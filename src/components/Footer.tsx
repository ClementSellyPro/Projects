import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='Footer lg:px-20 md:px-14 px-5 pt-10 bg-slate-100 border-t-2'>
      <div className='footer-main flex md:flex-row flex-wrap flex-start lg:gap-40 md:gap-28 gap-10'>
        <div className='footer-group flex flex-col gap-1'>
          <p className='footer-group-title font-bold mb-0.5'>KALIPRO</p>
          <Link href='/presentation'>
            <p className='text-sm cursor-pointer hover:underline'>Qui sommes-nous?</p>
          </Link>
          <Link href='/contact'>
            <p className='text-sm cursor-pointer hover:underline'>Nous contacter</p>
          </Link>
        </div>
        
        <div className='footer-group flex flex-col gap-0.5'>
          <p className='footer-group-title font-bold mb-1'>Utilisateurs</p>
          <Link href='/cgu#howto'>
            <p className='text-sm cursor-pointer hover:underline'>Comment ça marche?</p>
          </Link>
          <Link href='/cgu'>
            <p className='text-sm cursor-pointer hover:underline'>CGU</p>
          </Link>
        </div>
        
        <div className='footer-group flex flex-col gap-0.5'>
          <p className='footer-group-title font-bold mb-1'>Professionnels</p>
          <Link href='/contact'>
            <p className='text-sm cursor-pointer hover:underline'>Nous contacter</p>
          </Link>
        </div>
      </div>
      <div className='footer-credit font-extralight text-xs pb-7 pt-12'>
        2024 KALIPRO . <Link href='/cgu'>Confidentialité</Link> . <Link href='/cgu'>CGU</Link> . <Link href={'/mentions'}>Mentions légales</Link> 
      </div>
    </div>
  )
}

export default Footer