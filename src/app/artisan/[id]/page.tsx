import React from 'react'
import { Artisan } from '@/type/ArtisanType';
import ArtisanDetail from '.';

export async function generateStaticParams() {
  const res = await fetch('http://localhost:3000/artisans.json');
  const data: Artisan[] = await res.json();
  
  // Return the list of possible params (id values)
  return data.map(artisan => ({
    id: artisan._id.toString(),
  }));
}

export default function ArtisanDetailPage({params}: {params:{id:string}}){
  return <ArtisanDetail params={{id:params}} />
}