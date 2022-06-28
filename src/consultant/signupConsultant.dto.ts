import { IsEmail, Matches, IsString, IsNotEmpty } from 'class-validator';
import { REGEX_PASSWORD } from '../common/constant';

export class SignupConsultantDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @Matches(REGEX_PASSWORD)
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  middleName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;
}
