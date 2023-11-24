import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { ProductDetailsDTO } from './product-details-dto';
import { Type } from 'class-transformer';
import { ProductImageDTO } from './product-image-dto';

export class CreateProductDTO {
  @IsNotEmpty({
    message: 'O nome não pode ser vazio',
  })
  name: string;

  @IsPositive({
    message: 'O valor do produto precisa ser positivo',
  })
  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message: 'O valor precisa ter duas casas decimais',
    },
  )
  value: number;

  @Min(0, {
    message: 'A quantidade precisa ser maior ou igual a zero',
  })
  quantity: number;

  @IsNotEmpty({
    message: 'A descrição não pode ser vazia',
  })
  @MaxLength(1000, {
    message:
      'A quantidade máxima de caracteres para a descrição(1000) foi excedida',
  })
  description: string;

  @IsNotEmpty({
    message: 'A categoria não pode ser vazia',
  })
  category: string;

  @IsArray({
    message: 'As caracteristicas devem ser uma lista',
  })
  @ArrayMinSize(3, {
    message: 'É necessário informar ao menos 3 caracteristicas',
  })
  @ValidateNested()
  @Type(() => ProductDetailsDTO)
  details: ProductDetailsDTO[];

  @IsArray({
    message: 'As imagens devem ser uma lista',
  })
  @ArrayMinSize(1, {
    message: 'É necessário informar ao menos 1 imagem',
  })
  @ValidateNested()
  @Type(() => ProductImageDTO)
  images: ProductImageDTO[];
}
