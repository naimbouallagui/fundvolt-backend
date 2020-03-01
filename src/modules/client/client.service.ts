import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client } from './client.interface';
import { Model } from 'mongoose';
import { User } from '../user/user.interface';

@Injectable()
export class ClientService {
    constructor(@InjectModel('Client') private readonly clientModel: Model<Client>,
                @InjectModel('User') private readonly userModel: Model<User>) { }
    async insertClient(obj: Client) {
       const client =  await this.clientModel.create(obj);
       obj['client'] = client._id;
       return await this.userModel.create(obj);
    }
}
