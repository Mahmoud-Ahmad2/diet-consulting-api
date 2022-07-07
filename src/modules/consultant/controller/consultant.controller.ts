import { Body, Controller, Post } from '@nestjs/common';
import { ConsultantService } from '../service/consultant.service';
import { SignupConsultantDto } from '../dto/signupConsultant.dto';
import { LoginDto } from '../dto/login.dto';
import { Public } from 'src/common/decorator/public.decorator';
import { Consultants } from '../model/consultant.model';

@Controller('consultant')
export class ConsultantController {
  constructor(private readonly consultantService: ConsultantService) {}

  @Post('signup')
  @Public()
  insert(@Body() dto: SignupConsultantDto): Promise<Consultants> {
    const { email, username, password, firstName, middleName, lastName } = dto;
    return this.consultantService.signup(
      email,
      password,
      username,
      firstName,
      middleName,
      lastName,
    );
  }

  @Post('login')
  @Public()
  login(@Body() dto: LoginDto): Promise<object> {
    const { inEmail, inUsername, inPassword } = dto;
    return this.consultantService.login(inEmail, inUsername, inPassword);
  }
}
