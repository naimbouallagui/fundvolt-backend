import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './modules/project/project.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [ ProjectModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
