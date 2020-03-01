import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './modules/project/project.module';
import { UserModule } from './modules/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { database } from './config/database';
import { ClientModule } from './modules/client/client.module';

@Module({
  imports: [ProjectModule, UserModule, ClientModule, MongooseModule.forRoot(database, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
