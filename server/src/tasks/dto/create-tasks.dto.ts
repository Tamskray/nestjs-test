import { IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString({ message: 'Task name must be a string' })
  readonly name: string;

  @IsString({ message: 'Task description must be a string' })
  readonly description: string;

  //   @IsString({ message: 'Due date must be a date (Example: 2024-04-15)' })
  readonly dueDate: Date;

  @IsString({ message: 'Task priority must be a string' })
  readonly priority: string;
}
