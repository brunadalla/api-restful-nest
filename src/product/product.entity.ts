export class ProductCharacteristicsEntity {
  name: string;
  description: string;
}

export class ProductImagesEntity {
  url: string;
  description: string;
}

export class ProductEntity {
  id: string;
  userId: string;
  name: string;
  value: number;
  quantity: number;
  description: string;
  characteristics: ProductCharacteristicsEntity[];
  images: ProductImagesEntity[];
  category: string;
}
