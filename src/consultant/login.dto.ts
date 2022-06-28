import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { REGAX_PASSWORD } from '../common/constant';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  username: string;

  @IsNotEmpty()
  @Matches(REGAX_PASSWORD)
  password: string;
}
