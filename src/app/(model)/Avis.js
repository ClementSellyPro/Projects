import mongoose, { Schema } from "mongoose";

const avisSchema = new Schema(
    {
        id: Number,
        prenom: String,
        nom: String,
        commune: String,
        mail: String,
        phone: String,
        avis: String,
        fileSelection: mongoose.Schema.Types.ObjectId
        // fileSelection: {
        //     data: fileData, 
        //     contentType: fileURLToPath.mimetype
        // }
    },
    {
        timestamps: true
    }
)

const Avis = mongoose.models.Avis || mongoose.model("Avis", avisSchema);

export default Avis;