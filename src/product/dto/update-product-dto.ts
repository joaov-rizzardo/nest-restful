import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsUUID,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { ProductDetailsDTO } from './product-details-dto';
import { Type } from 'class-transformer';
import { ProductImageDTO } from './product-image-dto';

export class UpdateProductDTO {
  @IsUUID(undefined, {
    message: 'ID de usuário inválido',
  })
  @IsOptional()
  userId: string;

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
  @IsOptional()
  value: number;

  @Min(0, {
    message: 'A quantidade precisa ser maior ou igual a zero',
  })
  @IsOptional()
  quantity: number;

  @IsNotEmpty({
    message: 'A descrição não pode ser vazia',
  })
  @MaxLength(1000, {
    message:
      'A quantidade máxima de caracteres para a descrição(1000) foi excedida',
  })
  @IsOptional()
  description: string;

  @IsNotEmpty({
    message: 'A categoria não pode ser vazia',
  })
  @IsOptional()
  category: string;

  @IsArray({
    message: 'As caracteristicas devem ser uma lista',
  })
  @ArrayMinSize(3, {
    message: 'É necessário informar ao menos 3 caracteristicas',
  })
  @ValidateNested()
  @Type(() => ProductDetailsDTO)
  @IsOptional()
  details: ProductDetailsDTO[];

  @IsArray({
    message: 'As imagens devem ser uma lista',
  })
  @ArrayMinSize(1, {
    message: 'É necessário informar ao menos 1 imagem',
  })
  @ValidateNested()
  @Type(() => ProductImageDTO)
  @IsOptional()
  images: ProductImageDTO[];
}
