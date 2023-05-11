import { IsEmail, MinLength, IsNotEmpty, IsOptional } from 'class-validator';
import { EmailIsUnique } from '../validation/unique-email.validator';

export class UpdateUserDTO {
  @IsNotEmpty({ message: "The name can't be empty" }) //message: mensagem de erro
  @IsOptional()
  name: string;

  @IsEmail(undefined, { message: 'The email is invalid' })
  @EmailIsUnique({ message: 'Email is already being used' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'The password must have at least 6 characters' })
  @IsOptional()
  password: string;
}
