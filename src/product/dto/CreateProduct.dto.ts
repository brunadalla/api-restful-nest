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
  IsUUID,
} from 'class-validator';

export class ProductCharacteristicsDTO {
  @IsNotEmpty({ message: "The name can't be empty" })
  name: string;

  @IsNotEmpty({ message: "The description can't be empty" })
  description: string;
}

export class ProductImagesDTO {
  @IsUrl()
  url: string;

  @IsNotEmpty({ message: "The description can't be empty" })
  description: string;
}

export class CreateProductDTO {
  @IsUUID(undefined, { message: 'Invalid User ID' })
  usuarioId: string;

  @IsNotEmpty({ message: "The name can't be empty" })
  name: string;

  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @Min(1, { message: 'The minimum quantity is 1' })
  value: number;

  @IsNumber()
  @Min(0, { message: 'The minimum quantity is 0' })
  quantity: number;

  @IsNotEmpty({ message: "The description can't be empty" })
  @MaxLength(1000, { message: 'The maximum length is 1000' })
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

  @IsNotEmpty({ message: "The category can't be empty" })
  category: string;
}
