import Avis from "../../(model)/Avis";
import { NextResponse } from "next/server";
import connectMongoDB from "@/app/lib/mongoose"
// import upload from "../../lib/multer";
import nodemailer from 'nodemailer';
import multer from "multer";
import fs from 'fs';


// const upload = multer({
//     storage: multer.diskStorage({
//         destination: './uploads',
//         filename: (req, file, cb) => {
//             cb(null, Date.now() + path.extname(file.originalname));
//         }
//     })
// });

// const apiRoute = nextConnect({
//     onError(error, req, res) {
//         res.status(501).json({error: `Something wrong happened ${error.message}`})
//     },
//     onNoMatch(req, res){
//         res.status(405).json({ error: `Method '${req.method}' not alloowed`})
//     }
// });

// apiRoute.use(upload.single('fileSelection'));

// apiRoute.post(async (req, res) => {
//     await connectMongoDB();
//     const { prenom, nom, commune, mail, phone, avis, fileSelection } = req.body;

//     const newSubmission = new Submission({
//         prenom, nom, commune, mail, phone, avis, fileSelection
//     })

//     const transporter = nodemailer. createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS
//         }
//     });

//     const mailOptions = {
//         from: process.env.EMAIL.USER,
//         to: mail,
//         subject: 'Form submission with file attachment',
//         text: `The file from ${prenom} ${nom} has been sent`,
//         attachments:[
//             {
//                 filename: req.file.filename,
//                 path: path.join(process.cwd(), 'uploads', req.file.filename)
//             }
//         ]
//     };

//     try{
//         await transporter.sendMail(mailOptions);

//         fs.unlinkSync(path.join(process.cwd(), 'uploads', req.file.filename));

//         res.status(200).json({ message: 'Email sent successfully'});
//     }catch(error){
//         res.status(500).json({error: 'Failed to send email', details: error.message})
//     }
// })

// export default apiRoute;

// export const config = {
//     api: {
//         bodyParser: false, // Disable body parser for file uploads
//     }
// }

/*
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
*/