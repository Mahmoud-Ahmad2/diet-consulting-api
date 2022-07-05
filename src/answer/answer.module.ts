import { Module } from '@nestjs/common';
import { AnswerService } from './service/answer.service';
import { answerProviders } from './answer.providers';

@Module({
  providers: [AnswerService, ...answerProviders],
  exports: [AnswerService],
})
export class AnswerModule {}
