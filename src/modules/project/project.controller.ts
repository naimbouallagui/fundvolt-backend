/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Post, Body, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './project.interface';
import { AuthGuard } from '../passport/auth.guard';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';

@Controller('project')
@UseInterceptors(LoggingInterceptor)
export class ProjectController {
  constructor(private readonly ProjectService: ProjectService) {}
  
  @UseGuards(AuthGuard('jwt', ['client']))
  @Post('addproject')
  async addProject(@Body() obj: Project): Promise<Project> {
    return await this.ProjectService.insertProject(obj);
  }
  @Get()
    async getAllProjects() {
        const projects = await this.ProjectService.getProjects();
        return projects;
    }
}
