import {
  ProductCharacteristicsDTO,
  ProductImagesDTO,
} from './CreateProduct.dto';

export class ListProductDTO {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly category: string,
    readonly characteristics: ProductCharacteristicsDTO[],
    readonly description: string,
    readonly images: ProductImagesDTO[],
    readonly quantity: number,
    readonly userId: string,
    readonly value: number,
  ) {}
}
