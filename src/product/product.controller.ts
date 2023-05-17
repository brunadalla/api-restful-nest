import {
  Body,
  Param,
  Controller,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDTO } from './dto/CreateProduct.dto';
import { ProductEntity } from './product.entity';
import { randomUUID } from 'crypto';
import { UpdateProductDTO } from './dto/UpdateProduct.dto';
import { ListProductDTO } from './dto/ListProduct.dto';

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() productData: CreateProductDTO) {
    const productEntity = new ProductEntity();

    productEntity.id = randomUUID();
    productEntity.name = productData.name;
    productEntity.userId = productData.userId;
    productEntity.value = productData.value;
    productEntity.quantity = productData.quantity;
    productEntity.description = productData.description;
    productEntity.category = productData.category;
    productEntity.characteristics = productData.characteristics;
    productEntity.images = productData.images;

    this.productRepository.save(productEntity);

    const {
      id,
      category,
      characteristics,
      description,
      images,
      name,
      quantity,
      userId,
      value,
    } = productEntity;

    return {
      product: new ListProductDTO(
        id,
        name,
        category,
        characteristics,
        description,
        images,
        quantity,
        userId,
        value,
      ),
      message: 'Product has been created',
    };
  }

  @Get()
  async listProducts() {
    return this.productRepository.list();
  }

  @Put('/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() productData: UpdateProductDTO,
  ) {
    const updatedProduct = await this.productRepository.update(id, productData);

    return {
      message: 'Product updated!',
      product: updatedProduct,
    };
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string) {
    const deletedProduct = await this.productRepository.remove(id);

    return {
      message: 'Product deleted!',
      product: deletedProduct,
    };
  }
}
