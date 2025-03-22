import AvisEmail from "@/components/email-template/AvisEmail";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const nom = formData.get("nom") as string;
  const prenom = formData.get("prenom") as string;
  const commune = formData.get("commune") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const avis = formData.get("avis") as string;
  const file = formData.get("file") as File | null;

  let attachments = [];
  if (file) {
    const buffer = Buffer.from(await file.arrayBuffer());

    attachments.push({
      filename: file.name,
      content: buffer,
    });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "KALIPRO Réunion <direction@kalipro.re>",
      to: "clement.selly@gmail.com",
      subject: "Nouvelle avis",
      react: AvisEmail({
        prenom,
        nom,
        commune,
        email,
        phone,
        avis,
      }) as React.ReactElement,
      attachments: attachments,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Erreur envoie email" }, { status: 500 });
  }
}
