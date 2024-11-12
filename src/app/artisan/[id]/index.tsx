"use client"

import TestimonialCard from "@/components/TestimonialCard";
import Image from "next/image";
import Link from "next/link";
import DataContext from '@/context/DataContext';
import { useContext } from "react";
import ClickablePhone from '@/components/ClickablePhone';
import ImageCarousel from "@/components/artisanPage/ImageCarousel";

type avisType = {
    _id: number,
    client: string,
    secteur: string,
    avis: string,
    artisan: string,
    secteur_artisan: string
}

interface paramsType {
    params: {
        id: {
            id: string;
        };
    };
}

interface PhotoType {
    src: string,
    alt: string,
    height: number,
    width: number
}

const ArtisanDetail = ({ params }: paramsType) => {
    const id = params.id.id;

    // get all data and filter according the params id
    const { data } = useContext(DataContext);
    const dataToDisplay = data.filter(data => (data._id.toString() === id));
    
    const competences = dataToDisplay[0]?.competences.slice(1, dataToDisplay[0]?.competences.length);
    const avisClient = dataToDisplay[0]?.avis.map(avis => avis);



    // Sample image data
    const imagesSample: PhotoType[] = [
        { src: '/photo_example/photography_1.jpg', height:400, width:600, alt: 'Sample image 1' },
        { src: '/photo_example/photography_2.jpg', height:400, width:600, alt: 'Sample image 2' },
        { src: '/photo_example/photography_3.jpg', height:400, width:600, alt: 'Sample image 3' },
        { src: '/photo_example/photography_4.jpg', height:400, width:600, alt: 'Sample image 4' },
        { src: '/photo_example/photography_5.jpg', height:400, width:600, alt: 'Sample image 5' },
        { src: '/photo_example/photography_6.jpg', height:400, width:600, alt: 'Sample image 6' },
        { src: '/photo_example/photography_7.jpg', height:400, width:600, alt: 'Sample image 7' },
    ]

    return (
        <div className='bg-slate-50 md:px-20 py-10 px-5 relative'>
            {/* header artisan */}
            <div className='md:flex block justify-between items-center py-6 bg-slate-50 border-b border-t sticky top-0 z-10'>
                <div>
                    <h1 className='font-semibold text-blueKalipro xl:text-5xl lg:text-4xl md:text-3xl text-2xl'>{dataToDisplay[0]?.name}</h1>
                    <p className='flex items-center gap-1 text-sm'><Image src='/icon/location.png' alt='location icon' width={20} height={20} /> {dataToDisplay[0]?.location}</p>
                </div>
                
                {/* header artisan contact */}
                <div className='flex items-center md:gap-5 gap-2 mt-5'>
                    {/* logo */}
                    <Image className="rounded-full" src={dataToDisplay[0]?.logo} alt="Logo" width={50} height={50} /> 
                    <div className='lg:text-base md:text-sm'>
                        <ClickablePhone phoneNumber={dataToDisplay[0]?.phone} />
                    </div>
                    <Link href={`/artisanMail/${dataToDisplay[0]?._id}`}><button className='flex items-center gap-2 border border-kalipro font-semibold py-2 md:px-5 px-3 rounded-full bg-kalipro text-white hover:opacity-80 lg:text-base text-xs'><Image src='/icon/mail-icon.png' alt='mail icon' width={20} height={20} />Envoyer un mail</button></Link>
                </div>
            </div>

            <div className='md:flex block justify-between py-14'>
                <div className='flex flex-col gap-5'>
                    {/* Competence */}
                    <div className='hover:bg-subtleKalipro p-7 border rounded-xl'>
                        <h2 className='font-semibold text-2xl mb-5'>Compétences</h2>
                        <div>
                            <span className='font-semibold'>{dataToDisplay[0]?.competences[0]} </span> <br />
                            {
                                competences?.map((competence, index) => <p key={index}>{competence}</p>)
                            }
                        </div>
                    </div>
                    {/* Presentation */}
                    <div className='hover:bg-subtleKalipro p-7 border rounded-xl'>
                        <h2 className='font-semibold text-2xl  mb-5'>Présentation</h2>
                        <p className='max-w-md'>{dataToDisplay[0]?.presentation}</p>
                    </div>
                    {/* Assurance */}
                    <div className='hover:bg-subtleKalipro p-7 border rounded-xl'>
                        <h2 className='font-semibold text-2xl  mb-5'>Qualifications assurances*</h2>
                        <ul>
                            <li>Certification AAA</li>
                            <li>Assurance RCP et décennale</li>
                        </ul>
                        <p className='mt-2 text-sm'>* A charge pour vous de vérifier ces informations en le demandant directement au professionels. </p>
                    </div>
                </div>
                {/* zone intervention */}
                <div className='hover:bg-subtleKalipro p-7 border rounded-xl md:mt-0 mt-5 md:ml-5 ml-0'>
                    <h2 className='font-semibold text-2xl mb-5'>Zone d&apos;intervention</h2>
                    <Image src='/map-est-nord.png' alt='Carte' width={400} height={400} />
                </div>
            </div>

            {/* photos section */}
            {/* <div className='mt-10 pb-10 border-b'>
                <h2 className='font-semibold mb-5 text-2xl'>Photos <span className="text-sm font-thin">(images généré par AI comme exemple)</span></h2>

                <div className='flex flex-wrap gap-5'>
                    <div onClick={(e) => handleImageModal(e)} className="artisan_photo-container hover:cursor-pointer">
                        <Image src={"/photo_example/photography_2.jpg"} alt={"cuisine"} width={220} height={400} />
                    </div>
                    <div onClick={(e) => handleImageModal(e)} className="artisan_photo-container hover:cursor-pointer h-fit">
                        <Image src={"/photo_example/photography_1.jpg"} alt={"cuisine"} width={400} height={220} />
                    </div>
                    <div onClick={(e) => handleImageModal(e)} className="artisan_photo-container hover:cursor-pointer">
                        <Image src={"/photo_example/photography_4.jpg"} alt={"cuisine"} width={220} height={400} />
                    </div>
                    <div onClick={(e) => handleImageModal(e)} className="artisan_photo-container hover:cursor-pointer h-fit">
                        <Image src={"/photo_example/photography_3.jpg"} alt={"cuisine"} width={400} height={220} />
                    </div>
                </div>

                <button className='mt-10 border border-kalipro font-semibold py-2 px-5 rounded-full bg-white text-kalipro hover:bg-subtleKalipro'>Voir plus de photos</button>
            </div> */}
            <ImageCarousel photos={imagesSample} />
            
            {/* Avis clients */}
            <div className='mt-10'>
                <h2 className='font-semibold text-2xl mb-5'>Avis clients</h2>

                <div className='flex md:justify-between justify-center flex-wrap gap-5'>
                    {
                        avisClient?.map((avis: avisType) => {
                        return <TestimonialCard key={avis._id} client={avis.client} secteur={avis.secteur} avis={avis.avis} artisan={avis.artisan} secteur_artisan={avis.secteur_artisan} />})
                    }
                </div>

                <button className='mt-10 border border-kalipro font-semibold py-2 px-5 rounded-full bg-white text-kalipro hover:bg-subtleKalipro'>Voir plus d&apos;avis</button>
            </div>
        </div>
    )
}

export default ArtisanDetail