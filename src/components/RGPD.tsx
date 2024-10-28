"use client"

import React, { useEffect } from 'react'

function RGPD() {
    useEffect(() => {
        const rgpd = localStorage.getItem("rgpd");
        if(rgpd === "true"){
            const bandeau = document.querySelector('.rgpd-bandeau') as HTMLElement;
            if(bandeau){
            bandeau.style.display = "none";
        }
        }
    }, [])


    function handleClick(){
        const bandeau = document.querySelector('.rgpd-bandeau') as HTMLElement;
        localStorage.setItem("rgpd", 'true');
        if(bandeau){
            bandeau.style.display = "none";
        }
    }

    return (
        <div className='rgpd-bandeau fixed bottom-0 w-full'>
            <div className='px-10 py-4 flex justify-between items-center  gap-4 bg-white'>
                <p>Message RGPD.</p>

                <button onClick={handleClick} className='border rounded-md px-4 py-1 text-white bg-blueKalipro hover:bg-blue-400'> Ok </button>
            </div>
        </div>
    )
}

export default RGPD