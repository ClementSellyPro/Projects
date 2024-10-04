import { NextResponse } from "next/server";
import connectMongoDB from "@/app/lib/mongoose"
import ContactArtisan from "../../(model)/ContactArtisan";

export async function POST(req, res){
    try{
        const body = await req.json();
        const { idArtisan, prenom, nom, commune, mail, phone, message } = body;

        await connectMongoDB();

        await ContactArtisan.create({ idArtisan, prenom, nom, commune, mail, phone, message });

        return NextResponse.json({ message: "ContactArtisan Envoyé"}, {status: 201});

    }catch(error){
        return NextResponse.json({message: "Error: ", error}, {status: 500});
    }
}