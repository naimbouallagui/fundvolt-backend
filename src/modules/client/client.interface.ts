import  { Document } from 'mongoose';
export interface Client extends Document{
    _id: string,
    address: string,
    phone: number,
}