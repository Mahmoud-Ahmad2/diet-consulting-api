import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { REGEX_PASSWORD } from '../common/constant';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  username: string;

  @IsNotEmpty()
  @Matches(REGEX_PASSWORD)
  password: string;
}
