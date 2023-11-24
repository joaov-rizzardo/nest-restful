import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDTO } from './dto/create-product-dto';

@Controller('product')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() product: CreateProductDTO) {
    await this.productRepository.createProduct(product);
    return product;
  }

  @Get()
  async findProducts() {
    return await this.productRepository.findProducts();
  }
}
