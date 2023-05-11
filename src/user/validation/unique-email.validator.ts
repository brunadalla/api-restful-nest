import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user.repository';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(value: any): Promise<boolean> {
    const userAlreadyExists = await this.userRepository.checkEmail(value);
    return !userAlreadyExists;
  }
}

export const EmailIsUnique = (validationOptions: ValidationOptions) => {
  return (object: any, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: validationOptions,
      constraints: [],
      validator: UniqueEmailValidator,
    });
  };
};
