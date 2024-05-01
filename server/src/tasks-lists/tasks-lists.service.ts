import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TasksLists } from './tasks-lists.model';
import { CreateTasksListsDto } from './dto/create-tasks-lists.dto';

@Injectable()
export class TasksListsService {
  constructor(
    @InjectModel(TasksLists) private tasksListsRepository: typeof TasksLists,
  ) {}

  async createTasksLists(dto: CreateTasksListsDto) {
    const taskList = await this.tasksListsRepository.create(dto);
    return taskList;
  }

  async getAllTasksLists() {
    const tasksLists = await this.tasksListsRepository.findAll();
    return tasksLists;
  }
}
