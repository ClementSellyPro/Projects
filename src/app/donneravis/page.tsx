"use client"

import React, { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const Donneravis = () => {

    const [isTermAccepted, setIsTermAccepted] = useState<boolean>(false);
    const [emailInput, setEmailInput] = useState<string>('');
    const [validEmail, setValidEmail] = useState<boolean>(false);
    const [phoneInput, setPhoneInput] = useState<string>('');
    const [validPhone, setValidPhone] = useState<boolean>(false);
    const [file, setFile] = useState<File | null>(null);

    const router = useRouter();

    function handleEmailInput(e: React.FormEvent<HTMLInputElement>){
        const target = e.currentTarget.value;
        const regex = (/^\S+@\S+\.\S{2,3}$/);

        setEmailInput(target);
        if(regex.test(target)){
            setValidEmail(true)
        }else{
            setValidEmail(false);
        }
    }

    function handlePhoneInput(e: React.FormEvent<HTMLInputElement>){
        const target = e.currentTarget.value;
        const regex = /^\d{10}$/;
        
        console.log(regex.test(target));
        setPhoneInput(target);

        if(regex.test(target)){
            setValidPhone(true)
        }else{
            setValidPhone(false);
        }
    }

    async function handleFile(e: ChangeEvent<HTMLInputElement>){
        const selectedFile = e.target.files?.[0];
        const maxFileSize = 5 * 1024 * 1024;

        if (selectedFile && selectedFile.size > maxFileSize){
            setFile(null); // reset file if size limit
        }else{
            setFile(selectedFile || null);
        }
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(e.currentTarget);

        if(validEmail && validPhone){
            const res = await fetch('http://localhost:3000/api/send/avis', {
                method: 'POST',
                body: formData
            })

            const data = await res.json();
            if(data.success){
                console.log('Success formData sent.')
            }else{
                console.log('Error formData not sent.')
            }
    
            toast.success('Votre avis a bien été envoyé');
            form.reset();
            router.push('/');
        }
    }

    return (
        <div className='md:pl-20 lg:pr-20px pr-5px px-5 py-8  bg-slate-50 relative'>
            <div className='flex justify-between items-center py-8 mb-6 border-b bg-slate-50'>
                <h1 className='md:text-4xl text-2xl font-semibold'>Donner mon avis</h1>
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col md:gap-10 gap-8 md:w-7/12 w-full'>

                <div className='flex flex-col gap-1'>
                <label className='font-semibold text-xl'>Prénom</label>
                <input className='border py-3 pl-4 rounded-lg' name='prenom' type='text' placeholder='John' required/>
                </div>

                <div className='flex flex-col gap-1'>
                <label className='font-semibold text-xl'>Nom</label>
                <input className='border py-3 pl-4 rounded-lg' name="nom" type='text' placeholder='Payet' required />
                </div>

                <div className='flex flex-col gap-1'>
                <label className='font-semibold text-xl'>Commune</label>
                <input className='border py-3 pl-4 rounded-lg' name="commune" type='text' placeholder='Saint Denis' required />
                </div>

                <div className='flex flex-col gap-1'>
                <label className='font-semibold text-xl'>Email</label>
                <input onChange={(e: React.FormEvent<HTMLInputElement>) => handleEmailInput(e)} value={emailInput} className='border py-3 pl-4 rounded-lg' name="email" type='text' placeholder='johnpayet@mail.com' />
                </div>

                <div className='flex flex-col gap-1'>
                <label className='font-semibold text-xl'>Téléphone</label>
                <input onChange={(e: React.FormEvent<HTMLInputElement>) => handlePhoneInput(e)} value={phoneInput} className='border py-3 pl-4 rounded-lg' name="phone" type='text' placeholder='0692 12 34 56' required />
                </div>

                <div className='flex flex-col gap-1'>
                <label className='font-semibold text-xl'>Votre avis</label>
                <textarea className='px-4 py-2 rounded-lg border resize-none' name="avis" placeholder='' required />
                </div>
                
                {/* file selection */}
                <div className='flex flex-col gap-1'>
                <label htmlFor="fil" className='font-semibold text-xl'>Selectionner ma facture:</label>
                <input className='px-4 py-2 rounded-lg border resize-none bg-white' type="file" id="file" name="file" accept="image/png, image/jpeg, application/pdf" onChange={(e: ChangeEvent<HTMLInputElement>) => handleFile(e)} />
                </div>

                <div className='flex gap-1'>
                <input type='checkbox' onChange={(e) => setIsTermAccepted(e.target.checked)} />
                <p className='ml-2'>J&apos;accepte les <a className='underline cursor-pointer' href='/Condition_general.pdf' target="_blank" rel='noopener noreferrer'>conditions générale d&apos;utilisation</a></p>
                </div>

                {validEmail === false ? <p className='text-orange-400'>Veuillez renseigner une adresse Email valide.</p> : null}
                {validPhone === false ? <p className='text-orange-400'>Veuillez renseigner un numéro de Téléphone valide.</p> : null}

                <button disabled={!isTermAccepted} className='w-fit py-3 px-10 font-semibold rounded-full bg-blueKalipro hover:opacity-80 text-white' type='submit'>Envoyer</button>

            </form>
        </div>
    )
}

export default Donneravis