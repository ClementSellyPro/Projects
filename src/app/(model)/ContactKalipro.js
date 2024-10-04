import mongoose, { Schema } from "mongoose";

const contactKaliproSchema = new Schema(
    {
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

const ContactKalipro = mongoose.models.ContactKalipro || mongoose.model("ContactKalipro", contactKaliproSchema);

export default ContactKalipro;