import {
  Controller,
  Post,
  Body,
  Get,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksListsService } from './tasks-lists.service';
import { CreateTasksListsDto } from './dto/create-tasks-lists.dto';

@Controller('tasks-lists')
export class TasksListsController {
  constructor(private tasksListsService: TasksListsService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() tasksListsDto: CreateTasksListsDto) {
    return this.tasksListsService.createTasksLists(tasksListsDto);
  }

  @Get()
  getAll() {
    return this.tasksListsService.getAllTasksLists();
  }
}
