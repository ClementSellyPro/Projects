import { Html } from "@react-email/components";
import * as React from 'react';

interface AvisEmailProps{
    nom: string,
    prenom: string,
    email: string,
    phone: string,
    commune: string,
    avis: string,
}

export default function AvisEmail({nom, prenom, email, commune, avis}:AvisEmailProps){
    return(
        <Html>
        <div>
            <h1>Nouvelle avis Artisan</h1>

            <p>Nom: {nom}</p>
            <p>Prenom: {prenom}</p>
            <p>Email: {email}</p>
            <p>Commune: {commune}</p>
            <p>Avis: {avis}</p>
        </div>
        </Html>
    )
};
// export const AvisEmail: React.FC<Readonly<AvisEmailPros>> = ({
//     nom, prenom, email, commune, avis
// }) => (
//     <Html>
//     <div>
//         <h1>Nouvelle avis poster</h1>

//         <p>Nom: {nom}</p>
//         <p>Prenom: {prenom}</p>
//         <p>Email: {email}</p>
//         <p>Commune: {commune}</p>
//         <p>Avis: {avis}</p>
//     </div>
//     </Html>
// );