import Avis from "../../(model)/Avis";
import { NextResponse } from "next/server";

export async function POST(req, res){
    try{
        // res.setHeader('Access-Control-Allow-Credentials', true);
        // res.setHeader('ACCESS-CONTROL-ALLOW-ORIGIN', '*');
        // res.setHeader('Access-Control-Allow-Methods', 'GET, DELETE, PATCH, POST, PUT');
        // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        console.log('yes yes');

        const body = await req.json();
        const { id, prenom, nom, commune, mail, phone, avis } = body;

        const newAvis = new Avis({ id, prenom, nom, commune, mail, phone, avis });
        await newAvis.save();

        return NextResponse.json({ message: "Avis Created"}, {status: 201});

    }catch(error){
        return NextResponse.json({message: "Error: ", error}, {status: 500});
    }
}

export const config ={
    matcher: ['/api/:path*']
}