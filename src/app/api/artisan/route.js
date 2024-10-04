import Artisan from "../../(model)/Artisan";
import { NextResponse } from "next/server";
import connectMongoDB from "@/app/lib/mongoose"

export async function POST(req, res){
    try{
        const body = await req.json();
        const { 
            name, domaine_artisan, phone, mail, location, secteur,
            intervention_img, competences, presentation, qualification_assurances,
            photo, avis
         } = body;

        await connectMongoDB();

        await Artisan.create({ 
            name, domaine_artisan, phone, mail, location, secteur,
            intervention_img, competences, presentation, qualification_assurances,
            photo, avis });

        return NextResponse.json({ message: "Artisan Created"}, {status: 201});

    }catch(error){
        return NextResponse.json({message: "Error: ", error}, {status: 500});
    }
}