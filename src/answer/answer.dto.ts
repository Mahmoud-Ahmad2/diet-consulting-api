import { IsNotEmpty, IsString } from 'class-validator';

export class AnswerDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  recommendations: string;
}
