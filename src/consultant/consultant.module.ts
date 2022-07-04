import { Module } from '@nestjs/common';
import { ConsultantService } from './service/consultant.service';
import { ConsultantController } from './controller/consultant.controller';
import { consultantProviders } from './consultant.providers';

@Module({
  controllers: [ConsultantController],
  providers: [ConsultantService, ...consultantProviders],
  exports: [ConsultantService],
})
export class ConsultantModule {}
