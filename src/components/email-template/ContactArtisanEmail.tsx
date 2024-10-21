import { Html } from "@react-email/components";
import * as React from 'react';

interface ContactEmailProps{
    nom: string,
    prenom: string,
    email: string,
    phone: string,
    commune: string,
    message: string,
    mailArtisan: string
}

export default function ContactEmail({nom, prenom, email, commune, phone, message, mailArtisan}:ContactEmailProps){
    return(
        <Html>
        <div>
            <h1>Nouveau message depuis le site KALIPRO</h1>

            <p>Nom: {nom}</p>
            <p>Prénom: {prenom}</p>
            <p>Email: {email}</p>
            <p>Mail Artisan: {mailArtisan}</p>
            <p>Téléphone: {phone}</p>
            <p>Commune: {commune}</p>
            <p>Message: {message}</p>
        </div>
        </Html>
    )
};