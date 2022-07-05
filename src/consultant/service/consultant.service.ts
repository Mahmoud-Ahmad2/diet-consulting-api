import { Injectable, Inject, HttpException } from '@nestjs/common';
import { Consultants } from '../model/consultant.model';
import { providersEnum } from '../../common/constant';
import * as bcrypt from 'bcrypt';
import { createToken } from '../../common/utils';

@Injectable()
export class ConsultantService {
  constructor(
    @Inject(providersEnum.CONSULTANT_REPOSITORY)
    private readonly consultantRepository: typeof Consultants,
  ) {}

  async findOneByEmail(email: string): Promise<Consultants> {
    return await this.consultantRepository.findOne({ where: { email } });
  }

  async findOneByUsername(username: string): Promise<Consultants> {
    return await this.consultantRepository.findOne({ where: { username } });
  }

  async findOneByUserId(userId: number): Promise<Consultants> {
    return await this.consultantRepository.findOne({ where: { id: userId } });
  }

  async insert(
    email: string,
    password: string,
    username: string,
    firstName: string,
    middleName: string,
    lastName: string,
  ): Promise<Consultants> {
    return await this.consultantRepository.create({
      email,
      password,
      username,
      firstName,
      middleName,
      lastName,
    });
  }

  async signup(
    email: string,
    password: string,
    username: string,
    firstName: string,
    middleName: string,
    lastName: string,
  ): Promise<Consultants> {
    const findEmail = await this.findOneByEmail(email);
    const findUsername = await this.findOneByUsername(username);

    if (findEmail && findUsername) {
      throw new HttpException('Email and Username already exists', 409);
    }

    if (findEmail) {
      throw new HttpException('Email already exists', 409);
    }

    if (findUsername) {
      throw new HttpException('Username already exists', 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    return await this.insert(
      email,
      hashedPassword,
      username,
      firstName,
      middleName,
      lastName,
    );
  }

  async login(
    inEmail: string,
    inUsername: string,
    inPassword: string,
  ): Promise<object> {
    if (!inEmail && !inUsername) {
      throw new HttpException('Email or Username is required', 400);
    }

    const user = inEmail
      ? await this.findOneByEmail(inEmail)
      : await this.findOneByUsername(inUsername);

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    const { email, username, password, firstName, middleName, lastName } = user;
    const checkPassword = await bcrypt.compare(inPassword, password);

    if (!checkPassword) {
      throw new HttpException('Password is incorrect', 403);
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
