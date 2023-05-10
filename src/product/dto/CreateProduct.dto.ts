import { Type } from 'class-transformer';
import {
  IsNumber,
  ValidateNested,
  IsArray,
  IsNotEmpty,
  MaxLength,
  IsUrl,
  Min,
  ArrayMinSize,
} from 'class-validator';

export class ProductCharacteristicsDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;
}

export class ProductImagesDTO {
  @IsUrl()
  url: string;

  @IsNotEmpty()
  description: string;
}

export class CreateProductDTO {
  @IsNotEmpty()
  name: string;

  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @Min(1)
  value: number;

  @IsNumber()
  @Min(0, { message: 'Minimun quantity' })
  quantity: number;

  @IsNotEmpty()
  @MaxLength(1000)
  description: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => ProductCharacteristicsDTO)
  characteristics: ProductCharacteristicsDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ProductImagesDTO)
  images: ProductImagesDTO[];

  @IsNotEmpty()
  category: string;
}
