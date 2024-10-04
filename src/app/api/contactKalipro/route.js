import { NextResponse } from "next/server";
import connectMongoDB from "@/app/lib/mongoose"
import ContactKalipro from "../../(model)/ContactKalipro";

export async function POST(req, res){
    try{
        const body = await req.json();
        const { prenom, nom, commune, mail, phone, message } = body;

        await connectMongoDB();

        await ContactKalipro.create({ prenom, nom, commune, mail, phone, message });

        return NextResponse.json({ message: "ContactKalipro Envoyé"}, {status: 201});

    }catch(error){
        return NextResponse.json({message: "Error: ", error}, {status: 500});
    }
}