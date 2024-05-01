import { IsString, Min } from 'class-validator';

export class CreateTasksListsDto {
  @IsString({ message: 'Task list name must be a string' })
  // @Min(4, {
  //   message: 'Task list name must be at least 4 characters',
  // })
  readonly name: string;
}
