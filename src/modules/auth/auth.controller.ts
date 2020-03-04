import { Controller, Get, Post, Body, Request, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';

@UseInterceptors(LoggingInterceptor)
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('auth/login')
  async login(@Body() user) {
    return this.authService.login(user);
  }
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
