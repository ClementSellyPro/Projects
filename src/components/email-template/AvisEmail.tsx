import * as React from 'react';

interface AvisEmailPros{
    nom: string,
    prenom: string,
    email: string,
    phone: string,
    commune: string,
    avis: string,
}

export const AvisEmail: React.FC<Readonly<AvisEmailPros>> = ({
    nom, prenom, email, commune, avis
}) => (
    <div>
        <h1>Nouvelle avis poster</h1>

        <p>Nom: {nom}</p>
        <p>Prenom: {prenom}</p>
        <p>Email: {email}</p>
        <p>Commune: {commune}</p>
        <p>Avis: {avis}</p>
    </div>
);