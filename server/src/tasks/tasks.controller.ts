import {
  Controller,
  Post,
  Body,
  Get,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() taskDto: CreateTaskDto) {
    return this.taskService.createTask(taskDto);
  }

  @Get()
  getAll() {
    return this.taskService.getAllTasks();
  }
}
