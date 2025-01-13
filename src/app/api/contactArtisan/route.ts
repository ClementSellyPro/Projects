import ContactArtisanEmail  from '@/components/email-template/ContactArtisanEmail';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const {prenom, nom, commune, email, phone, message, mailArtisan} = await request.json();



  try {
    const { data, error } = await resend.emails.send({
      from: 'KALIPRO Réunion <direction@kalipro.re>',
      to: mailArtisan,
      cc: 'direction@kalipro.re',
      subject: 'Nouveau message depuis kalipro.re',
      react: ContactArtisanEmail({ nom, prenom, email, phone, commune, message, mailArtisan }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);

  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
