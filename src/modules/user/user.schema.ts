import { Schema } from 'mongoose';
export const userSchema: Schema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    status: { type: String, required: true },
    client: { type: Schema.Types.ObjectId, ref: 'Client' },
})