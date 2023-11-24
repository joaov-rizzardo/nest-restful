import { IsUrl, MaxLength } from 'class-validator';

export class ProductImageDTO {
  @IsUrl(
    {},
    {
      message: 'A URL da imagem é invalida',
    },
  )
  url: string;

  @MaxLength(1000, {
    message:
      'O tamanho máximo da descrição da caracteristicas é de 1000 caracteres',
  })
  description: string;
}
