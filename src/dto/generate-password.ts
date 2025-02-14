import { IsBoolean, IsInt, Min, Max } from 'class-validator';

export class GeneratePasswordDto {
  @IsBoolean()
  includeUppercase: boolean;

  @IsBoolean()
  includeLowercase: boolean;

  @IsBoolean()
  includeDigits: boolean;

  @IsBoolean()
  includeSymbols: boolean;

  @IsInt()
  @Min(8)
  @Max(32)
  length: number;
}
