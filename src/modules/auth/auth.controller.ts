import { Controller, Get, Post, Body, Request } from '@nestjs/common';
import { AuthService } from './auth.service';

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
