import { IsEmail, Matches, IsString, IsNotEmpty } from 'class-validator';
import { REGAX_PASSWORD } from '../common/constant';

export class SignupConsultantDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @Matches(REGAX_PASSWORD)
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
