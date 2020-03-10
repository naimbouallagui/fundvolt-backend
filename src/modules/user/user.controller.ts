import { Controller, Post, Body } from '@nestjs/common';
import { User } from './user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

}
