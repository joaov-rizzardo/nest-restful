import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository {
  private products = [];

  async createProduct(data) {
    this.products.push(data);
  }

  async findProducts() {
    return this.products;
  }
}
