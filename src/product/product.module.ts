import { Module } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { ProductController } from './product.controller';

@Module({
  providers: [ProductRepository],
  controllers: [ProductController],
})
export class ProductModule {}
