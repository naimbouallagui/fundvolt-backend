import  { Document } from 'mongoose';
export interface Project extends Document{
    id: string,
    title: string,
    categorie: string,
    description: string,
    location: string,
    price: Number,
    donation :{
        // id: ,
        donate:Number,
    }
  
}