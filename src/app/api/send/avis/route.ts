import AvisEmail  from '@/components/email-template/AvisEmail';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const {prenom, nom, commune, email, phone, avis} = await request.json();

    try {
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'clement.selly@gmail.com',
        subject: 'Nouvelle AVIS Artisan',
        react: AvisEmail({ nom, prenom, email, phone, commune, avis }),
      });
  
      if (error) {
        return Response.json({ error }, { status: 500 });
      }
  
      return Response.json(data);
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  }