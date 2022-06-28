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
    if (
      !dto.email ||
      !dto.username ||
      !dto.password ||
      !dto.firstName ||
      !dto.middleName ||
      !dto.lastName
    ) {
      throw new HttpException('All fields are required', 400);
    }

    const email = await this.consultantService.findOneByEmail(dto.email);

    const username = await this.consultantService.findOneByUsername(
      dto.username,
    );

    if (email && username) {
      throw new HttpException('Email and Username already exists', 400);
    }

    if (email) {
      throw new HttpException('Email already exists', 400);
    }

    if (username) {
      throw new HttpException('Username already exists', 400);
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const data = await this.consultantService.insert(
      dto.email,
      hashedPassword,
      dto.username,
      dto.firstName,
      dto.middleName,
      dto.lastName,
    );
    return {
      message: 'User created successfully',
      data,
    };
  }

  @Post('login')
  async login(@Body() dto: LoginDto): Promise<object> {
    if (!dto.username && !dto.email) {
      throw new HttpException('Username or Email is required', 400);
    }

    const user = dto.email
      ? await this.consultantService.findOneByEmail(dto.email)
      : await this.consultantService.findOneByUsername(dto.username);

    if (!user) {
      throw new HttpException('User not found', 400);
    }

    const checkPassword = await bcrypt.compare(dto.password, user.password);

    if (!checkPassword) {
      throw new HttpException('Password is incorrect', 400);
    }

    const token = await createToken(user.id);

    return {
      data: {
        email: user.email,
        username: user.username,
        firstName: user.firstName,
        middleName: user.middleName,
        lastName: user.lastName,
      },
      token,
    };
  }
}
