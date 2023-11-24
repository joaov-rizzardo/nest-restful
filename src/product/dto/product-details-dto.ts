import { IsNotEmpty, MaxLength } from 'class-validator';

export class ProductDetailsDTO {
  @IsNotEmpty({
    message: 'O nome da caracteristica não pode ser vazio',
  })
  name: string;

  @MaxLength(1000, {
    message:
      'O tamanho máximo da descrição da caracteristicas é de 1000 caracteres',
  })
  description: string;
}
