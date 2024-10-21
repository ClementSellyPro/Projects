import ContactArtisanEmail  from '@/components/email-template/ContactArtisanEmail';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const {prenom, nom, commune, email, phone, message, mailArtisan} = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'clement.selly@gmail.com',
      subject: 'Nouveau message pour KALIPRO',
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




// import { NextResponse } from "next/server";
// import connectMongoDB from "@/app/lib/mongoose"
// import ContactArtisan from "../../(model)/ContactArtisan";

// export async function POST(req, res){
//     try{
//         const body = await req.json();
//         const { idArtisan, prenom, nom, commune, mail, phone, message } = body;

//         await connectMongoDB();

//         await ContactArtisan.create({ idArtisan, prenom, nom, commune, mail, phone, message });

//         return NextResponse.json({ message: "ContactArtisan Envoyé"}, {status: 201});

//     }catch(error){
//         return NextResponse.json({message: "Error: ", error}, {status: 500});
//     }
// }