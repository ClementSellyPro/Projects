import Artisan from "../../(model)/Artisan";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const body = await req.json();
        const artisanData = body.formData;
        await Artisan.create(artisanData);

        return NextResponse.json({ message: "Artisan Created"}, {status: 201});
    }catch(error){
        return NextResponse.json({message: "Error: ", error}, {status: 500});
    }
}