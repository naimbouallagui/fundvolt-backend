import { Controller, Post, Body } from '@nestjs/common';
import { User } from './user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('addclient')
  async addUser(@Body() obj: User): Promise<User> {
    if ((obj.role = 'client')) return await this.userService.insertUser(obj);
    // return  await this.investorService.investorClient(obj);
  }
}
