import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Email must be a string' })
  @IsEmail({}, { message: 'Email is not valid' })
  readonly email: string;

  @IsString({ message: 'Password must be a string' })
  @Length(4, 16, {
    message: 'Password must be at least 4 characters and must be less than 16',
  })
  readonly password: string;
}
