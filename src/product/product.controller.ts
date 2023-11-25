import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDTO } from './dto/create-product-dto';
import { UpdateProductDTO } from './dto/update-product-dto';
import { ProductEntity } from './product.entity';
import { v4 as uuid } from 'uuid';

@Controller('product')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() product: CreateProductDTO) {
    const productEntity = new ProductEntity(
      uuid(),
      product.userId,
      product.name,
      product.value,
      product.quantity,
      product.description,
      product.category,
      product.details,
      product.images,
    );
    await this.productRepository.createProduct(productEntity);
    return productEntity;
  }

  @Get()
  async findProducts() {
    return await this.productRepository.findProducts();
  }

  @Patch('/:id')
  async updateProduct(@Param('id') id: string, @Body() data: UpdateProductDTO) {
    const product = await this.productRepository.updateProduct(id, data);
    return product;
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string) {
    await this.productRepository.deleteProduct(id);
    return { message: 'Product has been deleted' };
  }
}
