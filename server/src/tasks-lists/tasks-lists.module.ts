import { Module } from '@nestjs/common';
import { TasksListsController } from './tasks-lists.controller';
import { TasksListsService } from './tasks-lists.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TasksLists } from './tasks-lists.model';

@Module({
  controllers: [TasksListsController],
  providers: [TasksListsService],
  imports: [SequelizeModule.forFeature([TasksLists])],
})
export class TasksListsModule {}
