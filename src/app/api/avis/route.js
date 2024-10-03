import Avis from "../../(model)/Avis";
import { NextResponse } from "next/server";
import connectMongoDB from "@/app/lib/mongoose"

export async function POST(req, res){
    try{
        const body = await req.json();
        const { id, prenom, nom, commune, mail, phone, avis } = body;

        await connectMongoDB();

        await Avis.create({ id, prenom, nom, commune, mail, phone, avis });

        return NextResponse.json({ message: "Avis Created"}, {status: 201});

    }catch(error){
        return NextResponse.json({message: "Error: ", error}, {status: 500});
    }
}