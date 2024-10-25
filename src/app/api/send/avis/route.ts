import AvisEmail  from '@/components/email-template/AvisEmail';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}

export async function POST(req: NextRequest) {
  const formData = await req.formData()
    
  const nom = formData.get('nom') as string
  const prenom = formData.get('prenom') as string
  const commune = formData.get('commune') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const avis = formData.get('avis') as string
  const file = formData.get('file') as File | null

  console.log('Received form data:', { nom, prenom, commune, email, phone, avis });
  console.log('File:', file ? `${file.name} (${file.size} bytes)` : 'No file');

  let attachments = []
  if (file) {
    const buffer = Buffer.from(await file.arrayBuffer());
    console.log('File buffer created:', buffer.length, 'bytes');
    attachments.push({
      filename: file.name,
      content: buffer,
    })
    console.log('Attachment added:', file.name);
  }
  
  console.log('Attachment display: ', attachments);

  try {
    const emailResult = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'clement.selly@gmail.com',
      subject: 'Nouvelle avis',
      react: AvisEmail({ prenom, nom, commune, email, phone, avis }) as React.ReactElement,
      attachments: attachments,
    })
    console.log('Email sent:', emailResult);

    return NextResponse.json({ success: true, message: 'Email envoyé' });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur envoie email' }, { status: 500 });
  }
}
