import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.interface';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
        constructor(@InjectModel('User') private readonly userModel: Model<User>) { }
        async validateUserJWT(payload): Promise<any> {
            return await this.userModel.findOne({username: payload.data.username}).exec();
          }
    }
