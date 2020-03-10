import { Schema } from 'mongoose';

export const projectSchema: Schema = new Schema({
    title: { type: String, required: true },
    categorie: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    price : {type: Number, required: true },
    donation : {
        // id : {type: String, required: true },
        donate :{type: Number, required: true },
    }

})