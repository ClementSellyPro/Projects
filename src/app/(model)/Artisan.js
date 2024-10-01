import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

mongoose.Promise = global.Promise;

const artisanSchema = new Schema(
    {
        id: Number,
        name: String,
        domaine_artisan: String,
        phone: String,
        mail: String,
        location: String,
        secteur: [{type: String}],
        intervention_img: String,
        disponibilite: Boolean,
        temps_disponibilite: Number,
        competences: [{type: String}],
        presentation: String,
        qualification_assurances: [{type: String}],
        photo: {type: Buffer},
        avis: [{_id: Number, client: String, secteur: String, avis: String, artisan: String, domaine_artisan: String}],
    }
)

const Artisan = mongoose.models.Artisan || mongoose.model("Artisan", artisanSchema);

export default Artisan;