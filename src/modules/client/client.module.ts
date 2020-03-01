import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { MongooseModule } from '@nestjs/mongoose';
import { clientSchema } from './client.schema';
import { ClientController } from './client.controller';
import { userSchema } from '../user/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Client', schema: clientSchema }]),
            MongooseModule.forFeature([{ name: 'User', schema: userSchema }])],
  controllers: [ClientController],
  providers: [ClientService]
})
export class ClientModule {}
