import React from 'react'
import Image from 'next/image'

type Props = {
    hidden: boolean
}

const MenuSecteur = ({hidden} : Props) => {

  return (
    <div className={hidden ? 'nav-links-secteur hidden' : 'nav-links-secteur'}>

        <p className='nav-links-secteur-item group flex justify-between items-center font-normal hover:font-semibold'>
            Nord <Image className='group-hover:scale-125 transition' src='/icon/secteur-nord-icon.png' alt='Secteur Est' width={25} height={25} />
        </p>

        <p className='nav-links-secteur-item group flex justify-between items-center font-normal hover:font-semibold'>
            Est <Image className='group-hover:scale-125 transition' src='/icon/secteur-est-icon.png' alt='Secteur Est' width={25} height={25} /> 
        </p>

        <p className='nav-links-secteur-item group flex justify-between items-center font-normal hover:font-semibold'>
            Sud <Image className='group-hover:scale-125 transition' src='/icon/secteur-sud-icon.png' alt='Secteur Est' width={25} height={25} />
        </p>

        <p className='nav-links-secteur-item group flex justify-between items-center font-normal hover:font-semibold'>
            Ouest <Image className='group-hover:scale-125 transition' src='/icon/secteur-ouest-icon.png' alt='Secteur Est' width={25} height={25} />
        </p>

    </div>
  )
}

export default MenuSecteur