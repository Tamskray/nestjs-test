import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.model';
import { TasksListsModule } from './tasks-lists/tasks-lists.module';
import { TasksLists } from './tasks-lists/tasks-lists.model';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/tasks.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, TasksLists, Task],
      autoLoadModels: true,
    }),
    UsersModule,
    TasksListsModule,
    TasksModule,
  ],
})
export class AppModule {}
