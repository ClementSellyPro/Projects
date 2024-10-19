import { AvisEmail } from '@/components/email-template/AvisEmail';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const {prenom, nom, commune, mail, phone, avis} = await request.json();

    try {
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['contact.ellys@gmail.com'],
        subject: 'Hello world',
        react: AvisEmail({ nom: nom, prenom:prenom, email: mail, phone: phone, commune: commune, avis: avis }),
      });
  
      if (error) {
        return Response.json({ error }, { status: 500 });
      }
  
      return Response.json(data);
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  }