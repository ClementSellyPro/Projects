import React from 'react'
import { Artisan } from '@/type/ArtisanType';
import ArtisanDetail from '.';

import { promises as fs } from 'fs'
import path from 'path'


// async function getData(): Promise<Artisan[]> {
//   try{
//     const res = await fetch('/artisans.json', { 
//       cache: 'force-cache',
//       signal: AbortSignal.timeout(5000)
//     });
//     const text = await res.text(); 

//     let data;
//     try{
//       data = JSON.parse(text);
//     }catch (parseError){
//       return []
//     }
//     return data;

//   }catch (error){
//     return []
//   }
// }

async function getData(): Promise<Artisan[]> {
  const jsonDirectory = path.join(process.cwd(), 'public')
  // Read the json file
  const fileContents = await fs.readFile(jsonDirectory + '/artisans.json', 'utf8')
  // Parse the data
  const data: Artisan[] = JSON.parse(fileContents)
  return data
}

export async function generateStaticParams() {
  
  const data: Artisan[] = await getData();
  
  if (data.length === 0) {
    return [];
  }

  // Return the list of possible params (id values)
  return data.map(artisan => ({
    id: artisan._id.toString(),
  }));
}

export default async function ArtisanDetailPage({params}: {params:{id:string}}){
  const data: Artisan[] = await getData();

  return <ArtisanDetail params={{id:params}} data={data} />
}