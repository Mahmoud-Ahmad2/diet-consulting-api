import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { QuestionProviders } from './question.providers';

@Module({
  controllers: [QuestionController],
  providers: [QuestionService, ...QuestionProviders],
})
export class QuestionModule {}
