import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductRepository {
  private products: ProductEntity[] = [];

  async save(product: ProductEntity) {
    this.products.push(product);
  }

  async list() {
    return this.products;
  }

  private searchById(id: string) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw new Error('Product does not exist');
    }

    return product;
  }

  async update(id: string, data: Partial<ProductEntity>) {
    const oldData = ['id', 'userId'];
    const product = this.searchById(id);

    Object.entries(data).forEach(([key, value]) => {
      if (oldData.includes(key)) {
        return;
      }
      product[key] = value;
    });

    return product;
  }

  async remove(id: string) {
    const removedProduct = this.searchById(id);
    this.products = this.products.filter((product) => product.id !== id);

    return removedProduct;
  }
}
