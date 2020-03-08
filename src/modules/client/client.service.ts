import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client } from './client.interface';
import { Model } from 'mongoose';
import { User } from '../user/user.interface';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel('Client') private readonly clientModel: Model<Client>,
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}
  async insertClient(obj: any) {
    if (
      !obj.username ||
      !obj.email ||
      !obj.password ||
      !obj.role ||
      !obj.address ||
      !obj.phone
    ) {
      throw new HttpException(
        { error: 'bad request', message: 'Attribute not valid' },
        400,
      );
    }

    const client = await this.clientModel.create(obj);
    obj['client'] = client._id;
    return await this.userModel.create(obj);
  }
  //   validate(obj){
  //       const usernameIsValid=validateUsername(obj.username)
  //       const mailIsValid=validateEmail(obj.email)
  //       const passwordIsValid=validatePassword(obj.password)
  //       const roleIsValid=validateRole(obj.role)
  //       const addressIsValid=validateAddress(obj.address)
  //       const phoneIsValid=validatePhone(obj.phone)
  //   }
  //   validateUsername(username:string){
  //       if(!isUsername(username)) throw new HttpException('username is not valid',400)
  //       return true
  //   }
  //   validateEmail(email:string){
  //       if(!isMail(email)) throw new HttpException('email is not valid',400)
  //       return true
  //   }
  //   validatePassword(password:string){
  //       if(!isPassword(password)) throw new HttpException('password is not valid',400)
  //       return true
  //   }
  //   validateRole(role:string){
  //       if(!isRole(role)) throw new HttpException('role is not valid',400)
  //       return true
  //   }
  //   validateAddress(address:string){
  //       if(!isAddress(address)) throw new HttpException('address is not valid',400)
  //       return true
  //   }
  //   validatePhone(phone){
  //       if(!isPhone(phone)) throw new HttpException('phone is not valid',400)
  //       return true
  //   }
}
