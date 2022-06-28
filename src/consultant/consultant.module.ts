import { Module } from '@nestjs/common';
import { ConsultantService } from './consultant.service';
import { ConsultantController } from './consultant.controller';
import { ConsultantProviders } from './consultant.providers';

@Module({
  controllers: [ConsultantController],
  providers: [ConsultantService, ...ConsultantProviders],
})
export class ConsultantModule {}
