import { Module } from '@nestjs/common';
import { MulterAppController } from './multerapp.controller';
import { MulterModule } from '@nestjs/platform-express';
import { MulterAppService } from './multerapp.service';

@Module({imports: [MulterModule.register({
    dest: '/upload',
  }),],
  providers: [MulterAppService],
  controllers: [MulterAppController],
  exports: [MulterAppService]


})
export class MulterAppModule {}
