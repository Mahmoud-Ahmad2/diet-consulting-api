import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class AnswerDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsArray()
  recommendations: string;
}
