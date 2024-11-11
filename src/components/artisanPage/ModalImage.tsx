import Image from 'next/image'
import React from 'react'

function ModalImage({selectedImage, isDisplay}: {selectedImage: string | null, isDisplay: boolean}) {
  return (
    <div className={`${isDisplay? "block" : "hidden"} absolute h-screen w-full left-0 bg-black opacity-80`}>
        <div className='flex justify-center items-center h-screen text-blue-500'>
            {
                selectedImage ? <Image className='opacity-100' src={selectedImage} alt='modal' height={0} width={0} style={{width: "80%", height: "80%", margin: "auto"}} /> : null
            }
        </div>
    </div>
  )
}

export default ModalImage