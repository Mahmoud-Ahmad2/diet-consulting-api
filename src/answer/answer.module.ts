import { Module } from '@nestjs/common';
import { AnswerService } from './service/answer.service';
import { AnswerController } from './controller/answer.controller';
import { answerProviders } from './answer.providers';

@Module({
  controllers: [AnswerController],
  providers: [AnswerService, ...answerProviders],
})
export class AnswerModule {}
