import { Module } from '@nestjs/common';
import { QuestionService } from './service/question.service';
import { QuestionController } from './controller/question.controller';
import { questionProviders } from './question.providers';
import { AnswerModule } from '../answer/answer.module';

@Module({
  imports: [AnswerModule],
  controllers: [QuestionController],
  providers: [QuestionService, ...questionProviders],
})
export class QuestionModule {}
