import mongoose, { Schema } from "mongoose";

const artisanSchema = new Schema(
    {
        name: String,
        domaine_artisan: String,
        phone: String,
        mail: String,
        location: String,
        secteur: [{type: String}],
        intervention_img: String,
        competences: [{type: String}],
        presentation: String,
        qualification_assurances: [{type: String}],
        photo: {type: Buffer},
        avis: [{_id: Number, client: String, secteur: String, avis: String, artisan: String, domaine_artisan: String}],
    }
)

const Artisan = mongoose.models.Artisan || mongoose.model("Artisan", artisanSchema);

export default Artisan;