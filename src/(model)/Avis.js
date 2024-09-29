import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

mongoose.Promise = global.Promise;

const avisSchema = new Schema(
    {
        id: Number,
        prenom: String,
        nom: String,
        commune: String,
        mail: String,
        phone: String,
        avis: String,
    }
)

const Avis = mongoose.models.Avis || mongoose.model("Avis", avisSchema);

export default Avis;