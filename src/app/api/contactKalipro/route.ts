import ContactEmail  from '@/components/email-template/ContactEmail';
import { Resend } from 'resend';

require('dotenv').config();

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  const {prenom, nom, commune, email, phone, message} = await request.json();

  try {    
    const { data, error } = await resend.emails.send({
      from: 'KALIPRO Réunion <direction@kalipro.re>',
      to: 'clement.selly@gmail.com',
      subject: 'Nouveau message pour KALIPRO',
      react: ContactEmail({ nom, prenom, email, phone, commune, message }),
    });
    
    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}