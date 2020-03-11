import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './project.interface';
import { Model } from 'mongoose';


@Injectable()

export class ProjectService {
    constructor(@InjectModel('Project') private readonly projectModel: Model<Project>) { }
    async insertProject(obj: Project) {
        return await this.projectModel.create(obj);
    }
    

}
