import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { AnswerProviders } from './answer.providers';

@Module({
  controllers: [AnswerController],
  providers: [AnswerService, ...AnswerProviders],
})
export class AnswerModule {}
