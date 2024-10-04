import mongoose, { Schema } from "mongoose";

const contactArtisanSchema = new Schema(
    {
        idArtisan: String,
        prenom: String,
        nom: String,
        commune: String,
        mail: String,
        phone: String,
        message: String,
    },
    {
        timestamps: true
    }
)

const ContactArtisan = mongoose.models.ContactArtisan || mongoose.model("ContactArtisan", contactArtisanSchema);

export default ContactArtisan;