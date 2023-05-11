import { IsEmail, MinLength, IsNotEmpty } from 'class-validator';
import { EmailIsUnique } from '../validation/unique-email.validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: "The name can't be empty" }) //message: mensagem de erro
  name: string;

  @IsEmail(undefined, { message: 'The email is invalid' })
  @EmailIsUnique({ message: 'Email is already being used' })
  email: string;

  @MinLength(6, { message: 'The password must have at least 6 characters' })
  password: string;
}
