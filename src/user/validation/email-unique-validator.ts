import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UserRepository } from '../user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailUniqueValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(value: any): Promise<boolean> {
    const userWithEmailExists =
      await this.userRepository.existsWithEmail(value);
    return !userWithEmailExists;
  }
}

export const EmailIsUnique = (options: ValidationOptions) => {
  return (object: Object, property: string) => {
    console.log({ object, property });
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: options,
      validator: EmailUniqueValidator,
      constraints: [],
    });
  };
};
