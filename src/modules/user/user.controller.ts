import { Controller, Post, Body } from '@nestjs/common';
import { User } from './user.interface';
import { UserService } from './user.service';

@Controller()
export class UserController {
        constructor(private readonly userService: UserService) { }
        @Post()
        async addUser( @Body() obj: User ):Promise<User> {
            return  await this.userService.insertUser(obj);
        }
    }
