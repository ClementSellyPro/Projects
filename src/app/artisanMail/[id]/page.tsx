import React from 'react'
import { Artisan } from '@/type/ArtisanType';
import ArtisanMail from '.';

export async function generateStaticParams() {
  // Fetch or define your list of IDs
  const res = await fetch('http://localhost:3000/artisans.json');
  const data: Artisan[] = await res.json();

  // Return the list of possible params (id values)
  return data.map(artisan => ({
    id: artisan._id.toString(),  // Make sure the ID is a string
  }));
}

export default function ArtisanMailPage({params}: {params:string}){
  return <ArtisanMail params={{_id:params}} />
}