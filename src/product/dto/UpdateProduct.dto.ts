import { Type } from 'class-transformer';
import {
  IsNumber,
  ValidateNested,
  IsArray,
  IsNotEmpty,
  MaxLength,
  Min,
  ArrayMinSize,
  IsOptional,
} from 'class-validator';
import {
  ProductCharacteristicsDTO,
  ProductImagesDTO,
} from './CreateProduct.dto';

export class UpdateProductDTO {
  @IsOptional()
  @IsNotEmpty({ message: "The name can't be empty" })
  name: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @Min(1, { message: 'The minimum quantity is 1' })
  value: number;

  @IsOptional()
  @IsNumber()
  @Min(0, { message: 'The minimum quantity is 0' })
  quantity: number;

  @IsOptional()
  @IsNotEmpty({ message: "The description can't be empty" })
  @MaxLength(1000, { message: 'The maximum length is 1000' })
  description: string;

  @IsOptional()
  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => ProductCharacteristicsDTO)
  characteristics: ProductCharacteristicsDTO[];

  @IsOptional()
  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ProductImagesDTO)
  images: ProductImagesDTO[];

  @IsOptional()
  @IsNotEmpty({ message: "The category can't be empty" })
  category: string;
}
