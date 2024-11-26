import { useRouter } from 'next/navigation'
import React from 'react'

function AutreProjet() {
    const router = useRouter();

    function handleClick(){
        router.push('/contact');
    }


  return (
    <div onClick={handleClick} className='relative ResultCard bg-white cursor-pointer border rounded-lg lg:w-wResultCardLg w-full h-44 p-3 shadow-md hover:shadow-xl'>
            <div className='flex items-center justify-center h-32'>
                {/* logo */}
                {
                    // <Image className='rounded-full' src={'/logo.png'} alt="Logo" width={80} height={80} /> 
                }
                

                <div className='info-section ml-4'>
                    <p className='text-xl'>Pour tout autre demande, contacter nous directement.</p>
                </div>
            </div>
            <button className='absolute right-3 bottom-3 py-1.5 md:px-8 px-4 font-semibold bg-kalipro hover:opacity-75 text-white rounded-md'> Contacter</button>
        </div>
  )
}

export default AutreProjet