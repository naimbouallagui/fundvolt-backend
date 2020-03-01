import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.interface';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
        constructor(@InjectModel('User') private readonly userModel: Model<User>) { }
        async insertUser(obj: User) {
            return await this.userModel.create(obj);
        }
    }
