import { Html } from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  nom: string;
  prenom: string;
  email: string;
  phone: string;
  commune: string;
  message: string;
  artisan: string;
  mailArtisan: string;
}

export default function ContactEmail({
  nom,
  prenom,
  email,
  commune,
  phone,
  message,
  artisan,
  mailArtisan,
}: ContactEmailProps) {
  return (
    <Html>
      <div style={main}>
        <h1>Vous avez reçu un nouveau message depuis le site KALIPRO.</h1>
        <br />

        <p>
          <span style={bold}>Prénom: </span> {prenom}
        </p>
        <p>
          <span style={bold}>Nom: </span> {nom}
        </p>
        <p>
          <span style={bold}>Commune: </span> {commune}
        </p>
        <p>
          <span style={bold}>Message: </span> {message}
        </p>
        <p>
          <span style={bold}>Artisan: </span> {artisan}
        </p>
        <br />

        <p>
          Vous pouvez répondre à ce message à l&apos;adresse suivante:
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          Ou contacter la personne directement par téléphone :
          <a href={`tel:${phone}`}>{phone}</a>
        </p>
      </div>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const bold = {
  fontWeight: "bold",
};
