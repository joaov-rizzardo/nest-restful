import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailIsUnique } from '../validation/email-unique-validator';

export class UpdateUserDTO {
  @IsNotEmpty({
    message: 'O nome não pode ser vazio',
  })
  @IsOptional()
  name: string;

  @IsEmail(
    {},
    {
      message: 'O e-mail informado é inválido',
    },
  )
  @EmailIsUnique({
    message: 'Já existe um usuário com este email',
  })
  @IsOptional()
  email: string;

  @MinLength(6, {
    message: 'A senha precisar ter pelo menos 6 caracteres',
  })
  @IsOptional()
  password: string;
}
