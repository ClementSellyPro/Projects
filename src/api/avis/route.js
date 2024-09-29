import Avis from "../../(model)/Avis";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const body = await req.json();
        const avisData = body.formData;
        await Avis.create(avisData);

        const res = NextResponse.next();

        res.headers.append('Access-Control-Allow-Credentials', "true");
        res.headers.append('ACCESS-CONTROL-ALLOW-ORIGIN', '*');
        res.headers.append('Access-Control-Allow-Methods', 'GET, DELETE, PATCH, POST, PUT');
        res.headers.append("X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");

        return NextResponse.json({ message: "Avis Created"}, {status: 201});
    }catch(error){
        return NextResponse.json({message: "Error: ", error}, {status: 500});
    }
}

export const config ={
    matcher: ['/api/:path*']
}