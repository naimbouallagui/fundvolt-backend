import { Schema } from 'mongoose';
export const clientSchema: Schema = new Schema({
    address: { type: String, required: true },
    phone: { type: Number, required: true },
})