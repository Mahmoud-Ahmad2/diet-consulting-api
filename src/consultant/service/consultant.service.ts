import { Injectable, Inject } from '@nestjs/common';
import { Consultants } from '../model/consultant.model';
import { providersEnum } from '../../common/constant';

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
}
