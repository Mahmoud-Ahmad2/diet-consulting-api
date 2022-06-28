import { Injectable, Inject } from '@nestjs/common';
import { Consultants } from './consultant.model';
import { CONSULTANT_REPOSITORY } from 'src/common/constant';

@Injectable()
export class ConsultantService {
  constructor(
    @Inject(CONSULTANT_REPOSITORY)
    private readonly consultantRepository: typeof Consultants,
  ) {}

  async findOneByEmail(email: string): Promise<Consultants> {
    return await this.consultantRepository.findOne({ where: { email } });
  }

  async findOneByUsername(username: string): Promise<Consultants> {
    return await this.consultantRepository.findOne({ where: { username } });
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
