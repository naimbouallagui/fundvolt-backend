import { Controller, Post, Body } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './project.interface';

@Controller('project')
export class ProjectController {constructor(private readonly ProjectService: ProjectService) {}
@Post('addproject')
async addProject(@Body() obj: Project): Promise<Project> {
return await this.ProjectService.insertProject(obj);
 
}
}
