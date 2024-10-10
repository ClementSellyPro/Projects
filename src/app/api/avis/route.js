import Avis from "../../(model)/Avis";
import { NextResponse } from "next/server";
import connectMongoDB from "@/app/lib/mongoose"
import formidable from "formidable";
import fs from 'fs';

export const config = {
    api: {
        bodyParser: false,
    }
}

export async function POST(req, res){
    const form = new formidable.IncomingForm({
        maxFileSize: 5 * 1024 * 1024, // 5Mo limit size
        keepExtensions: true, // Keep file extensions
    })

    // Allowed file
    const allowedMimeTypes = ['application/pdf', 'image/png', 'image/jpeg'];

    form.parse(req, async (err, fields, files) => {
        if(err){
            if(err.message.includes('maxFileSize')){
                return res.status(400).json({ error: 'Le fichier est trop volumineux. Sa taille doit être inférieur à 5Mo.'})
            }
            return res.status(500).json({ error: 'Erreur pour analyser les données.'})
        }
    })

    const { file } = files; // Extract the uploaded file

    // Check if the file's MIME type is allowed
    if(!allowedMimeTypes.includes(file.mimetype)){
        return res.status(400).json({ error: 'Type de fichier incorrect.'})
    }

    try{
        await connectMongoDB();

        const body = await req.json();
        const { id, prenom, nom, commune, mail, phone, avis } = body;

        const bucket = new GridFSBucket(db);

        // Create a readable stream from the uploaded file
        const uploadStream = bucket.openUploadStream(file.originalFilename, {
            contentType: file.mimeType, // Set the correct MIME type
        })

        const fileStream = fs.createReadStream(file.filepath); // create a file stream

        // Pipe the file stream to GridFS
        fileStream.pipe(uploadStream);

        uploadStream.on('finish', async () => {
            res.status(200).json({
                message: 'File uploaded successfully',
                fileId: uploadStream.id, // return the GridFS file ID
            });
        });

        uploadStream.on('error', (error) => {
            console.error('Error uploading to GridFS: ', error);
            res.status(500).json({ error: 'Failed to upload file to GridFS'});
        })

        await Avis.create({ id, prenom, nom, commune, mail, phone, avis });

        return NextResponse.json({ message: "Avis Created"}, {status: 201});

    }catch(error){
        return NextResponse.json({message: "Error: ", error}, {status: 500});
    }
}