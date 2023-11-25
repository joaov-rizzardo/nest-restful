import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductRepository {
  private products: ProductEntity[] = [];

  async createProduct(data: ProductEntity) {
    this.products.push(data);
  }

  async findProducts() {
    return this.products;
  }

  async updateProduct(id: string, data: Partial<ProductEntity>) {
    const product = await this.findById(id);
    Object.entries(data).forEach(([key, value]) => {
      product[key] = value;
    });
    return product;
  }

  async deleteProduct(id: string) {
    const product = await this.findById(id);
    this.products = this.products.filter(
      (savedProduct) => savedProduct.id !== product.id,
    );
  }

  async findById(id: string) {
    const product = this.products.find((product) => product.id === id);
    if (product === undefined) {
      throw new Error('Product not found');
    }
    return product;
  }
}
