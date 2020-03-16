import { Controller, Post, Body, UseInterceptors } from '@nestjs/common';
import { User } from './user.interface';
import { UserService } from './user.service';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';

@Controller('user')
@UseInterceptors(LoggingInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

}
