import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({
    message: 'O nome não pode ser vazio',
  })
  name: string;

  @IsEmail(
    {},
    {
      message: 'O e-mail informado é inválido',
    },
  )
  email: string;

  @MinLength(6, {
    message: 'A senha precisar ter pelo menos 6 caracteres',
  })
  password: string;
}
