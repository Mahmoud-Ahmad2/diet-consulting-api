import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class VoteDto {
  @IsNotEmpty()
  @IsEnum(['up', 'down'])
  @IsString()
  vote: string;
}
