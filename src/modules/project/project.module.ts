import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { projectSchema } from './project.schema';

@Module({imports: [MongooseModule.forFeature([{ name: 'Project', schema: projectSchema }])],

  providers: [ProjectService],
  controllers: [ProjectController],
  exports: [ProjectService]

})
export class ProjectModule {}
