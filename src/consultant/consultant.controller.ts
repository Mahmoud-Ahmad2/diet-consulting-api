import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ConsultantService } from './consultant.service';
import { SignupConsultantDto } from './signupConsultant.dto';
import { LoginDto } from './login.dto';
import * as bcrypt from 'bcrypt';
import { createToken } from '../utils';

@Controller('consultant')
export class ConsultantController {
  constructor(private readonly consultantService: ConsultantService) {}

  @Post('signup')
  async insert(@Body() dto: SignupConsultantDto): Promise<object> {
    const { email, username, password, firstName, middleName, lastName } = dto;
    const findEmail = await this.consultantService.findOneByEmail(email);
    const findUsername = await this.consultantService.findOneByUsername(
      dto.username,
    );

    if (findEmail && findUsername) {
      throw new HttpException('Email and Username already exists', 400);
    }

    if (findEmail) {
      throw new HttpException('Email already exists', 400);
    }

    if (findUsername) {
      throw new HttpException('Username already exists', 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const data = await this.consultantService.insert(
      email,
      hashedPassword,
      username,
      firstName,
      middleName,
      lastName,
    );
    return {
      message: 'User created successfully',
      data,
    };
  }

  @Post('login')
  async login(@Body() dto: LoginDto): Promise<object> {
    const { inEmail, inUsername, inPassword } = dto;
    const user = inEmail
      ? await this.consultantService.findOneByEmail(inEmail)
      : await this.consultantService.findOneByUsername(inUsername);

    if (!user) {
      throw new HttpException('User not found', 400);
    }

    const { email, username, password, firstName, middleName, lastName } = user;
    const checkPassword = await bcrypt.compare(inPassword, password);

    if (!checkPassword) {
      throw new HttpException('Password is incorrect', 400);
    }

    const token = await createToken(user.id);

    return {
      data: {
        email,
        username,
        firstName,
        middleName,
        lastName,
      },
      token,
    };
  }
}
