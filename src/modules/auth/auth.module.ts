import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from '../passport/jwt.strategy';
import { UserModule } from '../user/user.module';
import { userSchema } from '../user/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: userSchema}]),
    UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}