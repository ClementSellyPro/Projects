import React from 'react'
import { Artisan } from '@/type/ArtisanType';
import ArtisanMail from '.';

import { promises as fs } from 'fs'
import path from 'path'

// async function getData(): Promise<Artisan[]> {
//   try{
//     // console.log('ARTISAN EMAIL ::: Fetching data...');
//     const res = await fetch('/artisans.json', { 
//       cache: 'force-cache',
//       signal: AbortSignal.timeout(5000)
//     });
//     // console.log('Fetch response:', res.status, res.statusText);
//     // const text = await res.text(); 
//     // console.log('Raw response:', text);

//     let data;
//     try{
//       data = await res.json();
//     }catch (parseError){
//       // console.error('Error parsing JSON: ', parseError)
//       return []
//     }
//     // console.error("Parsed Data :", data);
//     return data;

//   }catch (error){
//     // console.log("Erreur fetch DATA: ",error)
//     return []
//   }
// }

async function getData(): Promise<Artisan[]> {
  // Get the path of the json file
  const jsonDirectory = path.join(process.cwd(), 'public')
  // Read the json file
  const fileContents = await fs.readFile(jsonDirectory + '/artisans.json', 'utf8')
  // Parse the data
  const data: Artisan[] = JSON.parse(fileContents)
  return data
}



  // const res = await fetch('http://localhost:3000/artisans.json', {cache: 'force-cache'});
  // const data: Artisan[] = await res.json();

export async function generateStaticParams() {

  const data: Artisan[] = await getData()
  // console.log('Generating static params for:', data.map(item => item._id));

  if (data.length === 0) {
    // console.warn('No items found for static params generation');
    return [];
  }
  
  return data.map(artisan => ({
    id: artisan._id.toString(),  // Make sure the ID is a string
  }));
}

export default async function ArtisanMailPage({params}: {params:{id:string}}){
  const data: Artisan[] = await getData();

  return <ArtisanMail params={{id:params}} data={data} />
}