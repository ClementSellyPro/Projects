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

export default function AvisEmail({nom, prenom, email, phone, commune, avis}:AvisEmailProps){
    return(
        <Html>
        <div>
            <h1>Nouvelle avis Artisan</h1>

            <p>Nom: {nom}</p>
            <p>Prénom: {prenom}</p>
            <p>Email: {email}</p>
            <p>Téléphone: {phone}</p>
            <p>Commune: {commune}</p>
            <p>Avis: {avis}</p>
        </div>
        </Html>
    )
};