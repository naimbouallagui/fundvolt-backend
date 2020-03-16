import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Investor } from './investor.interface';
import { Model } from 'mongoose';
import { User } from '../user/user.interface';

@Injectable()
export class InvestorService {
  constructor(
    @InjectModel('Investor') private readonly investorModel: Model<Investor>,
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}
  async insertInvestor(obj: any) {
    if (
      !obj.username ||
      !obj.email ||
      !obj.password ||
      !obj.role) {
      throw new HttpException(
        { error: 'bad request', message: 'Attribute not valid' },
        400,
      );
    }

    const investor = await this.investorModel.create(obj);
    obj['investor'] = investor._id;
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
