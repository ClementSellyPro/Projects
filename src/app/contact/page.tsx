"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'
import toast from 'react-hot-toast';
import ClickablePhone from '@/components/ClickablePhone';

const Contact = () => {

  const [isNumberDisplay, setIsNumberDisplay] = useState<Boolean>(false);
  const [isTermAccepted, setIsTermAccepted] = useState<Boolean>(false);
  const [emailInput, setEmailInput] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [phoneInput, setPhoneInput] = useState('');
  const [validPhone, setValidPhone] = useState(false);

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

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const prenom = formData.get('prenom');
    const nom = formData.get('nom');
    const commune = formData.get('commune');
    const email = formData.get('mail');
    const phone = formData.get('phone');
    const message = formData.get('message');

    const newMessage = {
      "prenom": prenom,
      "nom": nom,
      "commune": commune,
      "email": email,
      "phone": phone,
      "message": message};

    fetch('https://kalipro.re/api/contactKalipro', {
      method: 'POST',
      headers: {'Content-Type': 'aplication/json'},
      body: JSON.stringify(newMessage)
    })
    .catch(error => console.log(error));

    toast.success('Votre message a bien été envoyé');
    form.reset();
    router.push('/');
  }

  return (
    <div className='md:pl-20 lg:pr-20px pr-5px px-5 py-8  bg-slate-50 relative'>
        
      <div className='flex justify-between items-center py-8 mr-8 mb-6 border-b bg-slate-50 sticky top-0'>
        <h1 className='md:text-4xl text-2xl font-semibold'>Contacter <strong className='text-kalipro'>KALIPRO</strong></h1>

        {
          isNumberDisplay ? <ClickablePhone phoneNumber="0692 123456" />
          : 
          <button onClick={() => setIsNumberDisplay(true)} className='py-2 px-6 rounded-full border border-kalipro hover:bg-kalipro text-kalipro hover:text-white w-fit'>Nous appeler</button>
        }
      </div>

      <form onSubmit={(e: FormEvent) => handleSubmit(e)} className='flex flex-col md:gap-10 gap-8 md:w-7/12 w-full'>

        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-xl'>Prénom</label>
          <input className='border py-3 pl-4 rounded-lg' name='prenom' type='text' placeholder='Julien' required />
        </div>
        
        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-xl'>Nom</label>
          <input className='border py-3 pl-4 rounded-lg' name='nom' type='text' placeholder='Payet' required />
        </div>
        
        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-xl'>Commune</label>
          <input className='border py-3 pl-4 rounded-lg' name='commune' type='text' placeholder='Saint Denis' required />
        </div>
        
        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-xl'>Email</label>
          <input className='border py-3 pl-4 rounded-lg' name='mail' type='text' placeholder='julienpayet@mail.com' onChange={(e: React.FormEvent<HTMLInputElement>) => handleEmailInput(e)} value={emailInput} required />
        </div>
        
        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-xl'>Téléphone</label>
          <input  className='border py-3 pl-4 rounded-lg' name='phone' type='text' placeholder='0692 12 34 56' onChange={(e: React.FormEvent<HTMLInputElement>) => handlePhoneInput(e)} value={phoneInput} required />
        </div>
        
        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-xl'>Votre message</label>
          <textarea className='px-4 py-2 rounded-lg border resize-none' name='message' placeholder='Bonjour,&#10; nous recherchons un artisan afin de réaliser ... &#10; &#10; Vers quel artisan devons nous nous diriger pour ...' required />
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

export default Contact