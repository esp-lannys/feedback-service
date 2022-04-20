import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, Max, Min } from "class-validator";

export class FilterFeedbackDto {
  @Type(() => Number)
  @IsNumber()
  @Max(50)
  @Min(1)
  limit: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  offset: number;
}

export class CreateFeedbackDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  images: string[];
}

export class UpdateFeedbackDto {
  @IsOptional()  
  title: string;

  @IsOptional()
  description: string;

  @IsOptional()
  images: string[];
}
