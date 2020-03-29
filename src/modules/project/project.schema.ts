import { Schema } from 'mongoose';

export const projectSchema: Schema = new Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
    price : {type: Number, required: true },
    description: { type: String, required: true },
    // img: { data: Buffer, contentType: String },
    client: { type: Schema.Types.ObjectId, ref: 'Client' },
    // donation : {
    //     // id : {type: String, required: true },
    //     donate :{type: Number, required: true },
    // }

})